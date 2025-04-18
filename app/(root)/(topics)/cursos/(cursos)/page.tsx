import Link from 'next/link';
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

type Props = {}

interface Topic {
  id: string;
  title: string;
  numberModules: number,
  uri: string;
}

const TemasPage = (props: Props) => {




  const topics : Topic[] = [
    {
      id: uuidv4(),
      title: 'Proceso de contratación: entrevista y primer contacto',
      numberModules: 4,
      uri: 'proceso-contratacion-entrevista-primer-contacto'
    },
    {
      id: uuidv4(),
      title: 'Pruebas técnicas: live coding',
      numberModules: 4,
      uri: 'pruebas-tecnicas-live-coding'
    },
    {
      id: uuidv4(),
      title: 'Pruebas técnicas: proyectos y actividades',
      numberModules: 4,
      uri: 'pruebas-tecnicas-take-home'
    },
    {
      id: uuidv4(),
      title: 'Preparar búsqueda de empleo',
      numberModules: 4,
      uri: 'preparar-busqueda-empleo'
    }
  ]

  return (
    <main className='max-w-5xl mx-auto px-4 py-10 min-h-[calc(100vh-220px)]'>
        <h1 className='text-4xl lg:text-5xl font-semibold tracking-tight text-center'>
            Cursos y temas
        </h1>
        <p className='text-xl my-4 text-center'>
            Cursos y series (articulos, videos y ejercicios)
        </p>
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
            {
              topics.map((topic, index) => (
                <Link key={`${index}-topic`} href={`/cursos/${topic.uri}`} className='p-4 flex items-center gap-4 bg-slate-100/30 hover:bg-slate-100/80 rounded-lg cursor-pointer'>
                  <div className="">
                    <div className="w-10 h-10 border-2 border-slate-900 rounded-full flex items-center justify-center">
                      <span className='font-semibold text-lg'>
                        &rarr;
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <p className='font-semibold my-[0!important] tracking-tight text-lg leading-none'>{topic.title}</p>
                    <p>{topic.numberModules} modulos disponibles</p>
                  </div>
                </Link>
              ))
            }
        </section>
    </main>
  )
}

export default TemasPage
// import React from 'react'