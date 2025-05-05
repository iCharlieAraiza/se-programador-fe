import React from 'react'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <div className='max-w-3xl mx-auto px-4 py-4 md:py-10 h-[60vh!important]'>
                {children}
            </div>
        </main>
    );
}
