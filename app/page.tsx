import Image from 'next/image'
import Hero from './components/hero'
import Section2 from './components/section2'
import Testimonials from './components/testimonials'
import Onetest from './components/onetest'
import Faqs from './components/faqs'
import { faqProps } from './components/faqs'
import About from './components/about'




export default function Home() {
  return (
    <>
    
    <Hero/>
    <div className='mx-2'>
    <Section2/>
    <About/>
    <Testimonials/>
    <Faqs/>
    </div>
    </>
  )
}
