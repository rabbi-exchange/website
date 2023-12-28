'use client'
import React from 'react'
import { TickerTape } from "react-ts-tradingview-widgets";
import { useThemeStore } from '@/store';

type Props = {}



const Section2 = (props: Props) => {

  const themestore = useThemeStore();
  return (
    <div className='pb-36'>
    <TickerTape colorTheme={themestore.mode === 'black' ? "light" : "dark"}></TickerTape>
    </div>
  )
}

export default Section2