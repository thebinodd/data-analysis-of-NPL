import React from 'react'
import Navbar from '../components/Navbar'
import ListCard from '../components/NameofStats'
import HeadingSmall from '../components/HeadingSmall'

const page = () => {
    return (
        <div className=' flex flex-col  justify-center items-center '>

            <Navbar heading='Numeric Stats of NPL' isHome={false} />

            <div className="mainStats  flex flex-row justify-center gap-4   items-start  lg:w-[60vw] mt-10">

                <div className="batting w-[40vw] flex flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Batting" />


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
                <div className="bowling flex w-[40vw] flex-col justify-center gap-4  items-center">
                    <HeadingSmall title="Bowling" />
                    <ListCard title="Most Wickets" url="/numeric/most_wickets" />
                    <ListCard title="Best Bowling Average" url="/numeric/best_bowling_average" />
                    <ListCard title="Best Bowling" url="/numeric/best_bowling" />
                    <ListCard title="Most 5 Wickets Haul" url="/numeric/most_5_wickets_haul" />
                    <ListCard title="Best Economy" url="/numeric/best_economy" />
                    <ListCard title="Best Bowling Strike Rates" url="/numeric/best_bowling_strike_rates" />
                </div>




            </div>

        </div>
    )
}

export default page