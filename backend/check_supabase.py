import asyncio
from app.database import get_supabase_client

async def main():
    print("Attempting to connect to Supabase...")
    try:
        supabase = get_supabase_client()
        print("Supabase client initialized.")
        
        # Attempt to fetch specific columns from the first user from the 'users' table
        print("Fetching users...")
        response = await supabase.from_('users').select('id, email, full_name').limit(1).execute()
        
        print("Query executed.")
        
        # The actual data is in response.data
        if response.data:
            print("Successfully connected to Supabase and fetched data!")
            print("First user:", response.data[0])
        else:
            print("Connected to Supabase, but could not fetch user data. The 'users' table might be empty.")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    asyncio.run(main())
