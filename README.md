# Asan Shadi - Wedding Planning Platform

A modern wedding planning platform built with React, NestJS, and PostgreSQL.

## 🏗️ Architecture

- **Frontend**: React + Vite + TypeScript + shadcn/ui
- **Backend**: NestJS + Prisma + PostgreSQL
- **Database**: PostgreSQL (local development)

## 📁 Project Structure

```
wedio/
├── frontend/          # React frontend application
├── backend/           # NestJS backend API
├── postman/           # API collection for testing
└── docker-compose.yml # Local development setup
```

## 🚀 Local Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git
- Docker (for local database)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/bawanyabdulrehman/wedio.git
   cd wedio
   ```

2. **Set up environment variables**

   Create `.env` files in both frontend and backend directories:

   **Backend (.env)**
   ```env
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/shadi"
   JWT_SECRET="your-super-secret-jwt-key-change-this-in-production"
   PORT=3000
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:8080,http://127.0.0.1:8080
   ```

   **Frontend (.env)**
   ```env
   VITE_API_URL=http://localhost:3000
   ```

3. **Start the database**
   ```bash
   docker-compose up db -d
   ```

4. **Setup backend**
   ```bash
   cd backend
   npm install
   npx prisma generate
   npx prisma db push
   npm run start:debug
   ```

5. **Setup frontend**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:8080
   - Backend API: http://localhost:3000

### Alternative: Using Docker Compose

For a complete local setup with all services:

```bash
docker-compose up -d
```

This will start:
- PostgreSQL database on port 5432
- Backend API on port 3000
- Frontend on port 8080

## 🛠️ Development

### Backend Development

```bash
cd backend

# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run start:debug

# Run tests
npm run test
```

### Frontend Development

```bash
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint
```

### Database Management

```bash
cd backend

# Open Prisma Studio
npx prisma studio

# Reset database
npx prisma migrate reset

# Deploy migrations
npx prisma migrate deploy
```

## 🔧 Environment Variables

### Backend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://postgres:postgres@localhost:5432/shadi` |
| `JWT_SECRET` | Secret for JWT token signing | `your-secret-key` |
| `PORT` | Server port | `3000` |
| `CORS_ORIGIN` | Allowed CORS origins | `http://localhost:8080` |

### Frontend Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_API_URL` | Backend API URL | `http://localhost:3000` |

## 🧪 Testing

### Backend Tests

```bash
cd backend

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Test coverage
npm run test:cov
```

## 🔍 Troubleshooting

### Common Issues

1. **Database connection failed**
   - Check if PostgreSQL is running
   - Verify `DATABASE_URL` environment variable
   - Ensure database exists

2. **CORS errors**
   - Verify `CORS_ORIGIN` includes your frontend URL
   - Check if backend is running on correct port

3. **Prisma client not generated**
   - Run `npx prisma generate` in backend directory
   - Check if schema.prisma file exists

4. **Frontend can't connect to backend**
   - Verify `VITE_API_URL` is set correctly
   - Check if backend is running
   - Ensure CORS is configured properly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests if applicable
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Code Style

- Follow the existing code style and formatting
- Use meaningful commit messages
- Add comments for complex logic
- Ensure all tests pass before submitting 

THANK YOU FOR YOUR ATTENTION TO THIS MATTER
