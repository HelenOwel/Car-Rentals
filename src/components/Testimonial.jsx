import React from 'react'

function Testimonial() {
  return (
    <div className='dark:bg-black dark:text-white py-14 sm:pb-24'>
        <div className="container">
            <div className='space-y-4 pb-12'>
                <p className='text-3xl font-semi-bold text-center sm:text-4xl font-serif sm:px-44'>What Our Clients Say About Us</p>
                <p
                data-aos ='fade-up'
                data-aos-delay = '100' className='text-center'
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate inventore minima aliquam beatae placeat!</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial