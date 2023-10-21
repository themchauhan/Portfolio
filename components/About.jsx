import React from 'react';
import Image from 'next/image'
import styles from 'app/style.module.css';

const About = () => {
  return (
    <section className={`${styles.about_bg} about`}>
        <div className="container md:flex items-center">
            <div className='sm:flex-none md:flex-1 md:flex-wrap col-6 place-content-center md:pr-4 md:max-w-[650px]'>
                <h4 className='md:max-w-3xl text-4xl lg:text-5xl font-extrabold uppercase md:leading-tight'>Crafting User Interfaces: My Expertise</h4>
                
            </div>
            <div className='flex md:flex-1 flex-wrap col-6 w-full justify-center pt-5 md:pt-0 lg:pl-4 md:max-w-[500px]'>
            <p className='text-base md:text-lg'>I'm a web developer at <span className='text-[#5869a5]'>GreenSparrow Solutions</span>, where I indulge in the art of web design, striving to deliver engaging and user-centric digital solutions.</p>
                <p className='flex items-center pt-5 uppercase font-medium'><span className='text-6xl font-bold pr-4 '>5+</span> <span className='text-base'>years <br/> of Digital Experience</span></p>
               {/* <Image 
                 src="/wire.png"
                 alt="person"
                 width={400}
                 height={400}
                 
               className='object-contain sm:object-cover'/> */}
            </div>
        </div>
    </section>
  )
}

export default About;