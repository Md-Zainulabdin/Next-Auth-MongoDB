import AuthProvider from './components/AuthProvider/page'
import Nav from './components/Nav/page'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: ["100", "200", "400", "500", "600", "700"]
  , subsets: ['latin']
})

export const metadata = {
  title: 'Grow With Ai',
  description: 'Developed by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <div className='relative'>
            <Nav />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
