import { Footer, NavBar, SideNav } from '@/components'

import { GlobalContextProvider } from '@/context/store'
import { Providers } from '@/lib';

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
      <body className={`w-full font-serif dark:bg-emerald-700 dark:text-white`}>
        <Providers>
          <GlobalContextProvider>
            <NavBar />
            <main className='min-h-screen flex'>
              <SideNav />
              <section className='m-4 p-2 w-full'>{children}</section>
            </main>
            <Footer />
          </GlobalContextProvider>
        </Providers>
      </body>
    </html>
  )
}
