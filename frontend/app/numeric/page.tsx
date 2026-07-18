import React from 'react'
import Navbar from '../components/Navbar'
import ListCard from '../components/NameofStats'
import HeadingSmall from '../components/HeadingSmall'

const page = () => {
    return (
        <div className=' flex flex-col  justify-center items-center '>

            <Navbar heading='Numeric Stats of NPL' isHome={false} />

            <div className="mainStats  flex flex-row justify-center gap-4   items-start  lg:w-[70vw] mt-10">

                <div className="batting w-[40vw] flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Batting" />

                    <div className="battingStats flex flex-row gap-5">
                        <div className="lef flex flex-col justify-center gap-4  items-center">
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
                    <div className="rig flex flex-col justify-center gap-4  items-center">
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
                <div className="bowlings w-[40vw] flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Bowling" />

                    <div className="bowlingStats flex flex-row gap-5">
                        <div className="lef flex flex-col justify-center gap-4  items-center">
                        <ListCard title="Most Wickets" url="/numeric/most_wickets" />
                        <ListCard title="Highest Scores" url="/numeric/highest_scores" />
                        <ListCard title="Best Batting Average" url="/numeric/best_batting_average" />
                        <ListCard title="Best Batting Strike Rate" url="/numeric/best_batting_strike_rate" />
                        <ListCard title="Most Hundreds" url="/numeric/most_hundreds" />
                        <ListCard title="Most Fifties" url="/numeric/most_fifties" />
                        <ListCard title="Most Fours" url="/numeric/most_fours" />
                        <ListCard title="Most Sixes" url="/numeric/most_sixes" />
                        <ListCard title="Most Nineties" url="/numeric/most_nineties" />
                    </div>
                    <div className="rig flex flex-col justify-center gap-4  items-center">
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




            </div>

        </div>
    )
}

export default page