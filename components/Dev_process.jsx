import React from 'react';
import Image from 'next/image';

const Dev_process = () => {
  const processes = [
    {
      icon: '/design.svg',
      title: 'Design',
      description: 'At this point, our primary focus is to articulate the message you wish to convey. We\'ll now move on to defining the visual style of your website.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '/development.svg',
      title: 'Development',
      description: 'This marks a pivotal phase in the development process, where the design from the previous stage transforms into a fully functional website that seamlessly operates on various browsers and devices.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '/qa.svg',
      title: 'Quality Assurance',
      description: 'This phase is dedicated to conducting essential tests, such as assessing website speed and ensuring cross-browser compatibility, to ensure your website is fully prepared for its launch.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider mb-4">
            My Process
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Development 
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            I bring user interfaces to life through a balanced fusion of design craftsmanship and technical implementation.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              {/* Step Number */}
              <div className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Image 
                    src={process.icon}
                    alt={process.title}
                    width={50}
                    height={50}
                    className="object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${process.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Why This Process Works</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Each step in my development process is carefully designed to ensure your project meets the highest standards of quality, 
              performance, and user experience. From initial concept to final deployment, I maintain clear communication and deliver results that exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dev_process