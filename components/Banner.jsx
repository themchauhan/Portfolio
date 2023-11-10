import React from 'react';

const Banner = ({ title, paragraph }) => {
  return (
    <section className="bg-white py-10 text-black border-b-2">
      <div className="container mx-auto text-center">
        <h1 className="font-bold">{title}</h1>
        <p className="mt-4 pb-4">{paragraph}</p>
      </div>
    </section>
  );
};

export default Banner;