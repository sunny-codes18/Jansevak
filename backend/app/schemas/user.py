from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List
from datetime import datetime

class UserBase(BaseModel):
    username: str
    email: EmailStr
    full_name: str
    role: str  # MLA, MP, Sector Head, Worker, Super Admin
    department: Optional[str] = None
    is_active: bool = True

class UserCreate(UserBase):
    password: str

class UserInDB(UserBase):
    hashed_password: str
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class UserOut(UserBase):
    id: str = Field(alias="_id")
    created_at: datetime

class Token(BaseModel):
    access_token: str
    token_type: str
