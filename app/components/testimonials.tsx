'use client'
import React from 'react'
import Carousel from 'react-multi-carousel';
import Onetest from './onetest'
import { testProps } from './onetest';



const data  = [
    {
        message: "Trading with Rabbi Exchange transformed my financial journey. The user-friendly platform and responsive customer support made navigating the crypto market a breeze. I've seen significant returns on my investments, and the educational resources helped me understand the market better. Highly recommended!",
        person: "Olawole John",
    },
    {
        message: "As a seasoned trader, I've tried various platforms, and Rabbi Exchange stands out. The advanced tools and real-time market insights are invaluable. What surprised me was the speed of transactions; it's a game-changer. Now, I confidently trade from New York with ease",
        person: "Anna Soros",
    },
    {
        message: "Being in the crypto space for years, I've found Rabbi Exchange to be the most reliable. The security features are top-notch, and the diverse range of supported cryptocurrencies is impressive. It's my go-to platform for seamless trading experiences",
        person: "Rajesh Markin",
    },
    {
        message: "I stumbled upon Rabbi Exchange and never looked back. The intuitive interface and comprehensive market analysis tools helped me make informed decisions. The withdrawal process is swift, and their commitment to security reassures me, even trading from London",
        person: "Sophie Gore",
    },
    {
        message: "Living in Johannesburg, I needed a trustworthy crypto platform, and Rabbi Exchange exceeded my expectations. The low transaction fees and 24/7 customer support make trading hassle-free. It's the perfect solution for anyone looking to venture into cryptocurrency from South Africa",
        person: "Al Mustapha",
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

type Props = {}

const Testimonials = (props: Props) => {
  return (
    <div className='bg-black opacity-70 text-white'>
    <div className={`bg-[url(../public/back.webp)] h-full w-screen bg-fixed mb-32 py-11`}>
        <span>
             <h3 className=' flex flex-wrap justify-center py-7 font-extrabold text-2xl'>What Our Customers<br></br> Are Saying</h3>
        </span>

        <span>
      <Carousel
       swipeable={true}
       draggable={false}
       showDots={true}
       responsive={responsive}
      //  ssr={true} // means to render carousel on server-side.
       infinite={true}
       autoPlay={true}
       autoPlaySpeed={2000}
       keyBoardControl={true}
       customTransition="transform 1500ms ease-in-out"
       transitionDuration={2000}
      //  containerClass="carousel-container"
       removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      //  deviceType={this.props.deviceType}
       dotListClass="custom-dot-list-style"
       
     >
      

    {data.map((dat: testProps) => <Onetest message={dat.message} person={dat.person}/>)}

</Carousel>
        </span>

    </div>
    </div>

  )
}

export default Testimonials