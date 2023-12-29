'use client'
import React, { useState } from 'react';
import Logo from '@/public/logo.webp';
import Lgdark from '@/public/rabbi-dark.webp';
import menuOpen from '@/public/menu-open.webp';
import menuClose from '@/public/menu-close.webp';
import Image from 'next/image';
import openLight from '@/public/open-light.webp';
import openDark from '@/public/opendark.webp';
import LightClose from '@/public/lightClose.webp'
import DarkLight from './darklight';
import { useThemeStore } from '@/store';
import { motion, AnimatePresence } from 'framer-motion'
import {Session} from 'next-auth'
import { signIn, signOut} from 'next-auth/react'



type Props = {}


const Nav = ({ user }: Session) => {

  const themestore = useThemeStore();

  const [open, setopen] = useState(false)

  const [color, setcolor] = useState(false) //set scrollview 

  const changeCol = ()=>  {
      if (window.scrollY >= 90){
          setcolor(true)
      }
      else{
          setcolor(false)
      }
  }

  window.addEventListener('scroll', changeCol)

  return (
    <nav className='fixed top-0 left-0 right-0 h-32 z-50'>
      <div className={color && themestore.mode === 'black' ? `header-bg flex gap-11 justify-around py-4 bg-black` : color && themestore.mode === 'wireframe' ? `header-bg flex gap-11 justify-around pt-3 bg-white` : `flex gap-11 justify-around mt-6`}>
        <span>
          <a className='pointer' href="/">
        <Image className='w-28' src={themestore.mode == 'wireframe' ? Lgdark : Logo} alt='logo'/>
        </a>
        </span>

        <span className='hidden md:flex align-middle justify-center'>
          <ul className='flex gap-12 pt-3 pl-28'>
            <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}}>
             <a className='pointer' href='about'>
               About
             </a>
            </motion.li>

            <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}}>
           <a className='pointer' href='market'>
             Market Stats
         </a>
            </motion.li>

            <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}}>
           <a className='pointer' href='trade'>
             Trade
         </a>
            </motion.li>

            <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}}>
           <a className='pointer' href='contact'>
             Contact
         </a>
            </motion.li>
          </ul>

       
        </span>

      <div className='hidden md:block'>
        {!user && (
                    <a  className='flex font-xs h-9 ml-14 mt-2 pointer'>
                    <button onClick={()=>{signIn()}} className='bg-gradient-to-r from-base-content to-primary
                    text-sm text-base-300 rounded-lg px-2 hover:bg-gradient-to-r
                    hover:from-primary hover:to-base-content transition duration-150 ease-in-out'>
                      Register/Log In</button>
                    </a>
                )}
                {user && (
                  <a href='api/auth/signout'>  <ul className='flex'>
                    <li className='mr-7 hidden md:flex'>
                        <Image className='rounded-full ml-5 -mt-2 object-cover' src={user?.image as string} 
                        alt={user?.name as string} width={45} height={45}/>
                    </li>
                    <li className='hidden lg:flex pt-2'>{user?.name}</li>
                    </ul>
                    </a>
                )}
            </div>

        <span className='flex justify-between pl-20'>
            <span className='pt-1'>
            <DarkLight/>
            </span>

            <span className='md:hidden' onClick={()=>setopen(!open)}>
            <Image className='h-7 w-7 text-slate-100' src={!open  && themestore.mode == 'wireframe' ? openDark : !open && themestore.mode =='black'? openLight : open && themestore.mode === 'wireframe' ? menuClose : LightClose } alt='menu open'/>
            </span>
        </span>

        

      </div>

      <AnimatePresence>

      {open && <motion.div initial={{opacity: 0}} animate={{opacity:1}}  transition={{type:"spring", duration: 2}} className='md:hidden flex justify-center w-screen h-screen pt-40 bg-base-100'> 
              <ul className='flex flex-col gap-11 text-2xl'>
                <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}} initial ={{y:-450}} animate={{y:0}} transition={{type:"spring",delay: .3}}> 
                  <a className='pointer' href='about'>
                    About
                  </a>
             </motion.li>

                <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}} initial ={{y:-550}} animate={{y:0}} transition={{type:"spring",delay: .4}}>
                <a className='pointer' href='market'>
                  Market Stats
               </a>
                  </motion.li>

                <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}} initial ={{y:-650}} animate={{y:0}} transition={{type:"spring",delay: .5}}>
                <a className='pointer' href='trade'>
                  Trade
                 </a>
                  </motion.li>

                <motion.li whileHover={{scale: 1.5}} whileTap={{opacity:80}} initial ={{y:-750}} animate={{y:0}} transition={{type:"spring",delay: .6}}>
           <a className='pointer' href='contact'>
               Contact
           </a>
                  </motion.li>

                  <motion.li>


                  <motion.div initial={{y: 155, opacity: 0}} animate={{y:0, opacity:1}} transition={{duration: 2.5}} className='block md:hidden pt-24'>
        {!user && (
                    <a  className='flex font-xs h-9 ml-14 mt-2 pointer'>
                    <button onClick={()=>{signIn()}} className='bg-gradient-to-r from-base-content to-primary
                    text-sm text-base-300 rounded-lg px-2 hover:bg-gradient-to-r
                    hover:from-primary hover:to-base-content transition duration-150 ease-in-out'>
                      Register/Log In</button>
                    </a>
                )}
                {user && (
                 <a href='api/auth/signout'>   <ul className='flex'>
                    <li className='mr-7 flex md:hidden'>
                        <Image className='rounded-full ml-5 -mt-2 object-cover' src={user?.image as string} 
                        alt={user?.name as string} width={45} height={45} />
                    </li>
                    <li className='flex md:hidden pt-2'>{user?.name}</li>
                    </ul>
                    </a>
                )}
            </motion.div>

                  </motion.li>
                    </ul>


            </motion.div>}
            </AnimatePresence>
      </nav>
  )
}

export default Nav