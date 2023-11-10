'use client'
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const MyCarousel = () => {
  return (
    <section className='testimonial controldots'>
     <div className='container'>
      <h4 className='font-bold text-center'>Testimonial Experiences</h4>
      <Carousel showArrows={false} showThumbs={false} showStatus={false} className='max-w-[975px] mx-auto'>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore corporis consectetur incidunt, ipsa voluptate quidem temporibus autem quia dolor laboriosam quo iste suscipit eveniet amet voluptatibus accusamus fugiat architecto. In.</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni vero facilis necessitatibus itaque commodi quam accusantium placeat sapiente provident beatae eveniet deserunt eligendi animi reiciendis dolore atque ea, ut temporibus! 2</p>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis excepturi doloribus ratione ducimus, officiis vel sed, aut, suscipit numquam natus illum quasi ipsum quibusdam iure molestiae. Doloribus iusto nemo consequatur! 3</p>
        </div>
      </Carousel>

     </div>
    </section>
  );
};

export default MyCarousel;
