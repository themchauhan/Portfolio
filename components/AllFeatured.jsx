"use client"
import Image from 'next/image';
import Link from 'next/link';

function MyProjects({ showButton = true }) {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-blue-50" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-4">
            💼 Portfolio Projects
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Code 
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive into a showcase of my skills through various projects. Each project represents a unique challenge and solution.
          </p>
      </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Project Card 1 - Socure */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex items-center justify-center p-4 border border-blue-100 group-hover:from-blue-100 group-hover:to-cyan-100 transition-colors duration-300">
                   <Image 
                    src="/Socure.svg"
                    alt="Socure"
                  width={120}
                  height={80}
                  className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">Socure</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-blue-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">PHP</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">WordPress</span>
              </div>
            </div>
              </div>
  
          {/* Project Card 2 - Digimarc */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl flex items-center justify-center p-4 border border-cyan-100 group-hover:from-cyan-100 group-hover:to-blue-100 transition-colors duration-300">
              <Image 
                    src="/Digimarc_Logo_Grey-1.svg"
                    alt="Digimarc"
                  width={120}
                  height={80}
                  className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">Digimarc</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-cyan-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">Drupal</span>
                <span className="px-2 py-1 bg-cyan-100 text-cyan-700 text-xs rounded-full">HubSpot</span>
              </div>
            </div>
              </div>

          {/* Project Card 3 - ClearDigital */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl flex items-center justify-center p-4 border border-indigo-100 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors duration-300">
              <Image 
                    src="/clear_logo.svg"
                    alt="ClearDigital"
                  width={120}
                  height={80}
                  className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-indigo-600 transition-colors duration-300">ClearDigital</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">JavaScript</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">PHP</span>
                <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">WordPress</span>
              </div>
            </div>
              </div>
  
          {/* Project Card 4 - Estimatic */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl flex items-center justify-center p-4 border border-purple-100 group-hover:from-purple-100 group-hover:to-pink-100 transition-colors duration-300">
              <Image 
                    src="/Estimatic_Logo.svg"
                    alt="Estimatic"
                  width={120}
                  height={80}
                  className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">Estimatic</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">ReactJS</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">MaterialUI</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Redux</span>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Firebase</span>
              </div>
            </div>
              </div>

          {/* Additional Project Cards */}
          {/* Splunk */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl flex items-center justify-center p-4 border border-green-100 group-hover:from-green-100 group-hover:to-emerald-100 transition-colors duration-300">
                <Image src="/Splunk_Logo_Grey-1.svg" alt="Splunk" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">Splunk</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-green-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">AEM</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Aternity */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl flex items-center justify-center p-4 border border-orange-100 group-hover:from-orange-100 group-hover:to-red-100 transition-colors duration-300">
                <Image src="/Aternity_Logo_Grey.svg" alt="Aternity" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">Aternity</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-orange-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">WordPress</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Hoover */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl flex items-center justify-center p-4 border border-teal-100 group-hover:from-teal-100 group-hover:to-cyan-100 transition-colors duration-300">
                <Image src="/Hoover_Logo_White.svg" alt="Hoover" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-teal-600 transition-colors duration-300">Hoover</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-teal-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">Drupal</span>
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* TRS Rentelco */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl flex items-center justify-center p-4 border border-rose-100 group-hover:from-rose-100 group-hover:to-pink-100 transition-colors duration-300">
                <Image src="/McGrath_Logo_Grey.svg" alt="TRS" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-rose-600 transition-colors duration-300">TRS Rentelco</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-rose-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">Drupal</span>
                <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-rose-100 text-rose-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Heat And Control */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl flex items-center justify-center p-4 border border-yellow-100 group-hover:from-yellow-100 group-hover:to-orange-100 transition-colors duration-300">
                <Image src="/Heat-Control-white-Logo.svg" alt="Heat and control" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">Heat And Control</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-yellow-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">Drupal</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Kount */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl flex items-center justify-center p-4 border border-violet-100 group-hover:from-violet-100 group-hover:to-purple-100 transition-colors duration-300">
                <Image src="/Kount_Logo.svg" alt="Kount" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-violet-600 transition-colors duration-300">Kount</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-violet-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">WordPress</span>
                <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-violet-100 text-violet-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Cohesity */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl flex items-center justify-center p-4 border border-sky-100 group-hover:from-sky-100 group-hover:to-blue-100 transition-colors duration-300">
                <Image src="/Cohesity_Logo_Grey-1.svg" alt="Cohesity" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-sky-600 transition-colors duration-300">Cohesity</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-sky-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">WordPress</span>
                <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Agari */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl flex items-center justify-center p-4 border border-emerald-100 group-hover:from-emerald-100 group-hover:to-green-100 transition-colors duration-300">
                <Image src="/Agari_Logo-1.svg" alt="Agari" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">Agari</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-emerald-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">WordPress</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Hippo */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-fuchsia-50 to-pink-50 rounded-xl flex items-center justify-center p-4 border border-fuchsia-100 group-hover:from-fuchsia-100 group-hover:to-pink-100 transition-colors duration-300">
                <Image src="/Hippo_Logo_Grey.svg" alt="Hippo" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-fuchsia-600 transition-colors duration-300">Hippo</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-fuchsia-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs rounded-full">Drupal</span>
                <span className="px-2 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
              </div>

          {/* Weka */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-lime-50 to-green-50 rounded-xl flex items-center justify-center p-4 border border-lime-100 group-hover:from-lime-100 group-hover:to-green-100 transition-colors duration-300">
                <Image src="/Weka-Grey-Logo-1.svg" alt="Weka" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-lime-600 transition-colors duration-300">Weka</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-lime-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded-full">WordPress</span>
                <span className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-lime-100 text-lime-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
          </div>
          
          {/* Carbon Black */}
          <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-2">
            <div className="mb-6">
              <div className="w-full h-32 bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl flex items-center justify-center p-4 border border-gray-100 group-hover:from-gray-100 group-hover:to-slate-100 transition-colors duration-300">
                <Image src="/Carbon-Black-Grey-Logo.svg" alt="Carbonblack" width={120} height={80} className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors duration-300">Carbon Black</h3>
            <div className="space-y-2">
              <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Technologies:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">WordPress</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">HTML</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">SCSS</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">JavaScript</span>
              </div>
            </div>
          </div>
       </div>
    </div>
    </section>
  );
}

export default MyProjects;