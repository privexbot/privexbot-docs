# Makefile for Privexbot Docs Docker Operations

.PHONY: help dev prod build-dev build-prod up-dev up-prod down logs clean restart test

# Default target
help: ## Show this help message
	@echo "Privexbot Docs - Docker Operations"
	@echo "=================================="
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

# Development commands
dev: ## Start development server with hot reload
	docker-compose up privexbot-docs-dev

dev-d: ## Start development server in background
	docker-compose up -d privexbot-docs-dev

build-dev: ## Build development image
	docker-compose build privexbot-docs-dev

# Production commands
prod: ## Start production server
	docker-compose up privexbot-docs-prod

prod-d: ## Start production server in background
	docker-compose up -d privexbot-docs-prod

build-prod: ## Build production image
	docker-compose build privexbot-docs-prod

# General commands
build: build-dev build-prod ## Build both development and production images

up: ## Start both development and production servers
	docker-compose up

down: ## Stop all services
	docker-compose down

logs: ## View logs from all services
	docker-compose logs -f

logs-dev: ## View development server logs
	docker-compose logs -f privexbot-docs-dev

logs-prod: ## View production server logs
	docker-compose logs -f privexbot-docs-prod

restart: ## Restart all services
	docker-compose restart

restart-dev: ## Restart development server
	docker-compose restart privexbot-docs-dev

restart-prod: ## Restart production server
	docker-compose restart privexbot-docs-prod

# Maintenance commands
clean: ## Remove containers, networks, and volumes
	docker-compose down -v
	docker system prune -f

clean-all: ## Remove everything including images
	docker-compose down -v --rmi all
	docker system prune -af

# Development utilities
shell-dev: ## Access development container shell
	docker-compose exec privexbot-docs-dev sh

shell-prod: ## Access production container shell
	docker-compose exec privexbot-docs-prod sh

ps: ## Show running containers
	docker-compose ps

# Build and test
test: build-prod ## Build and test production image
	@echo "Testing production build..."
	@docker run --rm -p 8081:8080 privexbot-docs-prod &
	@sleep 5
	@curl -f http://localhost:8081/health && echo "✅ Health check passed" || echo "❌ Health check failed"
	@docker stop $$(docker ps -q --filter ancestor=privexbot-docs-prod)

# Quick commands for common workflows
quick-dev: build-dev dev-d ## Quick start: build and run development server in background

quick-prod: build-prod prod-d ## Quick start: build and run production server in background

status: ## Show container status and health
	@echo "Container Status:"
	@docker-compose ps
	@echo "\nHealth Status:"
	@docker inspect --format='{{.Name}}: {{.State.Health.Status}}' $$(docker-compose ps -q) 2>/dev/null || echo "No health checks available"

# Installation
install: ## Install dependencies locally (non-Docker)
	npm ci

# Local development (non-Docker)
start: ## Start local development server (non-Docker)
	npm start

build-local: ## Build locally (non-Docker)
	npm run build

serve-local: ## Serve built site locally (non-Docker)
	npm run serve