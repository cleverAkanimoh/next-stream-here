import NavBar from '@/Components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'stream here',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
