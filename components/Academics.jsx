
import React from 'react';

const Academics = () => {
  const academicDetails = [
    {
        degree: 'Masters of Computer Application',
        institution: 'Punjab Technical University',
        year: '2016 - 2018',
        level: 'Post Graduate',
        icon: '🎓',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'from-blue-50 to-cyan-50',
        borderColor: 'border-blue-200'
    },
    {
      degree: 'Bachelor of Information Technology (Hons.)',
      institution: 'Kurukshetra University Kurukshetra',
      year: '2013 - 2016',
      level: 'Graduate',
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
    {
      degree: 'Higher Secondary School',
      institution: 'Kendriya Vidyalaya',
      year: '2012 - 2013',
      level: '12th Grade',
      icon: '📖',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200'
    },
    {
        degree: 'Secondary School',
        institution: 'Kendriya Vidyalaya',
        year: '2010 - 2011',
        level: '10th Grade',
        icon: '📝',
        color: 'from-orange-500 to-red-500',
        bgColor: 'from-orange-50 to-red-50',
        borderColor: 'border-orange-200'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" id="academics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-4">
            🎓 Academic Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6">
            Educational
            <span className="block bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive academic foundation that has shaped my expertise in computer science and technology.
          </p>
        </div>

        {/* Academic Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-cyan-200 to-indigo-200 rounded-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {academicDetails.map((academic, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`bg-gradient-to-br ${academic.bgColor} backdrop-blur-sm rounded-2xl p-8 shadow-xl border ${academic.borderColor} hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}>
                    <div className="flex items-start space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${academic.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                        <span className="text-2xl">{academic.icon}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 bg-gradient-to-r ${academic.color} text-white text-xs font-semibold rounded-full`}>
                            {academic.level}
                          </span>
                          <span className="text-sm text-gray-500 font-medium">{academic.year}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 leading-tight">
                          {academic.degree}
                        </h3>
                        <p className="text-gray-600 font-medium">
                          {academic.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border-4 border-blue-200 z-10">
                  <div className={`w-6 h-6 bg-gradient-to-br ${academic.color} rounded-full`}></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Stats */}
        <div className="mt-20">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">Academic Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">7+</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Years of Study</h4>
                <p className="text-gray-600 text-sm">Comprehensive computer science education</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">4</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Academic Levels</h4>
                <p className="text-gray-600 text-sm">From secondary to post-graduate</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">100%</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Success Rate</h4>
                <p className="text-gray-600 text-sm">Consistent academic excellence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Learn More?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              My academic foundation has equipped me with the knowledge and skills to deliver exceptional web development solutions.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <span>Let&apos;s Discuss Your Project</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics;
