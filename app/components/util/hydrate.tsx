'use client'
import {ReactNode, useEffect, useState} from 'react';
import Lottie from "lottie-react";
import { Inter } from 'next/font/google'
import { useThemeStore } from '@/store';
import AnimationLoader from '@/public/Animation-loader.json'

const inter = Inter({ subsets: ['latin'] })


export default function Hydrate({children}: {children: ReactNode}){
  const themestore = useThemeStore();
    const [isHydrated, setisHydrated] = useState(false)

    useEffect(() => {
      setisHydrated(true)

    }, [])
    
    return(
    <>
      {
      isHydrated ? 
      <body data-theme={themestore.mode} 
        className={`${inter.className} flex flex-col min-h-screen relative`}>
          <div className={`${inter.className}flex-grow w-full h-full`}>
            {children} 
            </div>
          </body> : 
          <body data-theme={themestore.mode} className='h-96 w-96 justify-center align-middle'> <Lottie animationData={AnimationLoader}/></body>
      }
    </>
    )
}