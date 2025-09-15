import React from "react";

const Hero = () => {
  return (
    <section
      className="hero-banner relative bg-cover bg-center bg-no-repeat text-white py-20"
      style={{ backgroundImage: "url('/hero-bg.webp')" }}
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Content */}
        <div className="max-w-xl space-y-6 z-10">
          <span className="text-cyan-300 text-sm md:text-lg font-medium uppercase tracking-wide">
            Professional Web Developer
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Manish Chauhan
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cyan-100">
            Full Stack Web Developer | Freelance Web Designer
          </h2>

          <p className="text-base md:text-lg text-gray-200">
            Professional web developer with 7+ years of experience creating custom websites, 
            web applications, and digital solutions for businesses worldwide. 
            Specializing in React, Next.js, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex space-x-4 pt-4">
            <a
              href="#featured"
              className="px-6 py-3 rounded-xl font-semibold shadow-lg 
                         bg-gradient-to-r from-cyan-400 to-blue-500 text-blue-900 
                         hover:from-cyan-300 hover:to-blue-400 
                         transform hover:-translate-y-1 hover:scale-105 
                         transition-all duration-300 ease-in-out"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold shadow-lg 
                         bg-white text-blue-900 
                         hover:bg-gray-100 
                         transform hover:-translate-y-1 hover:scale-105 
                         transition-all duration-300 ease-in-out"
            >
              Let’s Talk
            </a>
          </div>
        </div>
      </div>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-cyan-700/30"></div>
    </section>
  );
};

export default Hero;
