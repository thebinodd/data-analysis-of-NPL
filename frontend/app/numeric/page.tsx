import React from 'react'
import Navbar from '../components/Navbar'
import ListCard from '../components/NameofStats'
import HeadingSmall from '../components/HeadingSmall'

const page = () => {
    return (
        <div className=' flex flex-col  justify-center items-center '>

            <Navbar heading='Numeric Stats of NPL' isHome={false} />

            <div className="mainStats  flex lg:flex-row flex-col justify-center lg:gap-5 pb-10   items-start  lg:w-[70vw] lg:mt-10">

                <div className="batting w-[20vw]  flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Batting" />

                    <div className="battingStats flex lg:flex-row flex-col gap-4">
                        <div className="lef flex flex-col justify-center gap-2  items-center">
                        <ListCard title="Most Runs" url="/numeric/most_runs" />
                        <ListCard title="Highest Scores" url="/numeric/highest_scores" />
                        <ListCard title="Best Batting Average" url="/numeric/best_batting_average" />
                        <ListCard title="Best Batting Strike Rate" url="/numeric/best_batting_strike_rate" />
                        <ListCard title="Most Hundreds" url="/numeric/most_hundreds" />
                        <ListCard title="Most Fifties" url="/numeric/most_fifties" />
                        <ListCard title="Most Fours" url="/numeric/most_fours" />
                        <ListCard title="Most Sixes" url="/numeric/most_sixes" />
                        <ListCard title="Most Nineties" url="/numeric/most_nineties" />
                    </div>
                    
                    </div>
                    

                </div>
                <div className="bowlings w-[20vw] flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Bowling" />

                    <div className="bowlingStats flex lg:flex-row flex-col gap-4">
                        <div className="lef flex flex-col justify-center gap-2  items-center">
                        <ListCard title="Most Wickets" url="/numeric/most_wickets" />
                        <ListCard title="Best Bowling Average" url="/numeric/best_bowling_average" />
                        <ListCard title="Best Bowling Strike Rate" url="/numeric/best_bowling_strike_rate" />
                        <ListCard title="Best Bowling" url="/numeric/best_bowling" />
                        <ListCard title="Most 5 Wickets Haul" url="/numeric/most_5_wickets_haul" />
                        <ListCard title="Best Economy Rate" url="/numeric/best_economy_rate" />
                        <ListCard title="Most Wide Balls" url="/numeric/most_wide_balls" />
                        <ListCard title="Most Noballs" url="/numeric/most_noballs" />
                        <ListCard title="Most Dot Balls" url="/numeric/most_dot_balls" />
                    </div>
                    
                    </div>
                    

                </div>
                <div className="fielding w-[20vw] flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Fielding" />

                    <div className="fieldingStats flex lg:flex-row flex-col gap-4">
                        <div className="lef flex flex-col justify-center gap-2  items-center">
                        <ListCard title="Most Catch Taken" url="/numeric/most_catch_taken" />
                    </div>
                    
                    </div>
                    

                </div>
                




            </div>

        </div>
    )
}

export default page