'use client'
import { StaticImageData, StaticImport } from 'next/dist/shared/lib/get-img-props'
import React from 'react';
import Image from 'next/image';
import {motion} from 'framer-motion'

export type imgProps = {
    id: number,
    image: StaticImageData,
    headLine: string,
    tagLine: string,
    alt: string
}

const OneSlide = (props: imgProps) => {
  return (
    <div className='-mb-56 xl:-mb-32'>
        <div className=''>
            <Image className='h-[28rem] lg:h-[32rem] object-fill opacity-20' src={props.image} alt={props.alt} height={400} width={2000}/>
        </div>

        <div className='relative -top-72 flex flex-col px-12  md:w-1/2'>
            <h1 className='text-3xl md:text-4xl font-extrabold text-left primary-content pb-5'>
                {props.headLine}
            </h1>

            <p className='text-left font-light text-sm base-content'>
                {props.tagLine}
            </p>

        </div>

    </div>
  )
}

export default OneSlide