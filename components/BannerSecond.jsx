// components/Banner.js
import React from 'react';
import Link from 'next/link';

const BannerSecond = ({ title, subtitle, link }) => {
  return (
    <section className="bg-white text-black text-center">
      <h1 className="font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{subtitle}</p>
      {/* <Link className="bg-[#5869a5] text-white px-4 py-2 rounded-full hover:bg-black ml-4" href={link.url}>
         {link.text}
      </Link> */}
    </section>
  );
};

export default BannerSecond;
