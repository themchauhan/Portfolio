"use client"
import Image from 'next/image';
import Link from 'next/link';

function MyProjects({ showButton = true }) {
  return (
    <section className="featured-block bg-[#5869a5]" id="featured">
    <div className="container">
     <div className="md:flex flex-wrap mb-5 divide-x divide-white">  
      <div className="col-6 w-full md:w-6/12">
         <h3>Code Creations</h3>
         <p className="pt-3">Dive into a showcase of my skills through various projects.</p>
      </div>
      </div>
          <div className="mx-auto mt-16">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white p-4 rounded-lg shadow-md">
                   <Image 
                    src="/soc_logo.svg"
                    alt="Socure"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 border-b-2" 
                  />
                  <h2 className="text-xl font-semibold text-black mb-4">Socure</h2>
                  <p className="text-gray-600">Technology Used: Html, Scss, Jquery/Jacascript, PHP, Wordpress, Marketo</p>
              </div>
  
              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Digimarc_Logo_Grey-1.svg"
                    alt="Digimarc"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Digimarc</h2>
                  <p className="text-gray-600">Technology Used: Html, Scss, Jquery/Javascript, Drupal, Hubspot</p>
              </div>


              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/clear_logo.svg"
                    alt="ClearDigital"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">ClearDigital</h2>
                  <p className="text-gray-600">Technology Used: Html, Scss, Jquery/Javascript, PHP, Wordrpress, GravityForm</p>
              </div>
  
              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Estimatic_Logo.svg"
                    alt="Estimatic"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Estimatic</h2>
                  <p className="text-gray-600">Technology Used: ReactJS, MaterialUI, Redux, Firebase</p>
              </div>
          </div>
          {showButton && (
              <div className="btn-wrap flex justify-center mt-12 w-full">
                <Link href="/projects" className="bg-[#fff] text-[#5869a5] px-6 py-3 rounded-full hover:bg-black hover:text-white ml-4">View All Projects</Link>
              </div>
           )}
       </div>
    </div>
    </section>
  );
}

export default MyProjects;
