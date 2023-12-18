"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  const username = Cookies.get('username');

  useEffect(() => {
    if (username == null) {
      router.push('/login');
    }
  }, [username, router]);

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