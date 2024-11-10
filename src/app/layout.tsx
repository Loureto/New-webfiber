import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { NextThemeProvider, ReactQueryProvider, ScreenWidth } from '@/core'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: {
    template: 'Ninja Fiber | %s',
    default: 'Ninja Fiber'
  },
  description: 'Management system for fiber optic companies.',
  authors: [{ name: 'João Victor Oliveira' }, { name: 'Wilgner Schuertz' }]
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextThemeProvider>
          <ReactQueryProvider>
            {children}
            <ScreenWidth />
            <ToastContainer />
          </ReactQueryProvider>
        </NextThemeProvider>
      </body>
    </html>
  )
}
