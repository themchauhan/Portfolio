'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';
import Image from 'next/image';

const MyTeam = () => {
  return (
    <section className='myteam controlgallery bg-white text-black'>
     <div className='container'>
      <h4 className='font-bold text-center'>View Gallery</h4>
      <p className='mx-auto max-w-[920px] text-center my-5'>Step into our world of financial expertise, where every detail reflects our commitment to excellence. Explore our 
      modern CA office through photos and experience the essence of innovation and professionalism in every frame.</p>
      <Carousel
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false} >        
          <div>
           <Link href="/"><Image src="/office-2.jpeg" height="100" width="100" alt="team member" className="max-w-[900px] max-h-[350px] md:max-h-[500px] object-cover" /></Link>
         </div>
         <div>
           <Link href="/"><Image src="/office-3.webp" height="100" width="100" alt="team member" className="max-w-[900px] max-h-[350px] md:max-h-[500px] object-cover" /></Link>
         </div>
         <div>
            <Link href="/"><Image src="/office-2.jpeg" height="100" width="100" alt="team member" className="max-w-[900px] max-h-[350px] md:max-h-[500px] object-cover" /></Link>
         </div>
         <div>
           <Link href="/"><Image src="/office-3.webp" height="100" width="100" alt="team member" className="max-w-[900px] max-h-[350px] md:max-h-[500px] object-cover" /></Link>
         </div>
      </Carousel>

     </div>
    </section>
  );
};

export default MyTeam;
