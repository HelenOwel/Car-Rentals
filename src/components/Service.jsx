import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import { GiNotebook } from 'react-icons/gi'
import { SlNote } from 'react-icons/sl'

const skillData = [
    {
        name:'Best Price',
        icons: <FaCameraRetro className='text-5xl text-primary group-hover:text-black duration-300'/>,
        link:'#',
        description: 'lorem ipsum dolor sit amet consectetur, adipsicing elit',
        aosDelay:'500'
    },
    {
        name:'Fast and Safe',
        icons: <GiNotebook className='text-5xl text-primary group-hover:text-black duration-300'/>,
        link:'#',
        description: 'lorem ipsum dolor sit amet consectetur, adipsicing elit',
        aosDelay:'500'
    },
    {
        name:'Experience Drivers',
        icons: <SlNote className='text-5xl text-primary group-hover:text-black duration-300'/>,
        link:'#',
        description: 'lorem ipsum dolor sit amet consectetur, adipsicing elit',
        aosDelay:'500'
    }
]

function Service() {
  return (
    <div className='py-14 dark:bg-black dark:text-white sm:grid sm:place-items-center'>
        <div className="container">
            <div className='pb-12'>
                <h1 className='text-3xl font-semibold text-center font-serif sm:text-4xl'>Why Choose <span className='text-primary'>Us</span></h1>
                <div>
                    <div className=' md:w-[80%] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 text-center mt-7 text-2xl md:text-2xl'>
                        {
                            skillData.map((skill)=>(
                                <div
                                key={skill.name}
                                data-aos = 'fade-up'
                                data-aos-delay = {skill.aosDelay}
                                className='card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark cursor-pointer hover:bg-primary 
                                duration-300 text-white hover:text-black rounded-lg '
                                >
                                    <div className='grid place-items-center '>
                                        {skill.icons}
                                    </div>
                                    <h1>{skill.name}</h1>
                                    <p className='pb-9'>{skill.description}</p>
                                    <a href={skill.link} className=' '>Learn More</a>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service