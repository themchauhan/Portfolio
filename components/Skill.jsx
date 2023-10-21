import React from 'react'
import Image from 'next/image';
import styles from 'app/style.module.css';

const Skill = () => {
  return (
    <section className={`${styles.about_bg} technical_skill`}>
    <div className="container">
        <div className='w-full text-center justify-center flex flex-wrap mb-12'>
            <h4 className='max-w-5xl mb-3 font-bold'>Skills And Expertise</h4>
            <p className='max-w-5xl'>What truly excites me about my work is the opportunity to utilize fantastic tools and resources on a daily basis.</p>
        </div>  

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
                <Image 
                src="/html5.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
              />
            </div>
            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image 
                src="/css3.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               />
            </div>
            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
              <Image 
                src="/sass.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               /> 
            </div>
            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
                <Image 
                    src="/js.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain'}} 
                />
            </div>


            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
              <Image 
                src="/next.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
              />
            </div>

            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image 
                src="/bootstrap.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
            />
            </div>
            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
            <Image 
                src="/tailwindcss-icon.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
            />
            </div>
            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
                <Image 
                    src="/php.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain'}} 
                />
            </div>

            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
                <Image 
                    src="/wordpress.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain'}} 
                />
            </div>

            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
                <Image 
                    src="/git.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain'}} 
                />
            </div>

            <div className="border p-4 flex flex-wrap justify-center min-h-[275px]">
                <Image 
                    src="/photoshop.svg"
                    alt="person"
                    width={100}
                    height={100}
                    style={{ objectFit: 'contain'}} 
                />
            </div>

      </div>
    </div>
</section>
  )
}

export default Skill