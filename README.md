This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Development

#### Seeding database

To seed the database you can  run:

```bash
docker compose exec nextjs-dev pnpm prisma db seed
```

Or if you want to reset the database with seeding:

```bash
docker compose exec nextjs-dev pnpm prisma migrate reset
```

#### Create a migration

To perform a migration with prisma you must do the following commands:

```bash
docker compose up nextjs-dev -d
docker compose exec nextjs-dev pnpm prisma migrate dev
```

### Database content

To observe the content of the database, you can use prisma studio by executing:

```bash
docker compose  exec nextjs-dev pnpm prisma studio
```

You can access it with your browser on [http://localhost:5555](http://localhost:5555).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
