import React from 'react';
import Image from 'next/image';
import styles from 'app/style.module.css';

const Dev_process = () => {
  return (
    <section className='dev_process bg-white text-black' id="dev_process">
    <div className="container">
        <div className='w-full text-center justify-center flex flex-wrap mb-12'>
            <h4 className='max-w-5xl font-bold'>I breathe life into financial strategies through expert insights and precise execution, helping clients navigate the intricate realm of finance with confidence and success.</h4>
        </div>  
        <div className='flex flex-wrap w-full'>
            <div className='w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4'>
                <Image 
                src="/design.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
            />
               <h5 className='pt-6 pb-3 font-bold'>Professional Excellence</h5>
               <p className='text-sm'>As a member of the prestigious Institute of Chartered Accountants of India (ICAI), I adhere to the highest standards of professional ethics and quality. My in-depth knowledge of accounting, taxation, and auditing allows me to deliver accurate and timely financial solutions.</p>
            </div> 
            <div className='w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4'>
                <Image 
                src="/development.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               />
               <h5 className='pt-6 pb-3 font-bold'>Strategic Financial Advisory</h5>
               <p className='text-sm'>I am more than just a number cruncher. I partner with my clients to understand their financial goals and challenges, providing strategic insights and financial planning to optimize their financial well-being. Whether it's tax optimization, investment strategies, or business growth plans, I am here to guide you.</p>
            </div> 
            <div className='w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4'>
               <Image 
                src="/qa.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               />
               <h5 className='pt-6 pb-3 font-bold'>Audit Expertise</h5>
               <p className='text-sm'>With a keen eye for detail, I conduct meticulous audits to provide an unbiased assessment of financial statements. My goal is to enhance transparency, reliability, and accountability in financial reporting.</p>
            </div> 
            <div className='w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4 pt-8'>
               <Image 
                src="/qa.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               />
               <h5 className='pt-6 pb-3 font-bold'>Compliance and Integrity</h5>
               <p className='text-sm'>Ensuring compliance with the ever-evolving regulatory framework is a cornerstone of my practice. I help clients navigate the complexities of tax laws and financial regulations, ensuring they meet their obligations while minimizing risks.</p>
            </div> 
            <div className='w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4 pt-8'>
               <Image 
                src="/qa.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               />
               <h5 className='pt-6 pb-3 font-bold'>Business Growth</h5>
               <p className='text-sm'>I actively contribute to the growth and success of businesses by offering insights into financial efficiency, cost management, and risk assessment. My services empower companies to make informed decisions that drive profitability.</p>
            </div> 
            <div className='w-full sm:w-6/12 md:w-4/12 flex flex-wrap  justify-center text-center px-4 pt-8'>
               <Image 
                src="/qa.svg"
                alt="person"
                width={100}
                height={100}
                style={{ objectFit: 'contain'}} 
               />
               <h5 className='pt-6 pb-3 font-bold'>Personalized Service</h5>
               <p className='text-sm'>Every client is unique, and I believe in providing personalized solutions tailored to your specific needs. Your financial success is my top priority.</p>
            </div> 
        </div>
    </div>
</section>
  )
}

export default Dev_process;