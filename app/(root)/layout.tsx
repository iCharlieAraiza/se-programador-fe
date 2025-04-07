import React from 'react'
import Header from '../../components/shared/header';
import Footer from '../../components/shared/footer';
import Hero from '../../components/shared/hero';

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div>
            <Header />
            <Hero />
            {children}
            <Footer />
        </div>

    );
  }
  