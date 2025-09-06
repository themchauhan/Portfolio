import React from 'react';
import Link from 'next/link';

const IntroBlock = ({ title, linkText, link, bgColor, showButton = true}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {title}
          </h2>
          
          {showButton && (
            <div className="pt-4">
              <Link
                href={link}
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:from-blue-600 hover:to-purple-700 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <span>{linkText}</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Decorative Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default IntroBlock;
