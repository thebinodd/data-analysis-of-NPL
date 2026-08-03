import os

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.battingRoute import router as batting_router
from routes.bowlingRoute import router as bowling_router
from routes.fieldingRoute import router as fielding_router

from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        os.getenv("FRONTEND_URI")
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(batting_router)
app.include_router(bowling_router)
app.include_router(fielding_router)


@app.get("/")
def home():
    return {
        "message": "Backend Running"
    }