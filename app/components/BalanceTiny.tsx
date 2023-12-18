"use client"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import Count from './Count';

const Balance = () => {
  const [balance, setBalance] = useState(0);
  const [prevBalance, setPrevBalance] = useState(0);

  useEffect(() => {
    // Fetch user data by username from your API
    const fetchUserData = async () => {
      const username = Cookies.get('username');

      if (username) {
        const formData = new FormData();
        formData.append('username', username);

        try {
          const response = await fetch('/api/user', {
            method: 'POST',
            body: formData,
          });

          const userData = await response.json();
          const newBalance = parseInt(userData.balance) || 0;

          // Update balance only if it has changed
          if (newBalance === parseInt(0) || newBalance !== prevBalance) {
            setBalance(newBalance);
            setTimeout(()=>{
              setPrevBalance(newBalance);
            },500);
            
          }
          
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

     // Set up interval to fetch data every 5 seconds (adjust as needed)
     const intervalId = setInterval(fetchUserData, 500);

     // Clean up the interval on component unmount
     return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className='flex w-full justify-center relative'>
        <div className='background-circle'></div>
        <div className='balance-tiny-container'>
          <div className='upper'>
            <h1>Wallet Balance</h1>
          </div>
          <div className='down'>
            <span className='money-symbol'>₩</span>
            <span><Count options={{ start: prevBalance, end: balance, duration: 0.4 }} /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Balance;
