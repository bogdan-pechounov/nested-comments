import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Session } from 'next-auth'
import Providers from './Providers'
import MyNavbar from '@/components/navbar/MyNavbar'

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers>
          <MyNavbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
