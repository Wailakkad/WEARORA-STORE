import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import BigFooterMark from '@/components/BigFooterMark'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'WEARORA - Performance. Redefined.',
  description: 'Minimalist fashion storefront featuring fresh drops made for modern living.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <BigFooterMark />
      </body>
    </html>
  )
}