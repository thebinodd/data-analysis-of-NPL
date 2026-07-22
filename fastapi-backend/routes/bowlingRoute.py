from services.bowlingService import (
   mostWickets 
   , mostRunsConceded 
   , bestBowlingAverage 
   , bestBowlingStRate 
   , bestBowling
   , bestEconomy
   , most5WicketsHaul
   , mostDotBalls
   , mostNoBalls
   , mostWideBalls

   )
from fastapi import APIRouter

router = APIRouter(
    prefix="",
    tags=["Bowling"]
)


@router.get("/most_wickets")
def most_wickets(head:int):
   return mostWickets(head)

@router.get("/most_runs_conceded")
def most_runs_conceded(head:int):
   return mostRunsConceded(head)

@router.get("/best_bowling_average")
def best_bowling_average(head:int):
   return bestBowlingAverage(head)

@router.get("/best_bowling_strike_rate")
def best_bowling_strike_rate(head:int):
   return bestBowlingStRate(head)

@router.get("/best_bowling")
def best_bowling(head:int):
   return bestBowling(head)

@router.get("/most_5_wickets_haul")
def most_5_wickets_haul(head:int):
   return most5WicketsHaul(head)

@router.get("/best_economy_rate")
def best_economy(head:int):
   return bestEconomy(head)

@router.get("/most_wide_balls")
def most_wideballs(head:int):
   return mostWideBalls(head)

@router.get("/most_dot_balls")
def most_dotballs(head:int):
   return mostDotBalls(head)

@router.get("/most_noballs")
def most_noballs(head:int):
   return mostNoBalls(head)