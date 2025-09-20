#!/usr/bin/env python3
"""
Direct Supabase test to check email validation issues
"""
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

def test_supabase_direct():
    # You'll need to set these environment variables or replace with your actual values
    supabase_url = os.getenv("SUPABASE_URL")
    supabase_key = os.getenv("SUPABASE_KEY")
    
    if not supabase_url or not supabase_key:
        print("Error: SUPABASE_URL or SUPABASE_KEY environment variables are not set.")
        print("Please ensure your .env file is configured correctly or set them in your environment.")
        return

    print(f"Testing Supabase connection...")
    print(f"URL: {supabase_url}")
    print(f"Key: {supabase_key[:10]}..." if supabase_key else "No key provided")
    
    try:
        supabase: Client = create_client(supabase_url, supabase_key)
        print("Supabase client created successfully")
        
        # Test with a simple email
        test_email = "test-gemini@gmail.com"
        test_password = "testpassword123"
        
        print(f"Testing registration with email: {test_email}")
        
        response = supabase.auth.sign_up({
            "email": test_email,
            "password": test_password
        })
        
        print(f"Response: {response}")
        
        if response.user:
            print("User registration successful!")
        elif response.session:
            print("User registered, needs email confirmation")
        else:
            print("Registration failed")
            
    except Exception as e:
        print(f"Error: {str(e)}")
        print("\nPossible solutions:")
        print("1. Check your Supabase URL and API key")
        print("2. Go to Supabase Dashboard > Authentication > Settings")
        print("3. Disable 'Enable email confirmations' for development")
        print("4. Check 'Email domains' settings - remove any restrictions")
        print("5. Ensure 'Enable sign ups' is turned ON")

if __name__ == "__main__":
    test_supabase_direct()
