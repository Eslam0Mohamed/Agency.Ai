import React from 'react'
import { teamData } from '../assets/assets'
import Title from './Title'
const Team = () => {
    return (
        <div className='team mx-auto text-gray-800 dark:text-white px-4 sm:px-12 lg:px-24 xl:px-40 pt-20'>
            <Title title={"Meet our team"}
                desc={"A passionate team of digital experts dedicated to your brands success."} />
            <div className='grid grid-cols-2 md:grid-3 xl:grid-cols-4 gap-6'>
                {teamData.map((team, index) => {
                     return  <div key={index} className='flex max-sm:flex-col items-center p-5 gap-5 rounded-xl border border-gray-100 dark:border-gray-700 bg-white
             dark:bg-gray-900 shadow-gray-100 dark:shadow-white 
              shadow hover:scale-105 transition-all duration-300'>
                        <img src={team.image} alt={team.name} className='w-12 h-12 rounded-full' />
                        <div className="">
                            <h2 className='font-bold text-md'>{team.name }</h2>
                            <p>{team.title}</p>
                        </div> 
                  </div>
                })}
            </div>
        </div>
    )
}

export default Team
