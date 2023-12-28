import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Hydrate from './components/util/hydrate'
import Nav from './components/nav';
import Footer from './components/footer';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/pages/api/auth/[...nextauth]';



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rabbi Exchange',
  description: 'A Company You Can Trust',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html className='bg-black' lang="en">
      
      <body className={`${inter.className}`}>

    <Hydrate>
   
      
      <Nav user={session?.user} expires={session?.expires as string}/>
        {children}
        
        <Footer/>
     
    </Hydrate>
    </body>
    </html>

  
  )
}
