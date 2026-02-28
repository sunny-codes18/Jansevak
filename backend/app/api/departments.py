from fastapi import APIRouter, HTTPException, Depends
from typing import List
from pydantic import BaseModel

router = APIRouter(prefix="/departments", tags=["departments"])

class DepartmentBase(BaseModel):
    name: str
    description: str
    head: str
    email: str
    phone: str
    priority: str
    sla_target: int

class Department(DepartmentBase):
    id: int
    active_complaints: int
    resolution_rate: float
    status: str

# Mock data
DEPARTMENTS_DB = [
    {"id": 1, "name": "Health Department", "description": "Medical and health services", "head": "Dr. S. Sharma", "email": "health@jansevak.gov", "phone": "9876543210", "priority": "High", "sla_target": 3, "active_complaints": 124, "resolution_rate": 98.2, "status": "Active"},
    {"id": 2, "name": "Electricity Department", "description": "Power supply and maintenance", "head": "Er. R. Verma", "email": "power@jansevak.gov", "phone": "9876543211", "priority": "High", "sla_target": 2, "active_complaints": 86, "resolution_rate": 82.5, "status": "Active"},
]

@router.get("/", response_model=List[Department])
async def get_departments():
    return DEPARTMENTS_DB

@router.post("/", response_model=Department)
async def create_department(dept: DepartmentBase):
    new_dept = {
        "id": len(DEPARTMENTS_DB) + 1,
        **dept.dict(),
        "active_complaints": 0,
        "resolution_rate": 0.0,
        "status": "Active"
    }
    DEPARTMENTS_DB.append(new_dept)
    return new_dept
