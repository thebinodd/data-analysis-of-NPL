import React from 'react'
type Input = {
    title: string
}

const Heading = ({title}:Input) => {
    return (
        <div>
            <span className="flex justify-center items-center w-[90vw] mt-3 lg:w-[30vw]">
                <span className="h-px  flex-1 bg-gray-900"></span>

                <span className="shrink-0 lg:font-semibold lg:text-lg text-sm px-4 py-2 text-gray-900">{title}</span>

                <span className="h-px flex-1 bg-gray-900"></span>
            </span>

        </div>
    )
}

export default Heading
