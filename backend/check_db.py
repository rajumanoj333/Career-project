import asyncio
from app.database import get_supabase_client

async def main():
    print("Attempting to connect to Supabase...")
    try:
        supabase = await get_supabase_client()
        if supabase is None:
            raise Exception("Failed to get Supabase client. Check credentials.")
        
        print("Supabase client created. Attempting to fetch a user...")
        # Attempt to fetch a user. Replace with a real email if you have one.
        # Assuming 'users' is your table name and 'email' is a column.
        response = supabase.from_('users').select('*').eq('email', 'test@example.com')
        result = await response.execute()
        user_data = result.data
        
        if user_data:
            print("Successfully connected and fetched data!")
            print(f"Found user: {user_data[0]['email']}")
        else:
            print("Successfully connected to Supabase, but no user with that email was found.")
            print("This still confirms the connection is working correctly.")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    asyncio.run(main())
