import React from 'react'
import { BiSolidMoon, BiSolidSun } from 'react-icons/bi'


const NavLinks = [
    {
        id :'1',
        name: 'HOME',
        link : '/#'
    },
    {
        id : 2,
        name: 'CARS',
        link : '/cars'
    },
    {
        id : 3,
        name: 'ABOUT',
        link : '/#about'
    },
    {
        id : 4,
        name: 'BOOKING',
        link : '/#booking'
    },
]

function Navbar({theme, setTheme}) {
  return (
   <nav className='shadow-md bg-white dark:bg-dark
    dark:text-white duration-300'>
    <div class='container'>
        <div className="flex justify-between items-center">
           <div>
            <h1 className='font-bold text-3xl font-serif'
            >CAR RENTAL</h1>
            </div>
            <div className='hidden md:block'>
                <ul className='flex gap-8 items-center'>
                    {
                        NavLinks.map((data)=>(
                            <li key={data.id} className='py-4'><a className=' py-2 hover:border-b-2 hover:border-primary hover:text-primary transition-colors duration-500 text-lg font-medium' href={data.link}>{data.name}</a></li>
                        ))
                    }
                </ul>
            </div> 
            <div>
                {
                    theme === 'dark'? (<BiSolidSun onClick={()=>setTheme('light')} className='text-zxl'/> )
                    :(<BiSolidMoon onClick={()=>setTheme('dark')} className='text-zxl'/> )
                } 
            </div>
        </div>
    </div>
   </nav>
  )
}

export default Navbar