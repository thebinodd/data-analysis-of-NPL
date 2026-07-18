import Link from 'next/link'
import React from 'react'

type Input = {
    title: string,
    url: string
}

const ListCard = ({ title, url }: Input) => {
    return (
        <div>
            <Link href={url} className="flex lg:max-w-[40vw] text-xs hover:scale-99 cursor-pointer w-[35vw] min-h-[5vh] lg:w-[15vw]  justify-between rounded-md border-2 border-neutral-950 bg-white px-4 py-2  sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="  w-full  flex flex-row justify-between ">
                        <p  className="text-xs  text-neutral-950">
                            {title}
                        </p>
                        
                    </div>
                </div>


            </Link>

        </div>
    )
}

export default ListCard
