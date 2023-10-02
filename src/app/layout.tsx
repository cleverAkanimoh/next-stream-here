import { ClerkProvider } from '@clerk/nextjs';
import { Footer, NavBar, SideNav } from '@/components';
import GlobalContextProvider from '@/context/store';
import { Providers } from '@/lib';

import './globals.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome | Live Stream Here',
  description: 'sport streaming site in Nigeria',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={`w-full h-screen relative overflow-hidden font-serif bg-emerald-700 text-white transition-color duration-300`}>
          <Providers>

            <NavBar />
            <main className='flex items-center sm2:py-2 h-[90vh] sm2:h-[87.5vh]'>
              <SideNav />
              <div className='gap-2 sm2:my-4 sm2:px-2 w-full h-full overflow-auto'>
                <section className='min-h-[80%] p-2 sm:p-8 sm2:p-0'>{children}</section>
                <Footer />
              </div>
            </main>
            
          </Providers>
        </body>
      </html>

    </ClerkProvider>
  )
}
