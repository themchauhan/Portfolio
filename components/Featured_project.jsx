"use client"
import Image from 'next/image';
import Link from 'next/link';

function MyProjects({ showButton = true }) {
  const projects = [
    {
      name: 'Socure',
      logo: '/soc_logo.svg',
      description: 'Identity verification platform with advanced fraud detection',
      technologies: ['HTML', 'SCSS', 'jQuery/JavaScript', 'PHP', 'WordPress', 'Marketo'],
      category: 'Enterprise'
    },
    {
      name: 'Digimarc',
      logo: '/Digimarc_Logo_Grey-1.svg',
      description: 'Digital watermarking and brand protection solutions',
      technologies: ['HTML', 'SCSS', 'jQuery/JavaScript', 'Drupal', 'HubSpot'],
      category: 'B2B'
    },
    {
      name: 'ClearDigital',
      logo: '/clear_logo.svg',
      description: 'Digital agency website with modern design and functionality',
      technologies: ['HTML', 'SCSS', 'jQuery/JavaScript', 'PHP', 'WordPress', 'GravityForm'],
      category: 'Agency'
    },
    {
      name: 'Estimatic',
      logo: '/Estimatic_Logo.svg',
      description: 'Construction estimation platform with real-time calculations',
      technologies: ['ReactJS', 'MaterialUI', 'Redux', 'Firebase'],
      category: 'SaaS'
    }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Enterprise': 'from-orange-500 to-pink-500',
      'B2B': 'from-pink-500 to-rose-500',
      'Agency': 'from-rose-500 to-orange-500',
      'SaaS': 'from-orange-600 to-pink-600'
    };
    return colors[category] || 'from-orange-500 to-pink-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-100 via-pink-100 to-rose-100" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-4">
            🚀 Featured Work
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Code 
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Creations
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Dive into a showcase of my skills through various projects. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-2 border border-orange-200 shadow-lg hover:shadow-xl"
            >
              {/* Category Badge */}
              <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(project.category)}`}>
                {project.category}
              </div>

              {/* Project Logo */}
              <div className="mb-6">
                <div className="w-full h-32 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl flex items-center justify-center p-4 group-hover:from-orange-100 group-hover:to-pink-100 transition-colors duration-300 border border-orange-200">
                  <Image 
                    src={project.logo}
                    alt={project.name}
                    width={120}
                    height={80}
                    className="object-contain max-h-20 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">
                  {project.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="space-y-2">
                  <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide">
                    Technologies Used:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full border border-orange-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {showButton && (
          <div className="text-center">
            <Link 
              href="/projects" 
              className="group inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-orange-600 hover:to-pink-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <span>View All Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export default MyProjects;
