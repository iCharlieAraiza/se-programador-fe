import Link from 'next/link'
import React from 'react'

const TemaPage = () => {

  const courses = [
    { title: 'Introducción a la programación', slug: 'introduccion-a-la-programacion', number: 1 },
    { title: 'HTML y CSS', slug: 'html-y-css', number: 2 },
    { title: 'JavaScript', slug: 'javascript', number: 3 },
    { title: 'React', slug: 'react', number: 4 },
  ]

  return (
    <main className='py-4'>
      <article className='max-w-4xl mx-auto p-4'>
        <header className='flex items-center justify-center gap-4'>
          <div className="">
            <div className="w-12 h-12 bg-[#F2E6C5] rounded-full border-4"></div>
          </div>
          <div className="">
            <h1 className='text-3xl font-semibold tracking-tight'>
              Entender procesos técnicos
            </h1>
            <p className='text-lg my-[0!important]'>4 cursos disponibles</p>
          </div>
        </header>
        <section>
          <p>This is where it all begins! A hands-on introduction to all of the essential tools you'll need to build real, working websites. You'll learn what web developers actually do – the foundations you'll need for later courses.</p>
        </section>
        <div className="">
          {
            courses.map((course, index) => (
              <CourseItem key={`${index}-course`} title={course.title} slug={course.slug} number={course.number} />
            ))
          }
        </div>
      </article>
    </main>
  )
}

const CourseItem = ({ title, slug, number }: { title: string, slug: string, number: number }) => {
  return (
    <Link href={`/p/${slug}`} className='p-4 flex items-center gap-4 hover:bg-slate-100/50 rounded-lg cursor-pointer'>
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


export default TemaPage