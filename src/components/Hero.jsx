import React from 'react'
import Car from '../components/images/first.png'
import yellowCarPng from '../components/images/banner-car.png'

function Hero({theme}) {
  return (
    <div className='dark:bg-[#000300] dark:text-white
     duration-300 relative -z-20'>
        <div className="container min-h-[620px] flex">
            <div className='grid place-items-center gap-3 grid-cols-1 
            sm:grid-cols-2'>
                <div
                data-aos = 'zoom-in'
                data-aos-duration='1500'
                 className='order-1 sm:order-2'>
                    <img src={theme === 'dark'? Car: yellowCarPng}
                     alt="/" className='relative -z-10 max-h-[600px] 
                     sm:scale-125
                    drop-shadow[2px_20px_6px_rgba(0,0,0,50)]' />
                </div>
                <div
                 className='order-1 md:order-2 space-y-5 sm:pr-5 lg:px-12'>
                    <p data-aos = 'fade-up'
                       className='text-primary text-2xl font-serif'>
                        Effortless</p>
                    <h1 
                     data-aos = 'fade-up'
                      data-aos-delay = '600'
                    className='text-5xl lg:text-7xl font-semibold 
                    font-serif  '>Car Rental</h1>
                    <p data-aos = 'fade-up'
                      data-aos-delay = '1000'>Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit.
                         Sed harum beatae molestias digni consectetur
                          quisquam quos.
                         </p>
                         <button data-aos = 'fade-up'
                         data-aos-uration = '1500'
                         className='btn btn-primary
                          bg-primary text-black px-6 py-2 rounded-md hover:bg-primary/80 
                         duration-300'>Get Started</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero