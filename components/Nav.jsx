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
    <nav className="sticky top-0 bg-white/90 backdrop-blur-md py-4 shadow-lg z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" aria-label="homepage" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="Manish Chauhan Logo"
                width={60}
                height={60}
                priority
                className="rounded-full border-2 border-orange-200"
              />
              <span className="text-gray-800 text-xl font-bold hidden sm:block bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">Manish Chauhan</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
                >
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </button>
                <button 
                  onClick={() => scrollToSection('featured')}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group"
                >
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </button>
                <Link href="/academics" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  Academics
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link 
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
                  href="/contacts"
                >
                  Contact Me
                </Link>
              </>
            ) : (
              <>
                <Link href="/about" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/#skills" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/projects" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/academics" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  Academics
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link href="/blog" className="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 relative group">
                  Blog
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
                <Link 
                  className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" 
                  href="/contacts"
                >
                  Contact Me
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-orange-200">
            <div className="pt-4 space-y-3">
              {isHomePage ? (
                <>
                  <Link 
                    href="/about" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                  <button 
                    onClick={() => {
                      scrollToSection('skills');
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                  >
                    Skills
                  </button>
                  <button 
                    onClick={() => {
                      scrollToSection('featured');
                      setMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                  >
                    Projects
                  </button>
                  <Link 
                    href="/academics" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Academics
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    className="block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium text-center mt-4" 
                    href="/contacts"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Me
                  </Link>
                </>
              ) : (
                <>
                  <Link 
                    href="/about" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/#skills" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Skills
                  </Link>
                  <Link 
                    href="/projects" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Projects
                  </Link>
                  <Link 
                    href="/academics" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Academics
                  </Link>
                  <Link 
                    href="/blog" 
                    className="block text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200 py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    Blog
                  </Link>
                  <Link 
                    className="block bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full hover:from-orange-600 hover:to-pink-600 transition-all duration-200 font-medium text-center mt-4" 
                    href="/contacts"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact Me
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Nav
