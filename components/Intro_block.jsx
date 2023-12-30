import React from 'react';
import Link from 'next/link';
const IntroBlock = ({ title, linkText, link, bgColor, showButton = true}) => {
  const sectionStyle = {
    backgroundColor: bgColor || '#5869a5', // Default color if bgColor is not provided
  };
  return (
    <section className="intro_block" style={sectionStyle}>
      <div className="container">
        <div className='flex flex-wrap w-full justify-center'>
          <h4 className='text-white text-center max-w-6xl w-full font-bold'>{title}</h4>
        </div>
        {showButton && (
        <div className='btn-wrap flex justify-center mt-7'>
          <Link
            className="bg-[#fff] text-[#5869a5] px-6 py-3 rounded-full hover:bg-black hover:text-white ml-4"
            href={link}
          >
            {linkText}
          </Link>
        </div>
        )}
      </div>
    </section>
  );
};

export default IntroBlock;
