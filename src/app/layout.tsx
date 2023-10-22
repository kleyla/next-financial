import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from './components'
import { AppProvider } from './redux/'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web',
  description: 'Track Finance WEB'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="es">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
