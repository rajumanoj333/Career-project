#!/usr/bin/env python3
"""
Direct Supabase test to check email validation issues
"""
import os
from supabase import create_client, Client

def test_supabase_direct():
    # You'll need to set these environment variables or replace with your actual values
    supabase_url = os.getenv("SUPABASE_URL", "https://ejtrcbdoatgxsvmsqnzi.supabase.co")
    supabase_key = os.getenv("SUPABASE_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVqdHJjYmRvYXRneHN2bXNxbnppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyODQzODMsImV4cCI6MjA3Mzg2MDM4M30.fhdy-22__1JjM0i23IG4hKBaJXJp17eieJhBW3ZHe4M")
    
    print(f"Testing Supabase connection...")
    print(f"URL: {supabase_url}")
    print(f"Key: {supabase_key[:10]}..." if supabase_key else "No key provided")
    
    try:
        supabase: Client = create_client(supabase_url, supabase_key)
        print("Supabase client created successfully")
        
        # Test with a simple email
        test_email = "test@example.com"
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
