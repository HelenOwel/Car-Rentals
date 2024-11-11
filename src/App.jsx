import React, {useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service' 
import CarList from './components/CarList'
import Testimonial from './components/Testimonial'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme, setTheme, ] = useState(
    localStorage.getItem('theme')? localStorage.getItem('theme'):'light'
  );

const element = document.documentElement;
useEffect(()=>{
  if(theme === 'dark'){
    element.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }else{
    element.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
},[theme])

// AOS Initialization
useEffect(()=>{
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,
  });
  AOS.refresh();
},[])

  return (
    <div>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero theme={theme}/>
      <About theme={theme}/>
      <Service/>
      <CarList/>
      <Testimonial/>
    </div>
  )
}

export default App
