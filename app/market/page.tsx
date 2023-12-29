'use client'
import React from 'react'
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { useThemeStore } from '@/store';
import Exchange from '../components/exchange';


type Props = {}

const page = (props: Props) => {
  const themestore = useThemeStore();

  return (
    <div className='py-40'>
       <div className='px-12'>
        <Exchange/>
      </div>

<div className='h-[32rem] py-4'>
<SymbolOverview colorTheme="dark"
      autosize
      chartType="candlesticks"
      downColor="#800080"
      borderDownColor="#800080"
      wickDownColor="#800080" dateFormat={'dd MMM \'yy'}
       symbols={[
        ["Bitcoin", "BTC"],
        ["Ethereum", "ETH"],
        ["Tron", "TRX"]
      ]}/>
      </div>
    </div>
  )
}

export default page