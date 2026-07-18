import Link from 'next/link'
import React from 'react'

type Input = {
    title: string,
    url: string
}

const ListCard = ({ title, url }: Input) => {
    return (
        <div>
            <Link href={url} className="flex lg:max-w-[40vw] hover:scale-99 cursor-pointer w-[35vw] lg:w-[15vw]  justify-between rounded-xl border-4 border-neutral-950 bg-white px-4 py-2 shadow-[1px_3px_0_0_#111827] sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="  w-[20vw]  flex flex-row justify-between ">
                        <p  className="text-xs w-[30vw] font-semibold text-neutral-950">
                            {title}
                        </p>
                        
                    </div>
                </div>


            </Link>

        </div>
    )
}

export default ListCard
