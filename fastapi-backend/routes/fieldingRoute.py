from fastapi import APIRouter
from services.fieldingService import (
    most_catches ,
      most_run_outs,
      most_stumping
      )

router = APIRouter()

@router.get("/most_catches_taken")
def mostCatches(head):
    return most_catches(head)

@router.get("/most_run_outs")
def mostRunOuts(head):
    return most_run_outs(head)

@router.get("/most_stumping")
def mostStumping(head):
    return most_stumping(head)

