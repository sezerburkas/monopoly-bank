import React from 'react'
import Header from '../components/Header'
import Login from '../components/Login'

const page = () => {
  return (
    <> 
    <div className='h-full flex flex-col justify-center'>
        <Header />
        <Login />
    </div>
        
    </>
  )
}

export default page