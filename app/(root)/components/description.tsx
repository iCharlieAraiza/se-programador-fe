import Link from 'next/link'
import React from 'react'

type Props = {}

const Description = (props: Props) => {

    const courses = [
        { title: "Entender los procesos técnicos", slug: "tema" },
        { title: "Entender los procesos técnicos", slug: "tema" },
        { title: "Entender los procesos técnicos", slug: "tema" },
        { title: "Entender los procesos técnicos", slug: "tema" },
    ]

    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 py-12">
                <div className="font-semibold tracking-tight text-4xl text-center">
                    <h2 className='py-10'>
                        ¿En qué consiste la plataforma y bootcamp séprogramador?
                    </h2>
                </div>
                <div className="md:grid grid-cols-2">
                    <div className="">
                        <article>
                            <h2 className='text-xl font-semibold tracking-tight border-l-6 pl-2 mb-2'>
                                Todo lo que necesitas para conseguir  trabajo como programador
                            </h2>
                            <p>Todo el contenido es totalmente gratuito, incluida la plataforma. Si deseas colaborar, accede al repositorio de GitHub.</p>
                            <p>Si deseas colaborar, accede al repositorio de GitHub.</p>
                        </article>
                    </div>
                    <div className="">
                        <h2 className='text-xl font-semibold tracking-tight mb-2'>
                            Temario
                        </h2>
                        <div className="border-l-2 px-4 mb-4">
                            <ul className="bg-[#FFFCF5] rounded">
                                {
                                    courses.map((course, index) => (
                                        <CourseItem key={index} title={course.title} slug={course.slug} />
                                    ))
                                }
                            </ul>
                        </div>
                        <Link href="/" className='text-[#937723] font-semibold hover:text-amber-400 transition duration-300'>
                            Ver más del temario &#8594;
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

const CourseItem = ({ title, slug }: { title: string, slug: string }) => {
    return (
        <Link href={slug} className='p-4 flex items-center gap-2 hover:bg-slate-100/50 rounded cursor-pointer'>
            <div className="w-10 h-10 bg-[#FFB800] rounded-full border-2"></div>
            <div className="">
                <p className='font-semibold my-[0!important]'>{title}</p>
                <p className='my-[0!important]'>4 sesiones</p>
            </div>
        </Link>
    )
}

export default Description