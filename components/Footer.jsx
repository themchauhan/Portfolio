"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
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
<footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between gap-4">
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <div className="flex items-center">
        <Image 
                    src="/logo.png"
                    alt="logo"
                    width={80}
                    height={80}
                    style={{ objectFit: 'contain'}} 
                    className="h-10" 
                  />
      </div>
      <p className="mt-2 text-sm">Need a website? I am a web designer and developer that can help bring your ideas into a reality.</p>
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
      <ul className='text-[#fff]'>
        <li><Link href="#" className='text-[#fff] hover:text-[#5869a5]'>Blog</Link></li>
        <li><Link href="#" className='text-[#fff] hover:text-[#5869a5]'>FAQ</Link></li>
        <li><Link href="#" className='text-[#fff] hover:text-[#5869a5]'>Support</Link></li>
        <li><Link href="#" className='text-[#fff] hover:text-[#5869a5]' >Privacy Policy</Link></li>
      </ul>
    </div>


  <div className="flex flex-wrap justify-between items-center mt-20 w-full">
    <div className="copyright flex my-5">
        <p className='text-sm'>Copyright &copy; {new Date().getFullYear()} All Rights Reserved.</p>
    </div>
    <div className="social links flex flex-wrap m-5">
    <Link href="#" className="text-2xl mx-4"><Image src="/facebook.svg" width={20} height={20} alt="fb"/></Link>
    <Link href="#" className="text-2xl mx-4"><Image src="/instagram.svg" width={20} height={20} alt="fb"/></Link>
    </div>
  </div>
  </div>
</footer>
  )
}

export default Footer