import Link from 'next/link'
import React from 'react'

type Props = {
  title: string, 
  slug: string, 
  number: number
}

export const CourseItem = ({ title, slug, number }: Props) => {
  return (
    <Link href={`/tema/${slug}`} className='p-4 flex items-center gap-4 hover:bg-slate-100/50 rounded-lg cursor-pointer'>
      <div className="">
        <div className="w-10 h-10 border-2 border-slate-900 rounded-full flex items-center justify-center">
          <span className='font-semibold'>
            {number}
          </span>
        </div>
      </div>
      <div className="">
        <p className='font-semibold my-[0!important] tracking-tight'>{title}</p>
      </div>
    </Link>
  )
}