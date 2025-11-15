# Detect package manager (prioritize pnpm over npm)
PKG_MANAGER := $(shell command -v pnpm 2> /dev/null)
ifndef PKG_MANAGER
	PKG_MANAGER := $(shell command -v npm 2> /dev/null)
endif
ifndef PKG_MANAGER
	$(error No package manager found. Please install pnpm or npm)
endif

# Detect compose command (prioritize docker over podman)
COMPOSE := $(shell command -v docker 2> /dev/null)
ifdef COMPOSE
	COMPOSE := docker compose
else
	COMPOSE := $(shell command -v podman 2> /dev/null)
	ifdef COMPOSE
		COMPOSE := podman compose
	else
		$(error No container runtime found. Please install Docker or Podman)
	endif
endif

.PHONY: all help dev setup db-start db-stop db-generate db-migrate db-seed db-reset db-studio

# Default target: start development environment
all: dev

# Display available targets
help:
	@echo "Available targets:"
	@echo "  make dev          - Start development server"
	@echo "  make setup        - Setup local environment (install + db-start + generate + migrate)"
	@echo "  make db-start     - Start PostgreSQL database (Docker)"
	@echo "  make db-stop      - Stop PostgreSQL database"
	@echo "  make db-generate  - Generate Prisma client"
	@echo "  make db-migrate   - Run database migrations"
	@echo "  make db-seed      - Seed the database"
	@echo "  make db-reset     - Reset the database"
	@echo "  make db-studio    - Open Prisma Studio"

# Start development environment
dev:
	$(PKG_MANAGER) run dev

# Start PostgreSQL database
db-start:
	$(COMPOSE) up -d postgres

# Stop PostgreSQL database
db-stop:
	$(COMPOSE) stop postgres

# Setup local environment
setup: db-start
	$(PKG_MANAGER) install
	$(PKG_MANAGER) prisma generate
	$(PKG_MANAGER) prisma migrate dev
	$(PKG_MANAGER) prisma db seed

# Generate Prisma client
db-generate:
	$(PKG_MANAGER) prisma generate

# Run database migrations
db-migrate:
	$(PKG_MANAGER) prisma migrate dev

# Seed the database
db-seed:
	$(PKG_MANAGER) prisma db seed

# Reset the database
db-reset:
	$(PKG_MANAGER) prisma migrate reset

# Open Prisma Studio
db-studio:
	$(PKG_MANAGER) prisma studio
