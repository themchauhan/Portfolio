import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Manish Chauhan | Portfolio',
  description: 'Manish Chauhan | Web Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body >{children}</body>
    </html>
  )
}
