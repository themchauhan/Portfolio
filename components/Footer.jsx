"use client"
import React from 'react'
import Image from 'next/image'
const Footer = () => {
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
<footer className="py-8">
  <div className="container mx-auto flex flex-wrap justify-between gap-4">
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <div className="flex items-center">
        <Image 
                    src="/CA-white.svg"
                    alt="logo"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain'}} 
                    className="h-10" 
                  />
      </div>
      <p className="mt-3 text-sm">Looking for financial solutions? I'm a Chartered Accountant with the expertise to turn your financial goals into reality.</p>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
      <ul>
        <li className='cursor-pointer' onClick={()=> scrollToSection('about')}>About</li>
        <li className='cursor-pointer' onClick={()=> scrollToSection('skills')}>Skills</li>
        <li className='cursor-pointer' onClick={()=> scrollToSection('featured')}>Projects</li>
        <li className='cursor-pointer' onClick={()=> scrollToSection('contact')}>Contact</li>
      </ul>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <h2 className="text-lg font-semibold mb-2">Resources</h2>
      <ul>
        <li><a href="#">Blog</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
    </div>


  <div className="flex flex-wrap justify-between items-center mt-20 w-full">
    <div className="copyright flex my-5">
        <p className='text-sm'>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
    <div className="social links flex flex-wrap m-5">
    <a href="#" className="text-2xl mx-4"><Image src="/facebook.svg" width={20} height={20} alt="fb"/></a>
    <a href="#" className="text-2xl mx-4"><Image src="/instagram.svg" width={20} height={20} alt="fb"/></a>
    </div>
  </div>
  </div>
</footer>
  )
}

export default Footer