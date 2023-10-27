import React from 'react'
import Illustration from '../assets/illustration.svg'
import Security from '../assets/security.svg'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


export default function LandingPage() {
    const carouselContainerStyle = {
        height: '70vh', // 70% of the viewport height
      };
  return (
    <section className='min-h-screen'>
        {/* Navigation Bar */}
        <nav className='flex justify-between mx-10 h-14 items-center'>
           <a href="" className='font-semibold text-base text-red-700'>Abscrow</a>
            <section className='flex gap-8'>
                <a href="" className='text-gray-600 font-medium text-base hover:text-red-500 transition duration-300'>Home</a>
                <a href="" className='text-gray-600 font-medium text-base hover:text-red-500 transition duration-300'>Feature</a>
                <a href="" className='text-gray-600 font-medium text-base hover:text-red-500 transition duration-300'>Product</a>
                <a href="" className='text-gray-600 font-medium text-base hover:text-red-500 transition duration-300'>FAQ</a>
            </section> 
            <section className='flex gap-3 items-baseline'>
                <a href="" className='text-red-500 font-semibold hover:text-red-700 transition duration-300'>Login</a>
                <a href="" className='bg-red-500 px-2 py-1 text-white font-semibold rounded-lg hover:bg-red-700 transition duration-300'>Sign up</a>
            </section> 
        </nav>




    <div className="relative  overflow-hidden">
      <Carousel
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // 5 seconds per slide
      >
        <div className="carousel-slide " style={carouselContainerStyle}>
          <div className="w-full h-full  text-white flex items-center">
            <div className="flex-1 text-center p-6">
              <h1 className="text-6xl text-gray-600 font-semi-bold mr-4">Secure Online Payments</h1>
              <p className="text-gray-400 text-lg mt-4 line-clamp-3 mx-4">
              Experience the future of online payments with Abscrow. Your transactions are protected with cutting-edge blockchain technology
              </p>
              <button className="bg-red-600 hover:bg-red-800 text-white py-2 px-4 mt-6  font-semibold">
              Get Started
              </button>
            </div>

            <div className="flex-1">
              <img src={Security} className='object-contain w-full h-full' alt="SVG 1" />
            </div>
          </div>
        </div>

        <div className="carousel-slide" style={carouselContainerStyle}>
          <div className="w-full h-full bg-red-900 text-white flex items-center">
            <div className="flex-1 text-center p-6">
              <h1 className="text-4xl font-extrabold">Seamless Global Transactions</h1>
              <p className="text-gray-400 text-lg mt-4">
              Connect with the world and make transactions hassle-free with Abscrow's blockchain innovation.
              </p>
              <button className="bg-red-600 hover-bg-red-800 text-white py-2 px-4 mt-6 rounded-full font-semibold">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <img src="svg-2.svg" alt="SVG 2" />
            </div>
          </div>
        </div>
        <div className="carousel-slide" style={carouselContainerStyle}>
          <div className="w-full h-full bg-red-900 text-white flex items-center">
            <div className="flex-1 text-center p-6">
              <h1 className="text-4xl font-extrabold">Unlock Financial Freedom with Abscrow</h1>
              <p className="text-gray-400 text-lg mt-4">
              Take control of your funds and empower your financial future with Abscrow
              </p>
              <button className="bg-red-600 hover-bg-red-800 text-white py-2 px-4 mt-6 rounded-full font-semibold">
              Explore Features
              </button>
            </div>
            <div className="flex-1">
              <img src="svg-3.svg" alt="SVG 3" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>

    {/* Our Clients */}
    <section className='flex items-center flex-col mt-4 gap-2'>
        <h1 className='text-xl text-gray-600 font-medium'>Our Clients</h1>
        <p className='text-sm text-gray-500'>Some partners we have been working with over the years</p>
        <section className='flex gap-3'>
            <img src="" alt="" className='w-10 h-10'/>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />

        </section>
    </section>


      {/* Our Values */}
    <section className='flex items-center flex-col mt-4 gap-2'>
        <h1 className='text-xl text-gray-600 font-medium'>Our Values</h1>
        <p className='text-sm text-gray-500'>Some partners we have been working with over the years</p>
        <section className='flex gap-4'>
            <section className='flex-1 '>
                <img src="" alt="" />
                <h1 className='font-semibold text-lg'>Lorem Ipsum</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis.</p>
            </section>
            <section className='flex-1'>
                <img src="" alt="" />
                <h1 className='font-semibold text-lg'>Lorem Ipsum</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis.</p>
            </section>
            <section className='flex-1'>
                <img src="" alt="" />
                <h1 className='font-semibold text-lg'>Lorem Ipsum</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, perferendis.</p>
            </section>

        </section>
    </section>


    <div className="bg-white w-full max-w-screen-xl mx-auto rounded-lg shadow-lg p-6 md:p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-extrabold text-gray-800">Welcome to Our Platform</h2>
          <p className="mt-4 text-gray-600">Discover a world of opportunities with our cutting-edge platform. Join us today!</p>
          <a href="#" className="mt-6 inline-block bg-red-600 text-white rounded-full px-6 py-3 font-semibold hover:bg-red-700 transition duration-300">Get Started</a>
        </div>
        <div className="md:col-span-1">
          <img src="card-image.jpg" alt="Card Image" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </div>


    <footer className="bg-red-700 text-white">
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h2 className="text-base font-medium mb-3">Company</h2>
            <ul>
              <li><a href="#" className='text-sm'>About Us</a></li>
              <li><a href="#" className='text-sm'>Careers</a></li>
              <li><a href="#" className='text-sm'>Press</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-base font-medium mb-3">Products</h2>
            <ul>
              <li><a href="#" className='text-sm'>Features</a></li>
              <li><a href="#" className='text-sm'>Pricing</a></li>
              <li><a href="#" className='text-sm'>Support</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-base font-medium mb-3">Resources</h2>
            <ul>
              <li><a href="#" className='text-sm'>Blog</a></li>
              <li><a href="#" className='text-sm'>Documentation</a></li>
              <li><a href="#" className='text-sm'>Community</a></li>
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-base font-medium mb-3">Contact</h2>
            <ul>
              <li className='text-sm'>Email: info@example.com</li>
              <li className='text-sm'>Phone: +1 (123) 456-7890</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>

    </section>
    
  )
}
