from fastapi import FastAPI
from data.dataset import data

def mostWickets(head):

    result = (data[data["dismissal_kind"]
                   .notna()]
                   .groupby("bowler")["bowler"]
                   .value_counts()
                   .sort_values(ascending=False)
                   .reset_index()
                   .head(head)
                   .rename(columns={"bowler":"name" , "count":"value"})
                   .to_dict(orient="records"))
    return {
        "heading":"Most Wickets By Bowler",
        "data":result,
        "unit":"Wickets",
        "detail":"Fine"
    }

def mostRunsConceded(head):
    eligible_data = data[(data["legbye_runs"]==0) & (data["bye_runs"]==0) ]
    result = (eligible_data.groupby("bowler")["total_runs"]
                  .sum()
                  .reset_index(name="runs_conceded")
                  .sort_values(by="runs_conceded" , ascending=False)
                  .rename(columns={"bowler":"name" , "runs_conceded":"value"})
                  .to_dict(orient="records")
    )
    return {
            "heading":"Most Runs Conceded By Bowler",
            "data":result,
            "unit":"Runs",
            "detail":"Fine"
        }

def bestBowlingAverage(head):
#Total Runs Conceded
    eligible_data = data[(data["legbye_runs"]==0) & (data["bye_runs"]==0) ]
    total_runs = eligible_data.groupby("bowler")["total_runs"].sum().reset_index(name="runs_conceded")

#Total Wickets by bowlers
    dismissal_data = data[ (data["dismissal_kind"].notna()) & ( data["dismissal_kind"]
    .isin(["Bowled" , "bowled" ,
        "Stumped" , "stumped" ,
        "Caught" , "caught" ,
        "LBW" , "lbw" , 
        "Caught & Bowled" , "caught & bowled",
        "hit wicket"
       ]) ) ]
    total_wickets = dismissal_data.groupby("bowler").size().reset_index(name="wickets")

#Combined data for total runs and total wickets
    new_data = total_runs.merge(total_wickets , on="bowler")

#Calculating Average
    new_data["average"] = round((new_data["runs_conceded"] / new_data["wickets"]) , 1)
    result = (new_data
              .sort_values(by="average" , ascending=True)
              .rename(columns={"bowler":"name" , "average":"value"})
              .to_dict(orient="records")
    )
    return {
                "heading":"Best Average By Bowler",
                "data":result,
                "unit":"runs / wickets",
                "detail":"Fine"
            }

def bestBowlingStRate(head):
    #Total Strike Rate

    #Total Ball Thrown
    eligible_data = data[(data["wide_runs"]==0) & (data["noball_runs"]==0) ]
    total_balls = eligible_data.groupby("bowler").size().reset_index(name="balls")

    #Total Wickets Taken
    dismissal_data = data[ (data["dismissal_kind"].notna()) & ( data["dismissal_kind"]
    .isin(["Bowled" , "bowled" ,
        "Stumped" , "stumped" ,
        "Caught" , "caught" ,
        "LBW" , "lbw" , 
        "Caught & Bowled" , "caught & bowled",
        "hit wicket"
       ]) ) ]
    total_wickets = dismissal_data.groupby("bowler").size().reset_index(name="wickets")

    #Combined data

    combined_data = total_balls.merge(total_wickets , on="bowler")

    #Calculating Strike Rate
    combined_data["st_rate"] = round((combined_data["balls"] / combined_data["wickets"] ) , 1)
    result = (combined_data
              .sort_values(by="st_rate" , ascending = True)
              .rename(columns={"bowler":"name" , "st_rate":"value"})
               .to_dict(orient="records")

              )

    return {
                    "heading":"Best Strike Rate By Bowler",
                    "data":result,
                    "unit":"balls / wickets",
                    "detail":"Fine"
                }

def bestBowling(head):
    #Best Bowling
    #most wickets in inning
    dismissal_data = data[ (data["dismissal_kind"].notna()) & ( data["dismissal_kind"]
    .isin(["Bowled" , "bowled" ,
        "Stumped" , "stumped" ,
        "Caught" , "caught" ,
        "LBW" , "lbw" , 
        "Caught & Bowled" , "caught & bowled",
        "hit wicket"
       ]) ) ]
    most_wickets = dismissal_data.groupby(["match_id" , "bowler" , "batting_team"]).size().reset_index(name="wickets").sort_values(ascending=False , by="wickets").drop_duplicates(subset="match_id" , keep="first")

    #total runs conceded by bowler having highest wicket in that match
    eligible_data = data[(data["legbye_runs"]==0) & (data["bye_runs"]==0) ]
    total_runs = eligible_data.groupby(["match_id" , "bowler"])["total_runs"].sum().reset_index(name="runs_conceded")

    result = (most_wickets.merge(total_runs , on=["match_id" , "bowler"])
              .rename(columns={"bowler":"name" , "wickets":"value"})
               .to_dict(orient="records")
              

              )

    return {
                    "heading":"Best Bowling By Bowler",
                    "data":result,
                    "unit":"wicket",
                    "detail":"Fine"
                }



def most5WicketsHaul(head):
    #Most 5 wicket Haul

#Most 5 Wickets in inning
    dismissal_data = data[ (data["dismissal_kind"].notna()) & ( data["dismissal_kind"]
    .isin(["Bowled" , "bowled" ,
        "Stumped" , "stumped" ,
        "Caught" , "caught" ,
        "LBW" , "lbw" , 
        "Caught & Bowled" , "caught & bowled",
        "hit wicket"
       ]) ) ]
    most_wickets = dismissal_data.groupby(["match_id" , "bowler" , "batting_team"]).size().reset_index(name="wickets").sort_values(ascending=False , by="wickets").drop_duplicates(subset="match_id" , keep="first")
    most_wickets = most_wickets[most_wickets["wickets"]>=5]

    result = (most_wickets.groupby("bowler")
              .size()
              .reset_index(name="count")
              .rename(columns={"bowler":"name" , "count":"value"})
                .to_dict(orient="records")

              )
    return {
                        "heading":"Most 5 Wicket Haul By Bowler",
                        "data":result,
                        "unit":"times",
                        "detail":"Fine"
                    }
    
def bestEconomy(head):
    #Best Economy

    #Total Runs Conceded
    eligible_data = data[(data["legbye_runs"]==0) & (data["bye_runs"]==0) ]
    total_runs = eligible_data.groupby("bowler")["total_runs"].sum().reset_index(name="runs_conceded")

    #Total Overs used by bowlers
    eligible_data = data[(data["wide_runs"]==0) & (data["noball_runs"]==0) ]
    total_balls = eligible_data.groupby("bowler").size().reset_index(name="balls")
    total_balls["overs"] = round((total_balls["balls"]/6) , 2)

    #Calculting Economy
    economy_data = total_runs.merge(total_balls , on="bowler")
    economy_data["economy"] = round((economy_data["runs_conceded"] / economy_data["overs"]) , 2)
    result = (economy_data
              .sort_values(ascending=True , by="economy")
              .rename(columns={"bowler":"name" , "economy":"value"})
               .to_dict(orient="records")

              )
    return {
                        "heading":"Best Economy By Bowler",
                        "data":result,
                        "unit":"runs / over",
                        "detail":"Fine"
                    }
    

def mostWideBalls(head):
    #Most wide Balls

    eligible_balls = data[data["wide_runs"]!=0]
    result = (eligible_balls
              .groupby("bowler")
              .size()
              .sort_values(ascending=False)
              .reset_index(name="wides")
              .rename(columns={"bowler":"name" , "wides":"value"})
               .to_dict(orient="records")

              )
    return {
                    "heading":"Most Wides By Bowler",
                    "data":result,
                    "unit":"wides",
                    "detail":"Fine"
                }

def mostDotBalls(head):
    eligible_balls = data[data["total_runs"]==0]
    result = (eligible_balls.groupby("bowler")
              .size()
              .sort_values(ascending=False)
              .reset_index(name="Dot Balls")
              .rename(columns={"bowler":"name" , "Dot Balls":"value"})
              .to_dict(orient="records")
              )

    return {
                        "heading":"Most Dot Balls By Bowler",
                        "data":result,
                        "unit":"dot balls",
                        "detail":"Fine"
                    }

def mostNoBalls(head):
    #Most Noballs
    eligible_balls = data[data["noball_runs"]!=0]
    result = (eligible_balls
              .groupby("bowler")
              .size()
              .sort_values(ascending=False)
              .reset_index(name="No Balls")
              .rename(columns={"bowler":"name" , "No Balls":"value"})
               .to_dict(orient="records"))
    return {
                            "heading":"Most No Balls By Bowler",
                            "data":result,
                            "unit":"no balls",
                            "detail":"Fine"
                        }
    


