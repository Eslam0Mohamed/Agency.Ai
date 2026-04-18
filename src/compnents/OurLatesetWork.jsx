import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

const OurLatesetWork = () => {
    const workData = [
        {
            title: "Mobile app marketing",
            description: "we turn bold ideas into powerful digital solutions taht connect , engage..... ",
            image: assets.work_mobile_app
        },
        {
            title: "Dashboard management",
            description: "we turn bold ideas into powerful digital solutions taht connect , engage..... ",
            image: assets.work_dashboard_management
        },
        {
            title: "Fitness app promotion",
            description: "we help you excute your plan and deliver results",
            image: assets.work_fitness_app
        }
    ]
    return (
        <div id='our-work' className='pt-20 flex flex-col items-center justify-center mx-auto px-4
         sm:px-12 lg:px-24 xl"-40 text-gray-700 dark:text-white
          max-w-5xl'>
            <Title title={"Our latest work"} 
            desc={"we help you create a marketing strategy that drives result"} />
       <div className='grid sm"grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
{
    workData.map((work,index)=>{
        return <div className=' hover:scale-105 duration-500 transition-all cursor-pointer' key={index}>
            <img src={work.image} alt={work.title} className='w-full'  />
<h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
      <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
        </div>
    })
}
       </div>
        </div>
    )
}

export default OurLatesetWork
