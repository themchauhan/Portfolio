import React from 'react'
import Image from 'next/image';

const Skill = () => {
  const skills = [
    { name: 'HTML5', icon: '/html5.svg', category: 'Frontend' },
    { name: 'CSS3', icon: '/css3.svg', category: 'Frontend' },
    { name: 'Sass', icon: '/sass.svg', category: 'Frontend' },
    { name: 'JavaScript', icon: '/js.svg', category: 'Frontend' },
    { name: 'Next.js', icon: '/next.svg', category: 'Framework' },
    { name: 'Bootstrap', icon: '/bootstrap.svg', category: 'Framework' },
    { name: 'Tailwind CSS', icon: '/tailwindcss-icon.svg', category: 'Framework' },
    { name: 'PHP', icon: '/php.svg', category: 'Backend' },
    { name: 'WordPress', icon: '/wordpress.svg', category: 'CMS' },
    { name: 'Git', icon: '/git.svg', category: 'Tools' },
    { name: 'Photoshop', icon: '/photoshop.svg', category: 'Design' }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      'Frontend': 'from-orange-500 to-pink-500',
      'Framework': 'from-pink-500 to-rose-500',
      'Backend': 'from-rose-500 to-orange-500',
      'CMS': 'from-orange-600 to-pink-600',
      'Tools': 'from-pink-600 to-rose-600',
      'Design': 'from-rose-500 to-pink-500'
    };
    return colors[category] || 'from-orange-500 to-pink-500';
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white via-orange-50 to-pink-50" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-4">
            🛠️ Technical Skills
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Skills & 
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What truly excites me about my work is the opportunity to utilize fantastic tools and resources on a daily basis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Category Badge */}
              <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getCategoryColor(skill.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                {skill.category}
              </div>
              
              {/* Skill Icon */}
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                  <Image 
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Skill Name */}
                <div className="text-center">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-100 to-pink-100 rounded-2xl p-8 border border-orange-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Always Learning & Growing</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              I&apos;m constantly exploring new technologies and frameworks to stay at the forefront of web development. 
              My passion for learning ensures that I can deliver the most modern and efficient solutions for your projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill