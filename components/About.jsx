import React from "react";

const About = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-4">
            👨‍💻 About Me
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate full-stack developer with 7+ years of experience creating modern, responsive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Full Stack Developer & Front-End Specialist
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                I am a dedicated web developer at 
                <a 
                  href="https://www.cleardigital.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 ml-1"
                >
                  Clear Digital
                </a>
                , where I specialize in creating engaging, user-centric digital solutions that drive business growth.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                With expertise in modern technologies like React, Next.js, Node.js, and AI integration, I help businesses transform their digital presence through innovative web applications.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100">
                <div className="text-3xl font-extrabold text-blue-600 mb-2">5+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-cyan-100">
                <div className="text-3xl font-extrabold text-cyan-600 mb-2">50+</div>
                <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Projects Completed</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <span>Let&apos;s Work Together</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Visual Elements */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-blue-100 max-w-sm">
                <div className="space-y-6">
                  {/* Profile Avatar */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">M</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">Manish Chauhan</h4>
                      <p className="text-gray-600">Full Stack Developer</p>
                    </div>
                  </div>

                  {/* Skills Tags */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Core Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">React</span>
                      <span className="px-3 py-1 bg-cyan-100 text-cyan-700 text-sm rounded-full font-medium">Next.js</span>
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium">Node.js</span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full font-medium">AI Integration</span>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="pt-4 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="text-white text-lg">🎓</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">M.C.A (Post Graduate)</p>
                        <p className="text-sm text-gray-600">Punjab Technical University</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl opacity-20 animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 -left-8 w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-400 rounded-xl opacity-20 animate-pulse delay-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
