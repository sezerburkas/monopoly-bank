"use client"
import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const Login = () => {
  const [username, setUsername] = useState('');
  const [isValidUsername, setIsValidUsername] = useState(true);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = async () => {
    // Call your Prisma API to check the username
    // Replace 'YOUR_PRISMA_API_ENDPOINT' with your actual Prisma API endpoint
    const prismaApiEndpoint = '/api/user';

    const formData = new FormData();
    formData.append('username', username);
  
    const response = await fetch(`${prismaApiEndpoint}`, {
        method: 'POST',
        body: formData,
    });

    const data = await response.json();

    if (data!=null) {
    // Set cookie with user id and name
    Cookies.set('userId', data.userId);
    Cookies.set('username', username);

    // Redirect or perform any other action upon successful login
    // Replace 'YOUR_REDIRECT_PATH' with the actual path you want to redirect to
    window.location.href = '/';
    } else {
    setIsValidUsername(false);
    }
    
  };

  return (
    <>
      <div className="flex w-full justify-center flex-col">
        <div className="w-full flex justify-center">
          <div className="w-3/4 mt-2">
            <div className={`flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset ${isValidUsername ? 'focus-within:ring-indigo-600' : 'ring-red-500'} sm:max-w-md`}>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                value={username}
                onChange={handleUsernameChange}
                className="text-2xl block flex-1 border-0 bg-transparent py-3 pl-3 text-white placeholder:text-gray-400 focus:ring-0 xl:text-xl sm:leading-6"
                placeholder="username"
              />
            </div>
            {!isValidUsername && (
              <p className="text-red-500 text-sm mt-2">Invalid username. Please try again.</p>
            )}
          </div>
        </div>
        <div className="w-full mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            onClick={handleLogin}
            className="w-3/4 rounded-md bg-indigo-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
