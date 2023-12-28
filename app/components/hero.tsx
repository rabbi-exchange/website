'use client'
import React from 'react';
import Crypto1 from '@/public/rabbi1.webp';
import Crypto2 from '@/public/rabbi2.webp';
import Crypto3 from '@/public/rabbi3.webp';
import OneSlide from './oneSlide';
import { imgProps } from './oneSlide';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { AnimatePresence, motion } from 'framer-motion';


type Props = {}

const data = [
  {
      id: 1,
      image: Crypto1,
      headLine: "Welcome to Rabbi Exchange! Buy and sell Cryptocurrencies Effortlessly.",
      tagLine: "At Rabbi exchange, we redefine simplicity in Cryptocurrency trading, join a community of thousands accessing the world of Digital Assets with ease.",
      alt: "" 
},
  {
      id: 2,
      image: Crypto2,
      headLine: "Secure. Seamless. Swift.",
      tagLine: "Trade securely with our cutting-edge encryption and robust security measures. Our user-friendly interface ensures hassle-free Transactions, while our lighting-fast platform guarantees swift execution.",
      alt: "" 
},
  {
      id: 3,
      image: Crypto3,
      headLine: "24/7 Support",
      tagLine: "Our dedicated support Team is always here to assist you. Whether you're a novice or an experienced Trader, we're committed to providing exceptional service whenever you need it.  ",
      alt: "" 
},
]

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};





const Hero = (props: Props) => {
 
  return (
    <div className='-z-40'>
      <Carousel
       swipeable={true}
       draggable={false}
       showDots={true}
       responsive={responsive}
      //  ssr={true} // means to render carousel on server-side.
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={2000}
      //  keyBoardControl={true}
       customTransition="transform 500ms ease-in-out"
       transitionDuration={2000}
      //  containerClass="carousel-container"
       removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      //  deviceType={this.props.deviceType}
       dotListClass="custom-dot-list-style"
       
     >
      

    {data.map((dat: imgProps) => <OneSlide key={dat.id} id={dat.id} image={dat.image} headLine={dat.headLine} alt={dat.alt} tagLine={dat.tagLine}/>)}

</Carousel>


<div className='flex flex-col lg:flex-row justify-evenly py-12 gap-5 px-3'>
<a href='trade'><motion.button className='bg-gradient-to-r from-base-content to-primary text-base-300 px-5 py-2 rounded-md h-14 w-40 hover:bg-gradient-to-r
          hover:from-primary hover:to-base-content transition duration-150 ease-in-out'>
  Start Trading
  </motion.button>
  </a>
</div>
<div className='py-24'>
    <h1 className='text-3xl md:text-4xl font-extrabold text-center primary-content pb-5'>
                No KYC Required.
        </h1>
        <p className='text-center font-light text-md base-content'>
                Trade Cryptcurrencies Like BTC, ETH, USDT, BUSD to NGN
            </p>
  </div>
    </div>
  )
}

export default Hero;