.PHONY: all help prod dev down down-volumes restart logs build db-migrate db-seed db-reset db-studio

# Default target: start development environment
all: dev

# Display available targets
help:
	@echo "Available targets:"
	@echo "  make dev          - Start development environment"
	@echo "  make prod         - Start production environment"
	@echo "  make down         - Stop all containers"
	@echo "  make down-volumes - Stop containers and remove volumes"
	@echo "  make restart      - Restart all containers"
	@echo "  make logs         - View container logs"
	@echo "  make build        - Build containers"
	@echo "  make db-migrate   - Run database migrations"
	@echo "  make db-seed      - Seed the database"
	@echo "  make db-reset     - Reset the database"
	@echo "  make db-studio    - Open Prisma Studio"

# Start production environment
prod:
	docker compose up -d nextjs-prod

# Start development environment
dev:
	docker compose up -d nextjs-dev

# Stop all containers
down:
	docker compose down

# Stop containers and remove volumes
down-volumes:
	docker compose down -v

# Restart all containers
restart:
	docker compose restart

# View container logs (use 'make logs' or 'make logs SERVICE=nextjs-dev')
logs:
	@if [ -z "$(SERVICE)" ]; then \
		docker compose logs -f; \
	else \
		docker compose logs -f $(SERVICE); \
	fi

# Build containers (use 'make build' or 'make build SERVICE=nextjs-dev')
build:
	@if [ -z "$(SERVICE)" ]; then \
		docker compose build; \
	else \
		docker compose build $(SERVICE); \
	fi

# Run database migrations
db-migrate:
	docker compose exec nextjs-dev pnpm prisma migrate dev

# Seed the database
db-seed:
	docker compose exec nextjs-dev pnpm prisma db seed

# Reset the database
db-reset:
	docker compose exec nextjs-dev pnpm prisma migrate reset

# Open Prisma Studio
db-studio:
	docker compose exec nextjs-dev pnpm prisma studio
