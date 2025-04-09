import React from 'react'

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <main className="my-6 p-4 mx-auto max-w-4xl article-layer">
            {children}
        </main>

    );
  }
  