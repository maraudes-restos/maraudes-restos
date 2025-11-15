This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 22.x or higher
- **Docker** or **Podman** (for PostgreSQL database)
  - [Docker](https://www.docker.com/) or [Podman](https://podman.io/)
- **pnpm** (recommended) or **npm**
  - For pnpm: enable with `corepack enable pnpm`
  - For npm: comes bundled with Node.js

> **Note:** The Makefile automatically detects:
> - Package manager (prioritizing pnpm over npm)
> - Container runtime (prioritizing docker over podman)

### Setup

This project uses **PostgreSQL** running in Docker for the database, while Next.js runs locally for fast development with hot-reload.

#### 1. Setup environment variables

Copy the template file:

```bash
cp .env.template .env
```

The default configuration is ready to use for local development:
```env
POSTGRES_USER=dev_user
POSTGRES_PASSWORD=dev_password
POSTGRES_DB=maraudes_restos_dev
DATABASE_URL="postgresql://dev_user:dev_password@localhost:5432/maraudes_restos_dev?schema=public"
```

#### 2. One-command setup

Run the setup command to start the database and initialize everything:

```bash
make setup
```

This will:
- Start PostgreSQL in Docker (on port 5432)
- Install dependencies (using pnpm or npm)
- Generate the Prisma client
- Run database migrations
- Seed the database with initial data

#### 3. Start the development server

```bash
make dev
# or simply
make
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

---

### Available Commands

To see all available Makefile commands:

```bash
make help
```

#### Development Commands

- `make dev` - Start Next.js development server
- `make setup` - Setup local environment (db-start + install + generate + migrate + seed)
- `make db-start` - Start PostgreSQL database (Docker)
- `make db-stop` - Stop PostgreSQL database

#### Database Commands

##### Generate Prisma Client

After modifying `prisma/schema.prisma`:

```bash
make db-generate
```

##### Create a migration

To create and apply a new database migration:

```bash
make db-migrate
```

##### Seeding database

To seed the database with initial data:

```bash
make db-seed
```

##### Reset database

To reset the database (drops all data and re-runs migrations + seed):

```bash
make db-reset
```

##### Database Studio

To visually explore and edit your database:

```bash
make db-studio
```

You can access it with your browser on [http://localhost:5555](http://localhost:5555).

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
