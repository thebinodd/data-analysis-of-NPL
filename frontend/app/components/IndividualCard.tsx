import Link from 'next/link'
import React from 'react'

type Input = {
    name: string,
    index: number,
    stat: number[],
    unit:string
}

const IndividualCard = ({ name, index, stat , unit }: Input) => {
    const cardClasses =
        'flex lg:max-w-[40vw]  cursor-pointer w-[90vw] lg:w-[60vw] justify-between rounded-md border-2 border-neutral-950  px-4 py-2  sm:px-6'

    return (
        <div>
            <div className={cardClasses}>
                <div className="flex items-center gap-3">
                    <div className="lg:w-[30vw] flex flex-row justify-between">
                        <div className="text-md w-[75vw] flex flex-row justify-between lg:font-semibold text-sm text-neutral-950">
                            <div className="left flex flex-row gap-5">
                                <span>{index + 1}</span>
                                <span>{name}</span>
                                
                            </div>
                            <span className="text-neutral-950">{stat} {unit}</span>


                            
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualCard
