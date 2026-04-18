import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData=[
        {
            title:"Advertising",
            description:"we turn bold ideas intopoerful digital solutions taht connect , engage..... ",
            icon:assets.ads_icon
        },
        {
            title:"Social Media",
            description:"we help you build a strong social presence and engage with your audience",
            icon:assets.ads_icon
        },
        {
            title:"Content Writing",
            description:"we help you create a marketing strategy that drives result ..... ",
            icon:assets.content_icon
        },
        {
            title:"Content Marketing",
            description:"we help yu excute your plan and deliver results ..... ",
            icon:assets.ads_icon
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 text-gray-700 dark:text:white px-4 py-20 sm:px-12 lg:px-24 xl:px-40'>
      {/* <img src={assets.bgImage2} className='dark:hidden absolute top-0 -left-70' alt="background image" /> */}
    <Title title={"How Can We Help"} desc={"From strategy to excution we craft digital solutions that move your business forward"}/>
  <div className='flex flex-col gap-4 md:grid md:grid-cols-1 lg:grid-cols-2'>
     {servicesData.map((service,index)=>{
    return <ServiceCard key={index} service={service}/>
   })}
  
    </div> 
    </div>
  )
}

export default Services
