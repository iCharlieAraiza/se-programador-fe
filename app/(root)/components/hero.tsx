import React from 'react'
import Image from 'next/image'


const Hero = () => {
    return (
        <section className='bg-[#FFFCF5] min-h-[calc(100vh-180px)] flex flex-col justify-between'>
            <div className=""></div>
            <div className="flex items-center md:mt-[-1rem]">
                <div className='max-w-6xl w-full mx-auto p-4 md:flex items-center justify-between'>
                    <div className="content max-w-3xl text-center md:text-left">
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight'>
                            Desbloquea 🔓 tu futuro. Conviértete en el programador que el mundo necesita
                        </h2>
                        <p className='text-xl my-4'>
                            Aprende las habilidades más demandadas en el mercado laboral y da el salto a una carrera apasionante
                        </p>
                        <div className="flex gap-2 flex-wrap my-4 justify-center md:justify-start">
                            <div>
                                <a href='/temario' className='bg-[#FFB800] text-white px-8 py-3 rounded-full  hover:bg-[#FFA500] transition duration-300'>
                                    Ver el temario &#8594;
                                </a>
                            </div>
                            <div>
                                <a href='/contacto'>
                                    📄 Hoja de ruta
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Image
                            src="/img/hero-img.png"
                            alt="Hero Image"
                            width={200}
                            height={200}
                            className="w-[200px] md:w-[200px] lg:w-[300px] h-auto display-block mx-auto md:mx-0"
                        />
                    </div>
                </div>
            </div>
            <div className="border-t">
                <div className="max-w-6xl mx-auto p-4 flex items-center justify-between">
                    <p className='text-center text-sm'>
                        Proyecto de <a href='https://carlosaraiza.me' target="_blank" >Carlos Araiza</a> para Fundación Celis 
                    </p>
                    <p className='font-semibold'>
                        #YoSoyLiderComunitario
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Hero