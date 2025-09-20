from fastapi import APIRouter, HTTPException, status
from app import schemas
from app.database import get_supabase_client, get_supabase_anon_client
from supabase import Client

router = APIRouter()

@router.get("/test")
async def test_endpoint():
    """Test endpoint to check if the API is working"""
    return {"message": "Auth API is working", "status": "ok"}

@router.post("/login", response_model=schemas.Token)
async def login_user(user: schemas.UserLogin):
    """Login user using Supabase authentication"""
    try:
        supabase: Client = await get_supabase_anon_client()
        
        if not supabase:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Supabase not configured. Please set SUPABASE_URL and SUPABASE_KEY environment variables."
            )
        
        # Use Supabase auth to sign in
        response = await supabase.auth.sign_in_with_password({
            "email": user.email,
            "password": user.password
        })
        
        if response.user:
            return {
                "access_token": response.session.access_token,
                "token_type": "bearer"
            }
        else:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials"
            )
    except Exception as e:
        print(f"Login error: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail=f"Login failed: {str(e)}"
        )

@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register_user(user: schemas.UserCreate):
    """Register user using Supabase authentication"""
    try:
        supabase: Client = await get_supabase_anon_client()
        
        if not supabase:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Supabase not configured. Please set SUPABASE_URL and SUPABASE_KEY environment variables."
            )
        
        # Use Supabase auth to sign up
        print(f"Attempting to register user: {user.email}")
        response = await supabase.auth.sign_up({
            "email": user.email,
            "password": user.password,
            "options": {
                "data": {
                    "full_name": user.full_name,
                    "role": user.role
                },
                "email_redirect_to": None  # Disable email confirmation for development
            }
        })
        
        print(f"Supabase response: {response}")
        
        if response.user:
            return {"message": "User registered successfully"}
        elif response.session:
            # User registered but needs email confirmation
            return {"message": "User registered successfully. Please check your email for confirmation."}
        else:
            raise HTTPException(status_code=400, detail="Registration failed")
    except Exception as e:
        error_msg = str(e)
        print(f"Registration error: {error_msg}")
        
        # Handle specific Supabase email validation errors
        if "Email address" in error_msg and "invalid" in error_msg:
            raise HTTPException(
                status_code=400, 
                detail="Email validation failed. Please check your Supabase project settings: 1) Go to Authentication > Settings, 2) Disable 'Enable email confirmations' for development, 3) Check 'Email domains' restrictions"
            )
        else:
            raise HTTPException(status_code=400, detail=f"Registration failed: {error_msg}")
