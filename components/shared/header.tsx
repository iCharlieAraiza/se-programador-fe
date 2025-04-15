'use client';

import { CircleX, Menu } from 'lucide-react'
import React, { useState } from 'react'
import LogoSVG from './logo';
import Link from 'next/link';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisibleBanner, setIsVisibleBanner] = useState(true);

    return (
        <>
            {
                isVisibleBanner && (
                    <div className="bg-blue-500 text-white font-semibold flex items-center justify-between px-4">
                        <div className=""></div>
                        <div className="p-2 text-center">
                            <p className='p-0'>La versión alfa 0.4 está en línea 🎉</p>
                        </div>
                        <div className="cursor-pointer" onClick={() => setIsVisibleBanner(!isVisibleBanner)}>
                            <CircleX />
                        </div>
                    </div>
                )
            }
            <header className='bg-[#FFFCF5]'>
                <div className='max-w-7xl mx-auto flex items-center justify-between p-4'>
                    <Link href="/" className='flex items-center'>
                        <LogoSVG />
                    </Link>

                    <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Menu />
                    </div>

                    <nav className='hidden md:flex items-center font-medium'>
                        <ul className='flex space-x-4'>
                            <li className='flex items-center gap-4'>
                                <span className='text-amber-600 font-bold'>/</span>
                                <Link href="/acerca">Acerca de</Link></li>
                            <li className='flex items-center gap-4'>
                                <span className='text-amber-600 font-bold'>/</span>
                                <Link href="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <div className="flex items-center space-x-4 ml-4">
                            <Link href="/signin">
                                Iniciar sesión
                            </Link>
                            <Link href={"/signup"} className='bg-[#937723] text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#937723] border hover:border-[#937723] transition duration-300 font-medium'>
                                Regístrate
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>

            {isOpen && (
                <div className="md:hidden">
                    <nav className='bg-[#FFFCF5]'>
                        <ul className='flex flex-col space-y-4 p-4'>
                            <li><Link href="/">Inicio</Link></li>
                            <li><Link href="/Acerca de">Acerca de</Link></li>
                            <li><Link href="/contacto">Contacto</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header