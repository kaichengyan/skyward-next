import './globals.css'
import './prism.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import NavBar from '@/components/NavBar'
import React from 'react'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: '%s | Skyward',
    default: 'Skyward',
  },
  description: '越而胜己',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          <main className='container mx-auto max-w-3xl px-6 my-2'>
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  )
}
