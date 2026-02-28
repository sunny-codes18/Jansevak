from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import auth, departments, complaints, heatmap

app = FastAPI(title="JanSevak API", description="Digital Governance Command Center API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router, prefix="/api/v1")
app.include_router(departments.router, prefix="/api/v1")
app.include_router(complaints.router, prefix="/api/v1")
app.include_router(heatmap.router, prefix="/api/v1")

@app.get("/")
async def root():
    return {"message": "Welcome to JanSevak API - Digital Governance Intelligence Platform"}

@app.get("/health")
async def health_check():
    return {"status": "healthy"}
