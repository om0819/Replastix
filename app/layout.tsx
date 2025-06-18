import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RePLASTIX - Transforming Plastic Waste into Sustainable Bricks',
  description: 'Join the RePLASTIX initiative to recycle plastic waste into durable, sustainable building materials. Creating a cleaner future, one brick at a time.',
  keywords: 'plastic recycling, sustainable bricks, eco-friendly construction, plastic waste management, green building materials',
  authors: [{ name: 'RePLASTIX Team' }],
  openGraph: {
    title: 'RePLASTIX - Sustainable Plastic Recycling',
    description: 'Transforming plastic waste into sustainable building materials',
    type: 'website',
    url: process.env.NEXT_PUBLIC_BASE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RePLASTIX - Sustainable Plastic Recycling',
    description: 'Transforming plastic waste into sustainable building materials',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}