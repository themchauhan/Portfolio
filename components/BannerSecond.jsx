// components/Banner.js
import React from 'react';
import Link from 'next/link';

const BannerSecond = ({ title, subtitle, linkUrl, linkText, showLink="true"}) => {
  return (
    <section className="bg-white text-black text-center">
      <div className='container'>
      <h1 className="font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{subtitle}</p>
      {showLink && linkUrl &&  (
       <Link className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black ml-4" href={linkUrl}>
         {linkText}
      </Link> 
      )}
      </div>
    </section>
  );
};

export default BannerSecond;
