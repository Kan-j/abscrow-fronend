import React from 'react'

export default function SignUp() {
  return (
    <section className='w-full h-screen p-20 bg-red-700'>
        <section className="flex bg-red-600 h-full">
            <section className='flex w-1/3 h-full justify-center items-center'>
                <p className='text-3xl text-white '>Join Us</p>
            </section>
            <section className='bg-white flex justify-center items-center flex-col w-2/3 h-full rounded-l-2xl'>
                <section className='w-96'>
                    <h1 className='font-bold text-xl mb-6'>Create Account</h1>
                    {/* <section className='flex'>
                        <button>Sign Up with Google</button>
                        <button>Sign Up with Facebook</button>
                    </section> */}
                    <section className='w-96'>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Full Name
                            </label>
                            <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            className="border-b-2 border-gray-400 focus:outline-none focus:border-red-600 w-full p-2 text-gray-800"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                            Username
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
                            className="bg-red-600 font-semibold text-white  w-full py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
                        >
                            Create Account
                        </button>
                        <div className='text-right'>
                            <span className='text-black ' >Already have an account? </span><span className='text-red-800 font-semibold'>Login</span>
                        </div>
                        </form>
                    </section>
                </section>
            </section>
        </section>       
    </section>
  )
}
