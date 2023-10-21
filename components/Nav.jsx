"use client"

import { useState } from "react";
import Link from 'next/link'
import Image from 'next/image'


const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 bg-white py-4 shadow-md z-20">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="site Logo"
            width={85}
            height={85}
            priority
            className="mr-2"
          />
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
            <li>
              <Link href="/skills" className="text-black hover:text-blue-600">
                Skills
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-black hover:text-blue-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/learnings" className="text-black hover:text-blue-600">
                Learnings
              </Link>
            </li>
            <li>
              <Link href="/academics" className="text-black hover:text-blue-600">
                Academics
              </Link>
            </li>
          </ul>
          <button className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black ml-4">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
