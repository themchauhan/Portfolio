"use client"

import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'


const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
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
    <nav className="sticky top-0 bg-white py-4 shadow-md z-20">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" aria-label="homepage">
          <Image
            src="/logo.png"
            alt="site Logo"
            width={85}
            height={85}
            priority
            className="mr-2"
          />
          </Link>
          <span className="text-white text-xl font-semibold">Your Logo</span>
        </div>
        <div className="md:hidden">
          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="block text-3xl text-black hover:text-blue-600 focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div
          className={`md:flex items-center ${
            isMenuOpen ? "visible_menu" : "hidden"
          } md:block`}
        >
          <ul className="flex space-x-4">
            <li>
              <Link href="/about" className="text-black hover:text-blue-600">
                About
              </Link>
            </li>
            <li className="text-black hover:text-blue-600 cursor-pointer" onClick={()=> scrollToSection('skills')}>
                Skills
            </li>
            <li className="text-black hover:text-blue-600 cursor-pointer" onClick={()=> scrollToSection('featured')}>
                Projects
            </li>
            <li>
              <Link href="/academics" className="text-black hover:text-blue-600">
                Academics
              </Link>
            </li>
          </ul>
          <button className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black ml-4" onClick={()=> scrollToSection('featured')}>
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
