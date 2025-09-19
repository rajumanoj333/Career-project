from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models import user
from . import schemas
from app.security import get_password_hash

async def get_user_by_email(db: AsyncSession, email: str):
    result = await db.execute(select(user.User).filter(user.User.email == email))
    return result.scalars().first()

async def create_user(db: AsyncSession, user_data: schemas.UserCreate):
    hashed_password = get_password_hash(user_data.password)
    db_user = user.User(
        email=user_data.email,
        full_name=user_data.full_name,
        password_hash=hashed_password,
        role=user_data.role
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user
