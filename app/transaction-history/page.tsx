"use client"
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import BalanceTiny from '../components/BalanceTiny'
import Nav from '../components/Nav'
import Cookies from 'js-cookie'

const page = () => {
 const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Fetch user data by username from your API
    const fetchUserData = async () => {
      const username = Cookies.get('username');

      if (username) {
        const formData = new FormData();
        formData.append('username', username);

        try {
          const response = await fetch('/api/get-history', {
            method: 'POST',
            body: formData,
          });

          const tableDataJson = await response.json();
          const tableDataNew = [];
          
          tableDataJson.forEach((data) => {
            // Assuming each user object has properties value and label
            if(data.targetUsername == username){
              tableDataNew.push({
                action: data.action,
                username: data.fromUsername,
                amount: Math.abs(data.amount)
              });
            }else{
              tableDataNew.push({
                action: data.action,
                username: data.targetUsername,
                amount: Math.abs(data.amount)*-1
              });
            }
          });

          setTableData(tableDataNew);
          console.log(tableDataNew);

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
    <>
        <Header />
        <div className="w-full flex justify-center">
          <div className="w-full p-4 flex justify-center">
              <table className='w-full border rounded-md'>
                <thead className="bg-black text-l">
                  <tr>
                    <th className="text-start px-4 py-3">Action</th>
                    <th className="text-start">Username</th>
                    <th className="text-start">Amount</th>
                  </tr>
                </thead>
                <tbody className="text-l">
                {tableData.map((transaction, index) => (
                  <tr key={index} className="border-b">
                    <td className='px-4 py-3'>
                      {transaction.action}
                    </td>
                    <td>
                      {transaction.username}
                    </td>
                    <td className={(transaction.amount > 0)? "text-green-600":"text-red-600"}>
                      {transaction.amount}
                    </td>
                  </tr>
                ))}
                </tbody>
              </table>
          </div>
        </div>
        <Nav />
    </>
  )
}

export default page