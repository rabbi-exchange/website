import React from 'react'

type Props = {}

const Exchange = (props: Props) => {
  return (
    <div> 
        <div>
        <h1 className='font-extrabold text-3xl py-6'> Our Exchange Rates</h1>
        </div>
        <div>
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Coin</th>
        <th>Exchange Rate</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <td>BTC</td>
        <td>₦990/$</td>
      </tr>
      {/* row 1 */}
      <tr>
        <td>ETH</td>
        <td>₦900/$</td>
      </tr>
      {/* row 1 */}
      <tr>
        <td>USDT</td>
        <td>₦995/$</td>
      </tr>
      {/* row 1 */}
      <tr>
        <td>BUSD</td>
        <td>₦990/$</td>
      </tr>
      {/* row 1 */}
      <tr>
        <td>USDC</td>
        <td>₦990/$</td>
      </tr>
    
    </tbody>
  </table>
</div>


        </div>
    </div>
  )
}

export default Exchange