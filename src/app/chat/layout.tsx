import { Header,  ChatSideNav } from '@/components';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chat | Live Stream Here',
  description: 'sport streaming site with chat in Nigeria',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className='border border-red-600 fixed left-0 top-0 w-full h-screen overflow-hidden z-50'>
      <Header />
      <main className='flex items-center sm2:py-2 h-[92vh] sm2:h-[87.5vh]'>
        <ChatSideNav />
        <div className='gap-2 sm2:my-4 sm2:px-2 w-full h-full overflow-auto'>
          <section className='min-h-[80%] w-full border p-2 sm:p-8 sm2:p-0'>{children}</section>
        </div>
      </main>
    </div>
  )
}
