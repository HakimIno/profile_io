
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '../../components/star-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Weerachit',
  description: 'My profile',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <StarsCanvas />
        {children}

      </body>

    </html>
  )
}
