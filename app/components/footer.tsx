import React from 'react'
import foot from '@/public/div.footer-top.webp';
import Image from 'next/image';

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='bottom-0 inset-x-0 '>

        <div className='-mb-32 flex justify-between px-3'>
            <span>
                <h6 className='font-bold pb-2'>Socials</h6>
            </span>
            <span className='flex pl-9 gap-6 lg:gap-16 z-20 text-primary-content'>
                    <span >
                    <h6 className='font-bold pb-2'> Company</h6>
                        <ul className='text-xs' >
                           <a href="/"> <li>Home</li> </a>
                           <a href="about"> <li>About</li> </a>
                            <a href="terms"><li>Terms Of Use</li></a>
                           <a href="privacy"> <li>Privacy Policy</li> </a>
                        </ul>
                    </span>

                    <span>
                        <h6 className='font-bold pb-2' >Useful Links</h6>
                        <ul className='text-xs'>
                          <a href='markets'>  <li>Markets</li> </a>
                         <a href='faqs'><li>FAQs</li> </a>
                         <a href='bitcon'><li>Bitcoin</li></a>
                        </ul>
                    </span>

                    <span>
                    <h6 className='font-bold pb-2'>Contact Us</h6> 
                        <ul className='text-xs'>
                            <li>Phone:</li>
                           <a href='mailto:support@rabbiexchange.com'> <li>Email:</li> </a>
                        </ul>

                    </span>
            </span>
        </div>
        <div>
        <Image className='w-screen h-40 lg:h-64 opacity-50' src={foot} alt='footer image' height={250}/>
        </div>
    </div>
  )
}

export default Footer