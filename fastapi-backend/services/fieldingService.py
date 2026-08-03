import pandas as pd
from data.dataset import data

def most_catches(head):
    #Most Catches Taken

    catch_data = data[data["dismissal_kind"] == "caught"]
    result = (catch_data.groupby("fielder")
                   .size()
                   .reset_index(name="Catches")
                   .sort_values(by="Catches" , ascending=False)
                   .rename(columns={"fielder":"name" , "Catches":"value"})
                   .to_dict(orient="records")
                   )

    return {
            "heading":"Most Catches By Fielder",
            "data":result,
            "unit":"catches",
            "detail":"Fine"
        }

def most_run_outs(head):
    runout_data = data[data["dismissal_kind"] == "run out"]
    result = (runout_data.groupby("fielder")
                     .size().reset_index(name="Runouts")
                     .sort_values(by="Runouts" , ascending=False)
                     .rename(columns={"fielder":"name" , "Runouts":"value"})
                    .to_dict(orient="records")


                     )
    return {
                "heading":"Most Runouts Individual/Team",
                "data":result,
                "unit":"runout(s)",
                "detail":"Fine"
            }


def most_stumping(head):
    stumpped_data = data[data["dismissal_kind"] == "stumped"]
    result = (stumpped_data.groupby("fielder")
              .size()
              .reset_index(name="Stumpped")
              .sort_values(by="Stumpped" , ascending=False)
              .rename(columns={"fielder":"name" , "Stumpped":"value"})
            .to_dict(orient="records")

              )

    return {
                    "heading":"Most Stumping Wicket Keepers",
                    "data":result,
                    "unit":"stumping(s)",
                    "detail":"Fine"
                }
