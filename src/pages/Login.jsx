import React from 'react'

export default function Login() {
  return (
    // <div className="flex justify-center items-center h-screen bg-red-700">
    //   <div className="bg-white p-8 rounded-lg shadow-lg w-96">
    //     <h2 className="text-2xl font-semibold text-gray-800 mb-6">Login</h2>
    //     <h2></h2>
    //     <form>
    //       <div className="mb-4">
    //         <label htmlFor="username" className="block text-sm font-medium text-gray-600">
    //           Username
    //         </label>
    //         <input
    //           type="text"
    //           id="username"
    //           name="username"
    //           placeholder="Enter your username"
    //           className="border-b-2 border-gray-400 focus:outline-none focus:border-red-600 w-full p-2 text-gray-800"
    //         />
    //       </div>
    //       <div className="mb-6">
    //         <label htmlFor="password" className="block text-sm font-medium text-gray-600">
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           placeholder="Enter your password"
    //           className="border-b-2 border-gray-400 focus:outline-none focus:border-red-600 w-full p-2 text-gray-800"
    //         />
    //       </div>
    //       <button
    //         type="submit"
    //         className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
    //       >
    //         Login
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <section className='w-full h-screen p-20 bg-red-700'>
    <section className="flex bg-red-600 h-full">
        <section className='flex w-1/3 h-full justify-center items-center'>
            <p className='text-3xl text-white'>Welcome Back</p>
        </section>
        <section className='bg-white flex justify-center items-center flex-col w-2/3 h-full rounded-l-2xl'>
            <section className='w-96'>
                <h1 className='font-bold text-xl mb-6'>Login</h1>
                <section className='w-96'>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                className="border-b-2 border-gray-400 focus:outline-none focus:border-red-600 w-full p-2 text-gray-800"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                className="border-b-2 border-gray-400 focus:outline-none focus:border-red-600 w-full p-2 text-gray-800"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-red-600 font-semibold text-white w-full py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                        >
                            Login
                        </button>
                        <div className='text-right mt-2'>
                                <span className='text-black'>Don't have an account? </span><a href='' className='text-red-800 font-semibold'>Sign Up</a>
                            </div>
                        </form>
                    </section>
                </section>
            </section>
        </section>
    </section>

  )
}
