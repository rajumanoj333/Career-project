from .config import settings
from supabase import acreate_client, AsyncClient

# Supabase client for database operations
async def get_supabase_client() -> AsyncClient:
    try:
        if not settings.supabase_url or not settings.supabase_service_role_key:
            raise Exception("Supabase credentials not configured")
        # Use service role key for admin operations
        return await acreate_client(settings.supabase_url, settings.supabase_service_role_key)
    except Exception as e:
        print(f"Supabase client error: {str(e)}")
        # Return a mock client for testing
        return None

async def get_supabase_anon_client() -> AsyncClient:
    try:
        if not settings.supabase_url or not settings.supabase_key:
            raise Exception("Supabase anon key not configured")
        # Use anon key for user operations
        return await acreate_client(settings.supabase_url, settings.supabase_key)
    except Exception as e:
        print(f"Supabase anon client error: {str(e)}")
        return None