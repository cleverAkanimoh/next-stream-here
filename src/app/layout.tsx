import NavBar from '@/Components/NavBar'
import './globals.css'
import Footer from '@/Components/Footer'


export const metadata = {
  title: 'Welcome | stream here',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={``}>
        <main>
          <NavBar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
