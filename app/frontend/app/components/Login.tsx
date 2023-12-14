import React from 'react'

const Login = () => {
  return (
    <>
    <div className="flex w-full justify-center flex-col">
        <div className="w-full flex justify-center">
            <div className="w-3/4 mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="text-2xl block flex-1 border-0 bg-transparent py-3 pl-3 text-gray-900 placeholder:text-gray-400 focus:ring-0 xl:text-xl sm:leading-6"
                    placeholder="username"
                    />
                </div>
            </div>
        </div>
        <div className="w-full mt-6 flex items-center justify-center gap-x-6">
            <button
            type="submit"
            className=" w-3/4 rounded-md bg-indigo-600 px-3 py-2 text-2xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Login
            </button>
        </div>
    </div>
    
    </>
  )
}

export default Login