import uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from app.routers import auth

# Load environment variables
load_dotenv()

# Create FastAPI app
app = FastAPI(
    title="Career Project API",
    description="API for Career Project Management System with Supabase Integration",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    openapi_url="/openapi.json"
)

# CORS middleware configuration
# In a production environment, you should restrict the allowed origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

app.include_router(auth.router, prefix="/api", tags=["Authentication"])

@app.get("/", tags=["Root"])
async def read_root():
    """
    Root endpoint that provides API information.
    """
    return {"message": "Welcome to the Career Project API with Supabase Integration"}

# Health check endpoint
@app.get("/health", tags=["Health"])
async def health_check():
    """
    Health check endpoint to verify the API is running.
    """
    return {"status": "ok"}

if __name__ == "__main__":
    port = 8000
    uvicorn.run("main:app", host="0.0.0.0", port=port, reload=True)