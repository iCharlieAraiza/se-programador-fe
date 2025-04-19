import React from 'react'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <article className='max-w-3xl mx-auto px-4 py-4 md:py-10'>
                {children}
            </article>
        </main>
    );
}
