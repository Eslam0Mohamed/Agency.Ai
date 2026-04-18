import React from 'react'

const ServiceCard = ({ service, index }) => {
    return (
         <div className='relative overflow-hidden max-w-lg m2 
     dark:border-gray-700 shadow-2xl shadow-gray-100 dark:shadow-white/10 sm:m-4 rounded-2xl border border-gray-200'>
             <div className='flex items-center gap-10 p-8 hover:p-7.5
      transition-all rounded-[10px] bg-white dark:bg-gray-900 relative'>
                <div className="image bg-gray-100 dark:bg-gray-700 rounded-full ">
                    <img src={service.icon} alt="" className='max-w-24 dark-bg-gray-900 rounded-full m-2 bg-white ' />
                </div>
                <div className="text dark:text-gray-200">
                    <h3 className='font-bold'>{service.title}</h3>
                    <p className='text-sm mt-2'>{service.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard
