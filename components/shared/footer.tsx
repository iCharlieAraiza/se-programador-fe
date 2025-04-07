import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#FFFCF5]'>
            <footer className='max-w-7xl mx-auto p-4 '>
                <div className="">
                    <h1 className='text-center font-bold'>
                        SéProgramador
                    </h1>
                    <h2 className='text-center text-sm'>
                        Proyecto de responsabilidad soxial para la comunidad
                    </h2>
                </div>
                <div className="flex items-center justify-between">
                    <nav className='mx-auto'>
                        <ul className='flex space-x-4'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="">
                    <p className='text-center text-sm'>
                        © 2025 SéProgramador. Derechos reservados.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer