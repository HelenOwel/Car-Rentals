import React from 'react'
import Carpng from './images/car1.png'

function About() {
  return (
    <div className='dark:bg-dark dark:text-white duration-300 sm-min-h-[600px] sm:grid sm:place-items-center mx-auto bg-slate-100'>
        <div class='container'>
            <div class='grid sm:grid-cols-2 grid-cols-1 sm:mt-[50px] md:mt-0 place-items-center'>
               <div
               data-aos='slide-right'
               data-aos-duration ='1500'
               data-aos-once ='false'
               >
               <img src={Carpng} alt="/"
               className='sm:scale-105 sm:-translate-x-11 sm-max-h-[500px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]' />
               </div>
               <div>
                <div className='space-y-5 px-7 sm:pb-16'>
                    <h1
                    data-aos ='fade-up'
                     className='text-3xl sm:text-4xl font-serif '>
                    About Us</h1>
                    <p data-aos ='fade-up'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia blanditiis similique optio perferendis qui.</p>
                    <br />
                    <p data-aos ='fade-up'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, accusantium.</p>
                    <button data-aos ='fade-up' className='button-outline'>Get Started</button>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About