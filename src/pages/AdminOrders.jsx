import React from 'react'
import { BsBarChart, BsBellFill, BsCart, BsCart2, BsCart3, BsCheck2Circle, BsFillEnvelopeFill, BsGear, BsList, BsPeople, BsReceiptCutoff, BsTruck } from "react-icons/bs";
import Logo from '../assets/AbscrowLogo1.png'


export default function AdminOrders() {
  return (
    <section className='grid min-h-screen grid-cols-12'>
        {/* SIdeBar */}
        <section className='col-span-2 border-r border-gray-300 flex flex-col items-center'>
            <section className='mt-6 mb-6'>
                <img src={Logo} className='w-24' alt="" />
                {/* <h2 className=''>Abscrow</h2> */}
            </section>
            <section className='flex flex-col gap-3'>
                <button className='flex items-center text-gray-400 font-semibold hover:text-red-500 hover:bg-red-50 px-2 py-1 rounded-md'>
                    <p className='mr-4'><BsBarChart/></p>
                    <p>Dashboard</p>
                </button>
                <button className='flex items-center text-gray-400 font-semibold hover:text-red-500 hover:bg-red-50 px-2 py-1 rounded-md'>
                    <p className='mr-4'><BsList/></p>
                    <p>All Orders</p>
                </button>
                <button className='flex items-center text-gray-400 font-semibold hover:text-red-500 hover:bg-red-50 px-2 py-1 rounded-md'>
                    <p className='mr-4'><BsReceiptCutoff/></p>
                    <p>Refund/Release</p>
                </button>
                <button className='flex items-center text-gray-400 font-semibold hover:text-red-500 hover:bg-red-50 px-2 py-1 rounded-md'>
                    <p className='mr-4'><BsGear/></p>
                    <p>Settings</p>
                </button>
                
            </section>
        </section>

        {/* MainBar */}
        <section className='col-span-10 mt-9 flex flex-col '>
            <section className='flex justify-between mx-6'>
                <section>
                    <h2 className='text-3xl font-semibold text-gray-600'>Orders</h2>
                </section>
                <section className='flex gap-3'>
                    <button>
                        <BsFillEnvelopeFill />
                    </button>
                    <button>
                        <BsBellFill/>
                    </button>
                    <section className='flex gap-2 items-center'>
                        <img src={Logo} className='w-8 h-8 rounded-full' alt="" />
                        <div>
                            <p className='font-semibold'>Ben</p>
                            <p className='text-gray-400'>Admin</p>
                        </div>
                    </section>
                </section>
            </section>

            <section className='flex w-fit mt-6 gap-6 rounded-md shadow-md  ring-1 py-3 ring-slate-200 mx-4'>
                <section className='flex text-left justify-center gap-3 px-6 py-2 '>
                    <p className=' w-16 h-16 flex justify-center items-center rounded-full bg-green-100'>
                      <BsPeople fontSize={26}/>  
                    </p>
                    <div>
                        <p className='text-gray-500 text-lg'>Total Buyers</p>
                        <p className='font-bold text-3xl'>10000</p>
                    </div>
                </section>
                <section className='border-r'>

                </section>
                <section className='flex text-left justify-center gap-3 px-6 py-2 '>
                    <p className=' w-16 h-16 flex justify-center items-center rounded-full bg-green-100'>
                      <BsPeople fontSize={26}/>  
                    </p>
                    <div>
                        <p className='text-gray-500 text-lg'>Total Sellers</p>
                        <p className='font-bold text-3xl'>100</p>
                    </div>
                </section>
                <section className='border-r'>

                </section>
                <section className='flex justify-center gap-3 px-6 py-2'>
                    <p className=' w-16 h-16 flex justify-center items-center rounded-full bg-green-100'>
                      <BsPeople fontSize={26}/>  
                    </p>
                    <div>
                        <p className='text-gray-500 text-lg'>Total Orders</p>
                        <p className='font-bold text-3xl'>1980</p>
                    </div>
                </section>
            </section>


            {/* Transaction */}
            <section className='px-4 py-4 mx-4 mt-4 rounded-md shadow-md  flex flex-col'>
                <section className='flex justify-between'> 
                <h1 className='font-semibold text-gray-800'>All Orders</h1>
                <div className="relative">
                    <input
                        type="text"
                        className="w-64 h-10 px-4 py-2 pl-10 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Search"
                    />
                    <div className="absolute left-3 top-2">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-gray-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 17l-5-5m0 0l-5 5m5-5V6"
                        />
                        </svg>
                    </div>
                    </div>

                </section>
               
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                        <th className="py-2 text-left text-gray-600">Buyer</th>
                        <th className="py-2 text-left text-gray-600">Seller</th>
                        <th className="py-2 text-left text-gray-600">Status</th>
                        <th className="py-2 text-left text-gray-600">Date</th>
                        <th className="py-2 text-left text-gray-600">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-gray-500'>
                        <td className="py-2">John Doe</td>
                        <td className="py-2">Jane Smith</td>
                        <td className="py-2">Completed</td>
                        <td className="py-2">2023-05-10</td>
                        <td className="py-2">$100.00</td>
                        </tr>
                        <tr className='text-gray-500'>
                        <td className="py-2">Alice Johnson</td>
                        <td className="py-2">Bob Williams</td>
                        <td className="py-2">Pending</td>
                        <td className="py-2">2023-05-12</td>
                        <td className="py-2">$50.00</td>
                        </tr>
                        <tr className='text-gray-500'>
                        <td className="py-2">Eva Brown</td>
                        <td className="py-2">Mike Davis</td>
                        <td className="py-2">Completed</td>
                        <td className="py-2">2023-05-15</td>
                        <td className="py-2">$75.00</td>
                        </tr>
                        <tr className='text-gray-500'>
                        <td className="py-2">Sophia Wilson</td>
                        <td className="py-2">Sam Clark</td>
                        <td className="py-2">Pending</td>
                        <td className="py-2">2023-05-20</td>
                        <td className="py-2">$120.00</td>
                        </tr>
                        <tr className='text-gray-500'>
                        <td className="py-2">Liam Lee</td>
                        <td className="py-2">Olivia Martin</td>
                        <td className="py-2">Completed</td>
                        <td className="py-2">2023-05-25</td>
                        <td className="py-2">$90.00</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </section>
    </section>
  )
}
