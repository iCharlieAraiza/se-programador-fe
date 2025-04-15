import Link from 'next/link'
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
                        Proyecto de responsabilidad social para el apoyo de la comunidad
                    </h2>
                </div>
                <div className="flex items-center justify-between">
                    <nav className='mx-auto'>
                        <ul className='flex space-x-4'>
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/acerca">Acerca de</Link></li>
                            <li><Link href="/contact">Contacto</Link></li>
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