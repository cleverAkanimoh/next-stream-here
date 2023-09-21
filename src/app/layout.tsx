import { Footer, NavBar } from '@/Components'

import { GlobalContextProvider } from '../context/store'
import { Providers } from '../lib';

import './globals.css';

export const metadata = {
  title: 'Welcome | Live Stream Here',
  description: 'sport streaming site in Nigeria',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full`}>
        <Providers>
          <GlobalContextProvider>
            <NavBar />
            {children}
            <Footer />
          </GlobalContextProvider>
        </Providers>
      </body>
    </html>
  )
}
