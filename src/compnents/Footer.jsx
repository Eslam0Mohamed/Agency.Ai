import React from 'react'
import assets from '../assets/assets'

const Footer = ({ theme }) => {
    return (
        <footer className='bg-slate-50 dark:bg-gray-900 
    py-20 px-4 sm:px-12 lg:px-24 xl:px-40'>
            <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>
                <div className='space-y-5 dark:text-white'>
                    <img src={theme == "dark" ? assets.logo_dark : assets.logo} alt="logo" className='w-32 sm:w-44' />
                    <p>From strategy to excution , we craft digital solution that move your bussiness forward</p>
                    <ul className='flex gap-6 flex-wrap'>
                        <li><a className=' hover:text-primary' href="#home">Home</a></li>
                        <li><a className=' hover:text-primary' href="#sercices">Services</a></li>
                        <li><a className=' hover:text-primary' href="#our-work">Our Work</a></li>
                        <li><a className=' hover:text-primary' href="#contact">Contact Us</a></li>
                    </ul>
                </div>
                <div className='dark:text-white '>
                    <h1>Subscribe to our newsletter</h1>
                    <p className='text-sm mt-3 mb-6'>
                        The latest news , articles and resources
                    </p>
                    <div className='flex gap-2 items-center'>
                        <input type="text" placeholder='Subscribe' className='p-3 rounded-xl w-full text-sm 
                        border border-gray-300 dark:border-gray-600 
                         dark:text-gray-200 bg-transparent outline-0'/>
                        <button className='w-fit bg-primary text-white px-4 py-3 rounded-xl'>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr className='my-6 border-gray-300 dark:border-gray-600' />
            <div className='flex flex-wrap items-center justify-between sm:justify-between gap-4 text-sm text-gray-500 '>
                <p className='hover:text-primary'>Copyright 2026 @ Agency.Ai - All rights reserved</p>
                <div className="social flex items gap-4 justify-between">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.instagram_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
        </footer>
    )
}

export default Footer
