import type { Metadata } from 'next'
import './globals.css'
import SmoothScrollProvider from '@/components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Fantom Systems | AI Automation Agency',
  description: 'Architecting Intelligence. We build premium AI automation solutions that transform businesses. The future is autonomous.',
  keywords: ['AI automation', 'artificial intelligence', 'machine learning', 'business automation', 'AI agency'],
  authors: [{ name: 'Fantom Systems' }],
  openGraph: {
    title: 'Fantom Systems | AI Automation Agency',
    description: 'Architecting Intelligence. Premium AI automation solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <SmoothScrollProvider>
          {/* Noise overlay for texture */}
          <div className="noise-overlay" aria-hidden="true" />
          
          {/* Main content */}
          <main className="relative">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
