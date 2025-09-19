# Career Project - Backend API with Supabase

This is the backend API for the Career Project, built with FastAPI and integrated with Supabase for authentication and database services.

## Features

- **FastAPI** - Modern, fast (high-performance), web framework for building APIs
- **Supabase** - Open source Firebase alternative with PostgreSQL database and authentication
- **SQLAlchemy** - ORM for database operations with async support
- **JWT Authentication** - Secure token-based authentication
- **Async Support** - Built with Python's asyncio for better performance
- **Environment Configuration** - Easy configuration using environment variables

## Prerequisites

- Python 3.8+
- pip (Python package manager)
- Supabase account and project (https://supabase.com/)

## Installation

1. Clone the repository
2. Create a virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   .\venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the Supabase credentials in the `.env` file

## Configuration

Create a `.env` file in the root directory with the following variables:

```env
# Supabase Configuration
SUPABASE_URL=your-supabase-project-url
SUPABASE_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
SUPABASE_JWT_SECRET=your-supabase-jwt-secret

# Database Configuration
DATABASE_URL=postgresql+asyncpg://postgres:your-db-password@db.your-supabase-project.supabase.co:5432/postgres

# Authentication
SECRET_KEY=your-secret-key-here
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# CORS (adjust as needed for your frontend)
CORS_ORIGINS=http://localhost:3000,http://localhost:5173
```

## Running the Application

```bash
# Development mode with auto-reload
uvicorn app.main:app --reload

# Production mode
# uvicorn app.main:app --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Documentation

- **Interactive API Docs (Swagger UI)**: [/docs](http://localhost:8000/docs)
- **Alternative API Docs (ReDoc)**: [/redoc](http://localhost:8000/redoc)

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. To authenticate your requests, include the JWT token in the `Authorization` header:

```
Authorization: Bearer your-jwt-token
```

### Authentication Endpoints

- `POST /api/v1/auth/signup` - Register a new user
- `POST /api/v1/auth/login` - Login and get access token
- `GET /api/v1/auth/me` - Get current user information

## Health Check

- `GET /health` - Check API health status and service connections
  - Response:
    ```json
    {
      "status": "ok",
      "timestamp": "2025-09-19T12:00:00.000000",
      "version": "1.0.0",
      "environment": "development",
      "database_status": "connected",
      "supabase_status": "connected"
    }
    ```

### Authentication

*Coming soon...*

### Users

*Coming soon...*

## Development

### Project Structure

```
backend/
├── main.py           # Main application file
├── requirements.txt  # Python dependencies
└── README.md         # This file
```

### Adding Dependencies

1. Install a new package:
   ```bash
   pip install <package-name>
   ```
2. Update requirements.txt:
   ```bash
   pip freeze > requirements.txt
   ```

## License

This project is licensed under the MIT License.
