from data.dataset import data
from cache.statsCache import cache


def mostRuns(head):
    result = (
    data.groupby("batsman")["batsman_runs"]
    .sum()
    .sort_values(ascending=False)
    .head(head)
    .reset_index()
    .rename(columns={
        "batsman": "name",
        "batsman_runs": "value"
    })
    .to_dict(orient="records")
)
    return {
        "heading":"Most Runs By Batsman",
        "data" : result,
        "unit":"Runs"
    }

def mostFifties(head):
    
    total_runs = data.groupby(["match_id" , "batsman"])["batsman_runs"].sum().reset_index(name="runs")
    fifties = total_runs[(total_runs["runs"]>50) & (total_runs["runs"]<100)]
    result = fifties["batsman"].value_counts().reset_index().rename(columns={
            "batsman": "name",
            "count": "value"
        }).to_dict(orient="records")

    
    return {
        "heading":"Most Fifties By Batsman",
        "data" : result,
        "unit":"Fifty(s)"
    }

def mostHundreds(head):
    
    total_runs = data.groupby(["match_id" , "batsman"])["batsman_runs"].sum().reset_index(name="runs")
    hundreds = total_runs[total_runs["runs"]>=100]
    result = hundreds["batsman"].value_counts().reset_index().rename(columns={
            "batsman": "name",
            "count": "value"
        }).to_dict(orient="records")

    
    return {
        "heading":"Most Hundreds By Batsman",
        "data" : result,
        "unit":"Hundred(s)"
    }

def mostNineties(head):
    
    total_runs = data.groupby(["match_id" , "batsman"])["batsman_runs"].sum().reset_index(name="runs")
    fifties = total_runs[(total_runs["runs"]>=90) & (total_runs["runs"]<100)]
    result = fifties["batsman"].value_counts().reset_index().rename(columns={
            "batsman": "name",
            "count": "value"
        }).to_dict(orient="records")

    
    return {
        "heading":"Most Nineties By Batsman",
        "data" : result,
        "unit":"Ninety(s)"
    }


def highestScores(head):
    result = (
        data.groupby(["match_id", "batsman"])["batsman_runs"]
        .sum()
        .sort_values(ascending=False)
        .reset_index()
        .drop_duplicates(subset="match_id", keep="first")
        [["batsman", "batsman_runs"]]
        .head(100).rename(columns={
        "batsman": "name",
        "batsman_runs": "value"
    })
        .to_dict(orient="records")
    )

    return {
        "heading": "Most Score By Individual Batsman",
        "data": result,
        "unit": "Runs"
    }

def mostSixes(head):
    mask = data["batsman_runs"] == 6
    result = (data[mask]["batsman"]
              .value_counts()
              .sort_values(ascending=False)
              .head(head)
              .reset_index()
              .rename(columns={"batsman": "name","count": "value"})
              .to_dict(orient="records"))
    return {
        "heading":"Most Sixes By Batsman",
        "data":result,
        "unit":"Sixes"
    }

def mostFours(head):

    mask = data["batsman_runs"] == 4
    result = (data[mask]["batsman"]
              .value_counts()
              .sort_values(ascending=False)
              .head(head)
              .reset_index()
              .rename(columns={"batsman": "name","count": "value"})
              .to_dict(orient="records"))    
    return {
        "heading":"Most Fours By Batsman",
        "data":result,
        "unit":"Fours"
    }

def bestAverage(head):

    #Best Batting Average

    #Calculating Total Batsman
    total_runs = data.groupby(["batsman"])["batsman_runs"].sum().reset_index(name="runs")

#Calculating Total Innings Played
    innings_played = (
        data[["match_id", "inning", "batsman"]]
        .drop_duplicates()
        .groupby("batsman")
        .size()
        .reset_index(name="innings")
    )

#Calculating Total dismissed innings
    innings_out_data = data[(data["player_dismissed"].notna()) & (data["player_dismissed"] == data["batsman"])]
    innings_outs = innings_out_data[["match_id" , "batsman" , "player_dismissed"]].groupby("batsman").size().reset_index(name="outs")

#Merging InningPlayed and InningDismissed
    innings_data = innings_outs.merge(innings_played ,   on="batsman")

#Combined all 3 dataframes
    combined_data = innings_data.merge(total_runs ,   on="batsman")
#Calculating Not Outs
    combined_data["not_outs"] = combined_data["innings"] - combined_data["outs"]
#Calculating Average
    combined_data["average"] = round(combined_data["runs"]/(combined_data["innings"] - combined_data["not_outs"]) , 1)

#Making Final Results
    result = combined_data[["batsman" , "average"]].reset_index().sort_values(by="average" , ascending=False).rename(columns={"batsman":"name" , "average":"value"}).to_dict(orient="records")

    return {
        "heading":"Best Average of Batsman",
        "unit":"runs/innings",
        "data":result
    }

def bestStrikeRate(head):
    #Best Batting Strike Rate

#Calculate Total Runs
    total_runs = data.groupby(["batsman"])["batsman_runs"].sum().reset_index(name = "runs")

#Calculate Total Balls
    legal_balls = data[data["wide_runs"]==0] #exclude wide
    total_balls = legal_balls.groupby("batsman").size().reset_index(name="balls")
    eligible_batsman = total_balls[total_balls["balls"] > 10] #mimium 10 balls played

#Calculate StrikeRate
    combined = total_runs.merge(eligible_batsman , on="batsman")
    combined["strike_rate"] = round((combined["runs"] / combined["balls"])*100  , 1)
    result = combined[["batsman" , "strike_rate"]].reset_index().sort_values(by="strike_rate" , ascending=False).rename(columns={"batsman":"name" , "strike_rate":"value"}).to_dict(orient="records")
    result
    return {
        "heading":"Best Strike Rate of Batsman",
        "unit":"",
        "data":result
    }


def mostDucks(head):
    new_data = data.groupby(["match_id" , "batsman"])["batsman_runs"].sum().reset_index(name="runs")
    ducks = new_data[new_data["runs"] == 0]
    result = (ducks.groupby("batsman")
              .size()
              .reset_index(name="ducks")
              .sort_values(by="ducks" , ascending=False)
              .rename(columns={"batsman":"name" , "ducks":"value"})
              .to_dict(orient="records")

              )
    return {
            "heading":"Most Ducks (0 run) by batsman",
            "unit":"ducks",
            "data":result
        }

def mostGoldenDucks(head):
    #Most Golden Ducks

#Calculate total runs in each match
    total_runs = data.groupby(["match_id" , "batsman"])["batsman_runs"].sum().reset_index(name="runs")

#Calculate Total Balls in each match
    legal_balls = data[data["wide_runs"]==0] #exclude wide
    total_balls = legal_balls.groupby(["match_id" , "batsman"])["batsman_runs"].size().reset_index(name="balls")


# combined_data
    combined_data = total_balls.merge(total_runs , on=["match_id", "batsman"])

#Total Golden Ducks
    total_golden_ducks = combined_data[(combined_data["runs"]==0) & (combined_data["balls"] == 1)]
    result = (total_golden_ducks
              .groupby("batsman")
              .size()
              .reset_index(name="golden_ducks")
              .sort_values(ascending=False , by="golden_ducks")
              .rename(columns={"batsman":"name" , "golden_ducks":"value"})
              .to_dict(orient="records")


              )
    return {
                "heading":"Most Golden Ducks (0 run & 1 ball) by batsman",
                "unit":"golden ducks",
                "data":result
            }