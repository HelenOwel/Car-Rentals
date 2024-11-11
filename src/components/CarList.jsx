import React from 'react'
import car1 from './images/car1.png'
import car2 from './images/car2.png'
import car3 from './images/car6.png'




const CarListD = [
    {
        name: 'BMW UX',
        price: 100,
        image: car1,
        asoDelay: '0'
    },
    {
        name: 'Kia W',
        price: 100,
        image: car2,
        asoDelay: '500'
    },
    {
        name: 'BMW UX',
        price: 100,
        image: car3,
        asoDelay: '1000'
    }

]



function CarList() {
  return (
    <div className='pb-24 pt-12 bg-white dark:bg-dark dark:text-white'>
        <div className="container ">
            <h1 className='text-3xl md:text-4xl font-semibold font-serif mb-3'>Helen Owel's Car Rentals sit.</h1>
            <p data-aos='fade-up' className='text-sm pb-10' >Helen Owel dolor sit amet consectetur
                 adipisicing elit. Sequi quibusdam consectetur similique libero!</p>

        </div>
        <div >
            <div className=' md:w-[70%] md:mx-auto px-8  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  rounded-xl  relative  gap-16 group '>
                {
                    CarListD.map((data) =>{
                        return(
                        <div 
                        data-aos = 'fade-up'
                        data-aos-delay = {data.asoDelay}
                        className='space-y-10  border-2 border-gray-300 hover:border-primary p-3 rounded-xl  w-full  ' >
                            <div className='w-full h-[120px]'  > <img src={data.image} className='w-full h-[120px] object-contain sm:translate-x-8 hover:translate-x-16 duration-700' /></div>
                            <div className='text-center space-y-2'>
                            <h1 className='text-center text-primary font-semibold'>{data.name}</h1>
                            <div className=' flex justify-between text-xl font-semibold items-center'>
                            <p>${data.price}/Day</p>
                            <a href="#">Details</a>
                            </div>
                            </div>
                            <p className='absolute top-0 h-full font-semibold' Style={{}}>12Km</p>
                           
                        </div>
                        );
                    })
                }
            </div>
            <div className='grid place-content-center mt-8'>
                <button
                data-aos='fade-up'
                 className='button-outline'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default CarList