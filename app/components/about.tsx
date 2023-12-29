'use client'
import { motion } from 'framer-motion'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

type Props = {}

const About = (props: Props) => {

  useEffect(() => {
    AOS.init({duration: 1500});
  }, [])
  
  return (
    <div className='pb-20' data-aos="fade-up"> 
<h1 className='text-center text-3xl md:text-4xl font-extrabold primary-content py-9'>
    About Rabbi Exchange
    </h1>

  <div className="px-12 lg:px-64">
    <p>Welcome to Rabbi Exchange, your gateway to a secure and seamless cryptocurrency trading experience. At Rabbi Exchange, we pride ourselves on providing a platform that not only simplifies crypto trading but places the highest priority 
        on the security of your funds and assets.</p>
    <div className="card-actions justify-end">
    <a href='about'>  
    <motion.button className='bg-gradient-to-r from-base-content to-primary text-base-300 rounded-md p-2 hover:bg-gradient-to-r
          hover:from-primary hover:to-base-content transition duration-150 ease-in-out'>
 Read More
  </motion.button>
          </a>
    </div>
  </div>



    </div>
  )
}

export default About