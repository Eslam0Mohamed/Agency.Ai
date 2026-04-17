import React from 'react'
import assets from "../assets/assets"
import TrustedBy from './TrustedBy'
const Hero = () => {
    return (
        <div className='flex flex-col items-center gap-6 overflow-hidden
    px-4 py-20 sm:px12 lg:px-24 xl:px-40 text-center w-full text-gray-700 dark:text-white'>
            <div className='inline-flex items-center gap-2 pr-4 border border-gray-300 p-3  rounded-full'>
                <img src={assets.group_profile} alt="" className='w-20' />
                <p className='text-sm font-medium'>Trusted by +10 pepole</p>
            </div>
            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-medium 
      max-w-5xl bg-linear-to-r from-primary to-black dark:to-white bg-clip-text text-transparent'>Turning imagination into <span className='text-primary font-bold'>digital</span> imapact.</h1>
            <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 
    max-w-4/5 pb-3'>
                Creating meaningful connections and turning big ideas into interactive digital experinces.
            </p>
            <div className='relative '>
                <img src={assets.hero_img} alt="background image " className=' w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="background image " className='absolute -top-40 -right-40 sm:-top-100 -z-1 dark:hidden' />
            </div>

        </div>
    )
}

export default Hero
