This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, start the development environment:

```bash
make dev
# or simply
make
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Available Commands

To see all available Makefile commands:

```bash
make help
```

### Development

#### Docker Commands

```bash
make dev          # Start development environment
make prod         # Start production environment
make down         # Stop all containers
make down-volumes # Stop containers and remove volumes
make restart      # Restart all containers
make logs         # View all container logs
make logs SERVICE=nextjs-dev  # View logs for specific service
make build        # Build all containers
make build SERVICE=nextjs-dev # Build specific container
```

#### Database Commands

##### Create a migration

To perform a migration with Prisma:

```bash
make db-migrate
```

##### Seeding database

To seed the database:

```bash
make db-seed
```

##### Reset database

To reset the database with seeding:

```bash
make db-reset
```

##### Database Studio

To observe the content of the database, you can use Prisma Studio:

```bash
make db-studio
```

You can access it with your browser on [http://localhost:5555](http://localhost:5555).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
