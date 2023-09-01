import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  weight: ["100", "200", "400" , "500" ,"600" , "700"]
  ,subsets: ['latin'] })

export const metadata = {
  title: 'Next Auth',
  description: 'Developed by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div>
        {children}
        </div>
      </body>
    </html>
  )
}
