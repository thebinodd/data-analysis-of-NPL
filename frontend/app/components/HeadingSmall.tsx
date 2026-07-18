import React from 'react'
type Input = {
    title: string
}

const HeadingSmall = ({title}:Input) => {
    return (
        <div>
            <span className="flex justify-center items-center w-[70vw] lg:mt-3 mt-2 lg:w-[20vw]">
                <span className="h-px  flex-1 bg-gray-900"></span>

                <span className="shrink-0 font-semibold text-lg px-4 text-gray-900">{title}</span>

                <span className="h-px flex-1 bg-gray-900"></span>
            </span>

        </div>
    )
}

export default HeadingSmall
