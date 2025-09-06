// components/Banner.js
import React from 'react';
import Link from 'next/link';

const BannerSecond = ({ title, subtitle, linkUrl, linkText, showLink="true"}) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent text-sm font-semibold uppercase tracking-wider">
            🚀 Project Showcase
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          {showLink && linkUrl && (
            <div className="pt-6">
              <Link 
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:from-blue-600 hover:to-cyan-600 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300" 
                href={linkUrl}
              >
                <span>{linkText}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BannerSecond;
