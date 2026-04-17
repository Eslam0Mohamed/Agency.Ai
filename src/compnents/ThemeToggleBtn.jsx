import React, { useEffect } from 'react'
import assets from '../assets/assets'

const ThemeToggleBtn = ({theme,setTheme}) => {
    useEffect(()=>{
        if (theme=="dark") {
            document.documentElement.classList.add("dark")
        }
        else{
            
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme",theme)
    },[theme])
  return (
    <div>
      <button className='p-2'>
{theme=="dark"?(
    <img src={assets.sun_icon} alt="light mode icon"
     className='size-8.5 p-2 border border-gray-500 rounded-full cursor-pointer'
     onClick={()=>{setTheme("light")}} />
):(
    <img src={assets.moon_icon} alt="dark mode icon " 
    className='size-8.5 p-2 border border-gray-500 rounded-full cursor-pointer'
    onClick={()=>{setTheme("dark")}}/>
)}
      </button>
    </div>
  )
}

export default ThemeToggleBtn
