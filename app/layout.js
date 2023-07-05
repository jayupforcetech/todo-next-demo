import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo',
  description: 'Todo app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <p className='text-4xl p-3'>Todo</p>
        {children}
      </body>
    </html>
  )
}
