import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MathNoMyth',
  description: 'A little assistant to help you with your mathematics studies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <footer className="p-4 text-center border-t-[1px] text-gray-400">©2023 IN2 Studio</footer>
    </html>
  )
}
