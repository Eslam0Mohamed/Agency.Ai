import React from 'react'
import assets from "../assets/assets"
import TrustedBy from './TrustedBy'
import { easeOut, motion, scale } from 'motion/react'
const Hero = () => {
    return (
        <div id='home' className='flex flex-col items-center gap-6 overflow-hidden
    px-4 py-20 sm:px12 lg:px-24 xl:px-40 text-center w-full text-gray-700 dark:text-white'>
            <motion.div 
                initial={{opacity:0,y:20}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.7,ease:easeOut}}
                viewport={{once:true}}
                className='inline-flex items-center gap-2 pr-4 border border-gray-300 p-3  rounded-full'>
                <img src={assets.group_profile} alt="" className='w-20' />
                <p className='text-sm font-medium'>Trusted by +10 pepole</p>
            </motion.div>
            <motion.h1 
            initial={{opacity:0,y:30}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.6,ease:easeOut}}
                viewport={{once:true}}
                className='text-4xl sm:text-5xl md:text-6xl lg:text-[84px] font-medium 
      max-w-5xl bg-linear-to-r from-primary to-black dark:to-white bg-clip-text text-transparent'>Turning imagination into <span className='text-primary font-bold'>digital</span> imapact.</motion.h1>
            <motion.p 
            initial={{opacity:0,y:40}}
                whileInView={{opacity:1,y:0}}
                transition={{duration:0.5,ease:easeOut}}
                viewport={{once:true}}
            className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 
    max-w-4/5 pb-3'>
                Creating meaningful connections and turning big ideas into interactive digital experinces.
            </motion.p>
            <motion.div 
            initial={{opacity:0,scale:0.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:0.8,ease:easeOut}}
            viewport={{once:true}}
            className='relative '>
                <img src={assets.hero_img} alt="background image " className=' w-full max-w-6xl' />
                <img src={assets.bgImage1} alt="background image " className='absolute -top-40 -right-40 sm:-top-100 -z-1 dark:hidden' />
            </motion.div>

        </div>
    )
}

export default Hero
