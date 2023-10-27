import React from 'react'
import { BsBarChart, BsBellFill, BsCart, BsCart2, BsCart3, BsCheck2Circle, BsFillEnvelopeFill, BsGear, BsList, BsReceiptCutoff, BsTruck } from "react-icons/bs";
import Logo from '../assets/AbscrowLogo1.png'


export default function AdminPanel() {
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
                    <h2 className='text-3xl font-semibold text-gray-600'>Dashboard</h2>
                    <p className='text-gray-400'>Get summary of all transactions here</p>
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

            <section className='flex mt-6 gap-6'>
                <section className='ml-4 flex flex-col items-center rounded-lg px-5 bg-slate-100'>
                    <p className=' text-xl font-bold text-gray-700 pt-3 mb-4' >$5000</p> 
                    <div className='flex flex-col gap-3'>
                        <p className='text-center text-blue-500'>$</p>
                        <p className='text-gray-600 pb-2'>Transactions</p>
                    </div>
                </section>

                <section className='ml-4 flex flex-col items-center rounded-lg px-5 bg-slate-100'>
                    <p className=' text-xl font-bold text-gray-700 pt-3 mb-4' >$5000</p> 
                    <div className='flex flex-col gap-3'>
                        <p className='text-center mx-auto'><BsCheck2Circle color='green'/></p>
                        <p className='text-gray-600 pb-2'>Transactions</p>
                    </div>
                </section>

                <section className='ml-4 flex flex-col items-center rounded-lg px-5 bg-slate-100'>
                    <p className=' text-xl font-bold text-gray-700 pt-3 mb-4' >$5000</p> 
                    <div className='flex flex-col gap-3'>
                        <p className='text-center mx-auto text-red-600'>X</p>
                        <p className='text-gray-600 pb-2'>Transactions</p>
                    </div>
                </section>

                <section className='ml-4 flex flex-col items-start rounded-lg px-5 w-80 bg-slate-100'>
                    <p className='mt-2 font-semibold text-gray-600 text-xl text-left'>Transactions</p>
                    
                    <div className=' mt-2 flex w-full justify-center items-center'>
                        <p className='bg-orange-200 px-2 rounded-md py-2'><BsCart3/></p>
                        <section className='w-full'>
                            <div className=" ml-2 w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                                <div className="h-full bg-orange-400 w-1/5"></div>
                            </div>
                            <p className='text-gray-500 ml-2 text-sm'>Refund</p>
                        </section>
                    </div>
                    <div className=' mt-2 flex w-full justify-center items-center'>
                        <p className='bg-green-200 px-2 rounded-md py-2'><BsTruck/></p>
                        <section className='w-full'>
                            <div className=" ml-2 w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                                <div className="h-full bg-green-400 w-1/5"></div>
                            </div>
                            <p className='text-gray-500 ml-2 text-sm'>Delivered</p>
                        </section>
                    </div>
                   
    
                </section>

            </section>


            {/* Transaction */}
            <section className='px-4 py-4 mx-4 mt-4 rounded-md shadow-md  flex flex-col'>
                <h1 className='font-semibold text-gray-800'>Transaction History</h1>
               
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
