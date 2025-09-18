from fastapi import FastAPI, HTTPException, Depends 
from fastapi.middleware.cors import CORSMiddleware 
from pydantic import BaseModel 
from typing import List, Optional 
import uvicorn 
 
app = FastAPI(title="Career Project API") 
 
# CORS middleware configuration 
app.add_middleware( 
    CORSMiddleware, 
    allow_origins=["http://localhost:5173"],  # Vite's default port 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"], 
) 
 
# Sample data model 
class Item(BaseModel): 
    id: int 
    name: str 
    description: Optional[str] = None 
 
# In-memory database 
items_db = [] 
 
# API endpoints 
@app.get("/") 
async def read_root(): 
    return {"message": "Welcome to the Career Project API"} 
 
@app.get("/items/", response_model=List[Item]) 
async def read_items(): 
    return items_db 
 
@app.post("/items/", response_model=Item) 
async def create_item(item: Item): 
    items_db.append(item) 
    return item 
 
if __name__ == "__main__": 
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True) 
