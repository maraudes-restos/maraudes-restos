FROM docker.io/node:22.20-alpine3.21@sha256:f40aebdd0c1959821ab6d72daecafb2cd1d4c9a958e9952c1d71b84d4458f875 AS base
RUN corepack enable pnpm

FROM base AS deps
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN pnpm i --frozen-lockfile

FROM base AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN pnpm run build

RUN ls -R .next

# Production image, copy all the files and run next
FROM base AS prod
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/prisma /app/prisma

RUN if [ -d "/app/.next" ]; then chmod -R a-w /app/.next; fi

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["sh", "-c",  "pnpx prisma migrate deploy && node server.js"]

# Development image
FROM base AS dev

WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1
ENV HOSTNAME="0.0.0.0"
ENV NODE_ENV=development
ENV PORT=3000

COPY --from=deps /app/node_modules ./node_modules
COPY . .

EXPOSE 3000

CMD ["sh", "-c", "pnpm prisma migrate dev && pnpm run dev"]
