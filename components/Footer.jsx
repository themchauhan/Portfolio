import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
<footer className="bg-gray-900 text-white py-8">
  <div className="container mx-auto flex flex-wrap justify-between gap-4">
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className=" h-10" />
      </div>
      <p className="mt-2 text-sm">Need a website? I am a local web designer and developer that can help bring your ideas into a reality.</p>
    </div>

    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4">
      <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
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