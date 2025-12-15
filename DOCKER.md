# 🐳 Docker Guide for Privexbot Docs

This guide explains how to build and run the Privexbot documentation site using Docker for both development and production environments.

## 📋 Prerequisites

- Docker 20.10+
- Docker Compose 2.0+
- Git

## 🚀 Quick Start

### Development Mode (Hot Reload)

```bash
# Build and start development server with hot reload
docker-compose up privexbot-docs-dev

# Or run in background
docker-compose up -d privexbot-docs-dev
```

**Access the site:** http://localhost:3000

### Production Mode

```bash
# Build and start production server
docker-compose up privexbot-docs-prod

# Or run in background
docker-compose up -d privexbot-docs-prod
```

**Access the site:** http://localhost:8080

## 🛠️ Available Docker Commands

### Development Commands

```bash
# Start development server with hot reload
docker-compose up privexbot-docs-dev

# Build development image only
docker-compose build privexbot-docs-dev

# View logs
docker-compose logs -f privexbot-docs-dev

# Stop development server
docker-compose down privexbot-docs-dev

# Restart development server
docker-compose restart privexbot-docs-dev
```

### Production Commands

```bash
# Start production server
docker-compose up privexbot-docs-prod

# Build production image only
docker-compose build privexbot-docs-prod

# View logs
docker-compose logs -f privexbot-docs-prod

# Stop production server
docker-compose down privexbot-docs-prod

# Restart production server
docker-compose restart privexbot-docs-prod
```

### General Commands

```bash
# Stop all services
docker-compose down

# Remove all containers and volumes
docker-compose down -v

# Rebuild all images
docker-compose build --no-cache

# View running containers
docker-compose ps

# Execute commands inside running container
docker-compose exec privexbot-docs-dev sh
docker-compose exec privexbot-docs-prod sh
```

## 🏗️ Docker Build Stages

The Dockerfile uses multi-stage builds for optimization:

### 1. **Builder Stage**
- Uses Node.js 20 Alpine
- Installs dependencies
- Builds the static site

### 2. **Development Stage**
- Full Node.js environment
- Hot reload support
- All dev dependencies
- Runs on port 3000

### 3. **Production Stage**
- Nginx Alpine for serving static files
- Optimized for performance
- Security hardened
- Runs on port 8080

## 🔧 Configuration

### Environment Variables

#### Development
```bash
NODE_ENV=development
CHOKIDAR_USEPOLLING=true  # Enables file watching in Docker
```

#### Production
```bash
NODE_ENV=production
```

### Port Configuration

| Environment | Internal Port | External Port | Protocol |
|-------------|---------------|---------------|----------|
| Development | 3000          | 3000          | HTTP     |
| Production  | 8080          | 8080          | HTTP     |

### Volume Mounts (Development)

- `./:/app` - Source code (hot reload)
- `/app/node_modules` - Node modules (performance)
- `/app/build` - Build output (prevent overwrites)

## 📊 Health Checks

Both development and production containers include health checks:

### Development Health Check
- **Endpoint:** http://localhost:3000
- **Interval:** 30s
- **Timeout:** 10s
- **Start Period:** 40s

### Production Health Check
- **Endpoint:** http://localhost:8080/health
- **Interval:** 30s
- **Timeout:** 10s
- **Start Period:** 30s

## 🔒 Security Features

### Production Security
- Non-root user (`nextjs:1001`)
- Unprivileged port (8080)
- Security headers (CORS, XSS, etc.)
- Hidden nginx version
- Resource limits

### Development Security
- Non-root user
- Isolated network
- Proper signal handling with dumb-init

## 🎯 Performance Optimizations

### Build Performance
- Multi-stage builds
- .dockerignore excludes unnecessary files
- Layer caching optimization
- Production dependencies only

### Runtime Performance
- Alpine Linux (smaller images)
- Nginx with gzip compression
- Static asset caching
- HTTP/2 ready

## 📦 Custom Builds

### Build Development Image
```bash
docker build --target development -t privexbot-docs:dev .
```

### Build Production Image
```bash
docker build --target production -t privexbot-docs:prod .
```

### Run Custom Builds
```bash
# Development
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules privexbot-docs:dev

# Production
docker run -p 8080:8080 privexbot-docs:prod
```

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Find and stop conflicting processes
docker-compose down
lsof -ti:3000 | xargs kill -9  # For port 3000
lsof -ti:8080 | xargs kill -9  # For port 8080
```

#### File Changes Not Detected (Development)
```bash
# Ensure polling is enabled
export CHOKIDAR_USEPOLLING=true
docker-compose up privexbot-docs-dev
```

#### Build Fails
```bash
# Clear Docker cache
docker system prune -a
docker-compose build --no-cache
```

#### Permission Issues
```bash
# Fix ownership
sudo chown -R $(whoami) .
```

### Debugging

#### View Container Logs
```bash
# Development
docker-compose logs -f privexbot-docs-dev

# Production
docker-compose logs -f privexbot-docs-prod

# All services
docker-compose logs -f
```

#### Inspect Running Container
```bash
# Access container shell
docker-compose exec privexbot-docs-dev sh

# Check container stats
docker stats

# Inspect container configuration
docker inspect privexbot-docs-dev
```

## 🚢 Deployment

### Docker Hub
```bash
# Tag and push to registry
docker tag privexbot-docs:prod your-registry/privexbot-docs:latest
docker push your-registry/privexbot-docs:latest
```

### Production Deployment
```bash
# Pull and run on production server
docker pull your-registry/privexbot-docs:latest
docker run -d -p 80:8080 --name privexbot-docs your-registry/privexbot-docs:latest
```

## 📈 Monitoring

### Health Check Status
```bash
# Check health status
docker-compose ps
docker inspect --format='{{.State.Health.Status}}' privexbot-docs-prod
```

### Resource Usage
```bash
# Monitor resource usage
docker stats privexbot-docs-dev privexbot-docs-prod
```

## 🔧 Advanced Configuration

### Custom nginx.conf
The production build uses a custom nginx configuration with:
- Gzip compression
- Security headers
- Client-side routing support
- Static asset caching
- Health check endpoint

### Network Configuration
- Custom bridge network: `privexbot-network`
- Isolated container communication
- External port mapping

---

## 📞 Support

For issues or questions:
1. Check the troubleshooting section above
2. Review container logs
3. Verify Docker and Docker Compose versions
4. Check port availability

**Happy Dockerizing! 🐳**