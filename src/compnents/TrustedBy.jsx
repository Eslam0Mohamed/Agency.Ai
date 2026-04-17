import React from 'react'
import assets, { company_logos } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80 flex flex-col items-center gap-10'>
      <h3 className='font-semibold'>Trusted by Leading Companies</h3>
   <div className='m-5 flex gap-10 items-center flex-wrap justify-center'>
    {company_logos.map((logo,index)=>{
        return <img src={logo} key={index} alt={logo} className='max-h-5 sm:max-h-6'/>
    })}
   </div>
    </div>
  )
}

export default TrustedBy
