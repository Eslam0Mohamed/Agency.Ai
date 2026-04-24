import React, { useState } from 'react'
import assets from '../assets/assets'
import ThemeToggleBtn from './ThemeToggleBtn'
import { motion } from "motion/react";
import { easeIn, easeOut } from 'motion';

const Navbar = ({ theme, setTheme }) => {
const [sidebarOpened,setSidebarOpened] = useState(false)

    return (
        <motion.div 
        initial={{opacity:0,y:-50}}
        animate={{opacity:1,y:0}}
        transition={{duration:1,ease:easeOut}}
        className='flex justify-between items-center px-4 py-4 sm:px-12 lg:px-24 xl:px-40 z-20
    sticky top-0 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70  '>
            <img src={theme == "dark" ? assets.logo_dark : assets.logo}
                alt="agency.ai logo" className='w-32 sm:w-40' />


            <div className={`flex gap-6 text-gray-700 dark:text-white sm:text-sm 
            ${sidebarOpened? 'max-sm:w-60 max-sm:pl-10':"max-sm:w-0 overflow-hidden"}  max-sm:fixed max-sm:top-0 max-sm:right-0 transition-all
            max-sm:min-h-screen max-sm:bg-primary max-sm:text-white 
            max-sm:flex-col max-sm:pt-20 `}>

             <img src={assets.close_icon} alt="close sidebar"
             className={`${sidebarOpened?"block":"hidden"} w-10 sm:hidden absolute top-4 right-4 cursor-pointer`}
             onClick={()=>{setSidebarOpened(false)}} />

                <a onClick={()=>{setSidebarOpened(false)}} href="#home" className='hover:border-b'>Home</a>
                <a onClick={()=>{setSidebarOpened(false)}} href="#services" className='hover:border-b'>Services</a>
                <a onClick={()=>{setSidebarOpened(false)}} href="#our-work" className='hover:border-b'>Our Work</a>
                <a onClick={()=>{setSidebarOpened(false)}} href="#contact" className='hover:border-b'>Contact Us</a>
            </div>
            <div className='flex gap-2 items-center sm:gap-4'>
                <ThemeToggleBtn theme={theme} setTheme={setTheme} / >

             <img  src={theme=="dark"?assets.menu_icon_dark:assets.menu_icon} alt="open sidebar" 
             className={`${sidebarOpened?"hidden":"block"}  w-10 sm:hidden absolute top-4 right-4 cursor-pointer`}
             onClick={()=>{setSidebarOpened(true)}} />

                <a href="#contact-us" className='max-sm:hidden cursor-pointer text-sm hover:scale-105 
                transition-all flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full duration-300'>
                    Connect <img src={assets.arrow_icon} width={14} alt='connect Us'/>
                </a>
            </div>
        </motion.div>
    )
}
export default Navbar