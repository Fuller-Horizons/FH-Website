import React from "react"
import type { Metadata } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans'
});

const playfairDisplay = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair-display'
});

export const metadata: Metadata = {
  title: 'Fuller Horizons | Clarity. Alignment. Measurable Progress.',
  description: 'I work with business owners to uncover what is really happening, clarify what matters most, and define outcomes that can be measured before major decisions are made.',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Fuller Horizons | Clarity. Alignment. Measurable Progress.',
    description: 'I work with business owners to uncover what is really happening, clarify what matters most, and define outcomes that can be measured before major decisions are made.',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 1024,
        alt: 'Fuller Horizons',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fuller Horizons | Clarity. Alignment. Measurable Progress.',
    description: 'I work with business owners to uncover what is really happening, clarify what matters most, and define outcomes that can be measured before major decisions are made.',
    images: ['/og-image.png'],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${playfairDisplay.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
