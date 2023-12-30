import React from 'react'
import styles from '../app/style.css';
const Hero = () => {
  return (
    <section className="hero-banner">
        <div className="container">
            <div className='flex flex-wrap col-6 z-10 relative'>
                 <span className="text-[#f04e3c] text-sm md:text-3xl md:mb-4">Portfolio</span>
                <h1 className='text-white'>Manish Chauhan</h1>
                <h5>Web Developer</h5>
            </div>
        </div>
    </section>
  )
}

export default Hero