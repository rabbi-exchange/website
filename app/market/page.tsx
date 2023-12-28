'use client'
import React from 'react'
import { SymbolOverview } from "react-ts-tradingview-widgets";
import { useThemeStore } from '@/store';


type Props = {}

const page = (props: Props) => {
  const themestore = useThemeStore();

  return (
    <div className='pt-40 h-screen'>

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
  )
}

export default page