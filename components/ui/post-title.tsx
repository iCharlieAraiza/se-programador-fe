
import React from 'react'

type Props = {
    title: string,
    number: number
}

export const PostTitle = (props: Props) => {
    return (
        <header className="flex items-center justify-center gap-4 mb-6">
            <div className="">
                <div className="w-10 h-10 rounded-full border-4 border-slate-900 flex items-center justify-center text-lg font-semibold">
                    <span>
                        {props.number}
                    </span>
                </div>
            </div>
            <h1 className='text-3xl font-semibold tracking-tight'>
                {props.title}
            </h1>
        </header>
    )
}