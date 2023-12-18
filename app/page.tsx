import Image from 'next/image'
import Header from './components/Header'
import Balance from './components/Balance'
import Nav from './components/Nav'
import SendMoney from './components/SendMoney'

export default function Home() {
  return (
    <>
     <Header />
     <Balance />
     <Nav />
    </>

  )
}
