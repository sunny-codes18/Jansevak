from fastapi import APIRouter, HTTPException
from typing import List, Optional
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/complaints", tags=["complaints"])

class ComplaintBase(BaseModel):
    title: str
    description: str
    category: str
    department_id: int
    lat: float
    lng: float
    address: str

class Complaint(ComplaintBase):
    id: str
    status: str  # Pending, Assigned, Resolved, Escalated
    worker_id: Optional[int] = None
    created_at: datetime
    updated_at: datetime
    is_escalated: bool = False

# Mock Data
COMPLAINTS_DB = [
    {"id": "C-1001", "title": "Main Line Power Failure", "description": "No power in Sector 4 block C", "category": "Electricity", "department_id": 2, "lat": 28.6139, "lng": 77.2090, "address": "Block C, Sector 4, New Delhi", "status": "Assigned", "worker_id": 105, "created_at": datetime.utcnow(), "updated_at": datetime.utcnow(), "is_escalated": False},
    {"id": "C-1002", "title": "Clogged Drainage", "description": "Severe water logging near market", "category": "Civic", "department_id": 5, "lat": 28.6200, "lng": 77.2100, "address": "Market Area, Sector 7", "status": "Pending", "worker_id": None, "created_at": datetime.utcnow(), "updated_at": datetime.utcnow(), "is_escalated": True},
]

@router.get("/", response_model=List[Complaint])
async def get_complaints():
    return COMPLAINTS_DB

@router.post("/", response_model=Complaint)
async def create_complaint(complaint: ComplaintBase):
    new_complaint = {
        "id": f"C-{1000 + len(COMPLAINTS_DB) + 1}",
        **complaint.dict(),
        "status": "Pending",
        "worker_id": None,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow(),
        "is_escalated": False
    }
    COMPLAINTS_DB.append(new_complaint)
    return new_complaint

@router.patch("/{complaint_id}/escalate")
async def escalate_complaint(complaint_id: str):
    for complaint in COMPLAINTS_DB:
        if complaint["id"] == complaint_id:
            complaint["is_escalated"] = True
            complaint["status"] = "Escalated"
            return complaint
    raise HTTPException(status_code=404, detail="Complaint not found")
