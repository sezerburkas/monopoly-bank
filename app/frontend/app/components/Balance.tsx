import React from 'react'
import Count from './Count'

const Balance = () => {
  return (
    <div>
      <div className='flex w-full justify-center relative'>
        <div className='background-circle'></div>
        <div className='balance-container'>
            <div className='upper'>
              <h1>Wallet Balance</h1>
            </div>
            <div className='down'>
              <span className='money-symbol'>₩</span>
              <span><Count options={{start:0, end:38704, duration:.4}} /></span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Balance