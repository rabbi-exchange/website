'use client'
import React, { useEffect, useState } from 'react';
import Exchange from '../components/exchange';

const MyComponent: React.FC = () => {


  const [amount, setamount] = useState<number>(0)
  const [coin, setcoin] = useState<string>("");


  const phoneNumber = '+2348129751279';
  const customMessage = `I want to trade $ ${amount} of ${coin}`;

  const encodedMessage = encodeURIComponent(customMessage);
  const whatsappLink = `https://wa.me/${phoneNumber}/?text=${encodedMessage}`;


  useEffect(() => {
    console.log([coin,amount])
  }, [coin,amount])
  


    const TradeInitializer = ()=>{
  }

  return (
    <div className='py-40 text-center'>
      <div className='bg-black bg-opacity-20 p-10 box-shadow rounded-lg mx-56'>
      <h1 className='font-extrabold text-3xl py-6'>Trade</h1>
      <p>Please Input The token select the token you want to trade and $USD equivalent</p>
      <span className='flex flex-col md:flex-row gap-4 justify-around px-7 py-9'>
      <select id="coin" className='dropdown rounded-md px-2 border border-black border-solid w-20 p-2' value={coin} onChange={(e)=> setcoin(e.target.value)}>
        <option className='dropdown-content'>BTC</option>
        <option>ETH</option>
        <option>USDT</option>
        <option>BUSD</option>
        <option>USDC</option>
    </select>
      <input id="amount" type='number' placeholder='$ input amount to trade' className='px-4 py-2 w-96 rounded-md border border-black border-solid' onChange={(e:any) => setamount(e.target.value)} value={amount}/>
      </span>


      <a className='pointer' href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button className='bg-gradient-to-r from-base-content to-primary text-base-300 px-5 py-2 rounded-md'>Trade Now</button>
      </a>
      </div>

      <div className='pt-24'>
        <Exchange/>
      </div>
    </div>
  );
};

export default MyComponent;
