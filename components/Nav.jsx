"use client"

import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';



const Nav = () => {
    const [isHomePage, setIsHomePage] = useState(false);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      // Check if the current page is the homepage
      setIsHomePage(window.location.pathname === '/');
  
      // Add event listener to handle changes in the URL
      const handleRouteChange = () => {
        setIsHomePage(window.location.pathname === '/');
      };
  
      // Subscribe to the router's route change events
      window.addEventListener('popstate', handleRouteChange);
  
      // Cleanup the event listener on component unmount
      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }, []);

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
        <div className={`md:flex items-center ${ isMenuOpen ? "visible_menu" : "hidden"} md:block ${isHomePage ? 'visible_menu' : 'hidden'}`}>
        {isHomePage ? (
            <ul className={`flex space-x-4`}>
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
              <li>
                <Link className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black md:ml-4" href="/contacts">Contact Me</Link>
              </li>
            </ul>
          ) : (
            <ul className={`flex space-x-4`}>
              <li>
                <Link href="/about" className="text-black hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-black hover:text-blue-600">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-black hover:text-blue-600">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-black hover:text-blue-600">
                  Academics
                </Link>
              </li>
              <li>
                <Link className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black ml-4" href="/contacts">Contact Me</Link>
              </li>
            </ul>
            )}
          
        </div>
      </div>
    </nav>
  )
}

export default Nav
