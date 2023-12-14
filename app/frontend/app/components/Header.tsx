import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='header'>
        <Image
            src="/images/monopoly-logo.png"
            alt="frame"
            className="header-logo"
            width={233}
            height={86}
        />
    </div>
  )
}

export default Header