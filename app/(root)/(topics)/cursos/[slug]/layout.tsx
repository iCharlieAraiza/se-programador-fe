import React from 'react'

export default function TopicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="my-6 p-4 mx-auto max-w-4xl article-layer">
      <article className='max-w-4xl mx-auto p-4'>
        {children}
      </article>
    </main>

  );
}
