from fastapi import APIRouter
from services.battingService import mostRuns , highestScores, mostSixes , mostFours, mostFifties , mostHundreds

router = APIRouter(
    prefix="",
    tags=["Batting"]
)


@router.get("/most_runs")
def most_runs(head:int):
    return mostRuns(head)

@router.get("/highest_scores")
def highest_scores(head:int):
    return highestScores(head)

@router.get("/most_sixes")
def most_runs(head:int):
    return mostSixes(head)

@router.get("/most_fours")
def most_fours(head:int):
    return mostFours(head)

@router.get("/most_fifties")
def most_fifties(head:int):
    return mostFifties(head)

@router.get("/most_hundreds")
def most_hundreds(head:int):
    return mostHundreds(head)
