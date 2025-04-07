'use client';

import { CircleX, Menu } from 'lucide-react'
import React, { useState } from 'react'

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
                    <h1>SéProgramador</h1>

                    <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <Menu />
                    </div>

                    <nav className='hidden md:flex'>
                        <ul className='flex space-x-4'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {isOpen && (
                <div className="md:hidden">
                    <nav className='bg-[#FFFCF5]'>
                        <ul className='flex flex-col space-y-4 p-4'>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            )}
        </>
    )
}

export default Header