import React from 'react';
import styles from 'app/style.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <section className='about shadow-md bg-white text-black border-b-2' id="about">
        <div className="container md:flex items-center ">
            <div className='sm:flex-none md:flex-1 md:flex-wrap col-6 place-content-center md:pr-4 md:max-w-[650px]'>
                <h4 className='md:max-w-3xl text-4xl lg:text-5xl font-extrabold uppercase md:leading-tight'>Mastering Financial Landscapes: My Expertise as a CA</h4>
            </div>
            <div className='flex md:flex-1 flex-wrap col-6 w-full justify-center pt-5 md:pt-0 lg:pl-4 md:max-w-[600px]'>
            <p className='text-base md:text-lg'> As a Chartered Accountant (CA), I bring a wealth of financial expertise and a commitment to ethical practices to every 
            financial challenge I encounter. My professional journey is guided by a passion for numbers, a dedication to compliance, and a drive to facilitate financial 
            success for individuals and organizations alike.</p>
            </div>
        </div>
    </section>
  )
}

export default About;