'use client'
import React from 'react'

const Intro_block = () => {
  const scrollToSection = (sectionID) =>{
    const section = document.getElementById(sectionID);
    if(section){
      window.scrollTo({
       top: section.offsetTop,
       behavior: 'smooth',
      });
    }
  }
  return (
    <section className="intro_block bg-[#5869a5]">
        <div className="container">
           <div className='flex flex-wrap w-full justify-center'>
            <h4 className='text-white  text-center max-w-6xl w-full font-bold'>Let's connect and discuss how I can assist you in achieving your financial and business goals. I am here to simplify the complexities of finance and provide you with the expertise you need to thrive in today's economic landscape.</h4>
          </div>
          <div className='btn-wrap flex justify-center mt-7'>
          <button className="bg-[#fff] text-[#5869a5] px-6 py-3 rounded-full hover:bg-black hover:text-white ml-4" onClick={()=> scrollToSection('contact')}>Contact Me</button>
          </div>
        </div>
    </section>
  )
}

export default Intro_block