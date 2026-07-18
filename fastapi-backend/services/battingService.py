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
        "unit":"Fiftie(s)"
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