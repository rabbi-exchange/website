import Image from 'next/image'
import Hero from './components/hero'
import Section2 from './components/section2'
import Testimonials from './components/testimonials'
import Onetest from './components/onetest'


export default function Home() {
  return (
    <>
    
    <Hero/>
    <div className='mx-2'>
    <Section2/>
    <Testimonials/>
    </div>
    </>
  )
}
