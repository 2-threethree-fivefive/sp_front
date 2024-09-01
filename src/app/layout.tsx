import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BottomNavbar from '@/components/layouts/BottomNavbar'
import Footer from '@/components/layouts/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'STARBUCKS CLONE APP',
    template: '%s | STARBUCKS CLONE APP',
  },
  description: '스타벅스 클론코딩 프로젝트',
  icons: { icon: '/assets/images/icons/icon.png' },
  metadataBase: new URL('https://spharos5th.com'),
  openGraph: {
    url: 'https://spharos5th.com',
    title: 'STARBUCKS CLONE APP',
    description: '스타벅스 클론코딩 프로젝트',
    images: [{ url: '/assets/images/og/og_image.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
