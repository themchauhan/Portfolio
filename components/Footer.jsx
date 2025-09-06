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
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image 
                src="/logo.png"
                alt="Manish Chauhan Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Manish Chauhan
                </h3>
                <p className="text-gray-400 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Need a website? I am a web designer and developer that can help bring your ideas into a reality. 
              Let&apos;s create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  About
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Skills
                </button>
              </li>
              <li>
                <Link 
                  href="/projects" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  href="/contacts" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/blog" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/comingsoon" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="/academics" 
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200 flex items-center group"
                >
                  <span className="w-0 h-0.5 bg-blue-400 transition-all duration-200 group-hover:w-4 mr-0 group-hover:mr-2"></span>
                  Academics
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>Copyright &copy; {new Date().getFullYear()} Manish Chauhan. All Rights Reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="https://www.instagram.com/myself_manish_chauhan" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 group"
              >
                <Image 
                  src="/instagram.svg" 
                  width={20} 
                  height={20} 
                  alt="Instagram"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/themchauhan" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group"
              >
                <Image 
                  src="/linkdin.svg" 
                  width={20} 
                  height={20} 
                  alt="LinkedIn"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link 
                href="https://www.roblox.com/users/4118461447/profile" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-500/20 transition-all duration-300 group"
              >
                <Image 
                  src="/Roblox_player.svg" 
                  width={20} 
                  height={20} 
                  alt="Roblox"
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer