import React from 'react'
import Header from '../components/Header'
import BalanceTiny from '../components/BalanceTiny'
import Nav from '../components/Nav'
import SendMoney from '../components/SendMoney'

const page = () => {
  return (
    <>
        <Header />
        <BalanceTiny />
        <div className="w-full h-full relative flex flex-col justify-center items-center">
            <SendMoney />
        </div>
        <Nav />
    </>
  )
}

export default page