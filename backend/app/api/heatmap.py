from fastapi import APIRouter
from typing import List
from pydantic import BaseModel

router = APIRouter(prefix="/heatmap", tags=["analytics"])

class HeatPoint(BaseModel):
    lat: float
    lng: float
    intensity: float  # Intensity based on complaint frequency
    category: str

@router.get("/data", response_model=List[HeatPoint])
async def get_heatmap_data():
    # In reality, this would aggregate data from MongoDB GeoJSON
    return [
        {"lat": 28.6139, "lng": 77.2090, "intensity": 0.8, "category": "Electricity"},
        {"lat": 28.6150, "lng": 77.2100, "intensity": 0.6, "category": "Water"},
        {"lat": 28.6200, "lng": 77.2150, "intensity": 0.9, "category": "Civic"},
        {"lat": 28.6250, "lng": 77.2200, "intensity": 0.4, "category": "Health"},
        {"lat": 28.6100, "lng": 77.2000, "intensity": 0.7, "category": "PWD"},
    ]
