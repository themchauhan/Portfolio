"use client"
import Image from 'next/image';
import Link from 'next/link';

function MyProjects({ showButton = true }) {
  return (
    <section className="featured-block bg-[#5869a5]" id="featured">
    <div className="container">
     <div className="md:flex flex-wrap mb-5 divide-x divide-white">  
      <div className="col-6 w-full md:w-6/12">
         <h3 className='text-white'>Code Creations</h3>
         <p className="pt-3 text-white">Dive into a showcase of my skills through various projects.</p>
      </div>
      </div>
          <div className="mx-auto mt-16">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-white p-4 rounded-lg shadow-md">
                   <Image 
                    src="/Socure.svg"
                    alt="Socure"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 border-b-2" 
                  />
                  <h2 className="text-xl font-semibold text-black mb-4">Socure</h2>
                  <p className="text-gray-600">Technology Used: Html, Scss, Jquery/Javascript, PHP, Wordpress, Marketo</p>
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

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Splunk_Logo_Grey-1.svg"
                    alt="Splunk"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Splunk</h2>
                  <p className="text-gray-600">Technology Used: AEM, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Aternity_Logo_Grey.svg"
                    alt="Aternity"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Aternity</h2>
                  <p className="text-gray-600">Technology Used: Wordpress, Html, Scss, Javascript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Hoover_Logo_White.svg"
                    alt="Hoover"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Hoover</h2>
                  <p className="text-gray-600">Technology Used: Drupal, Html, Scss, Javascript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/McGrath_Logo_Grey.svg"
                    alt="TRS"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">TRS Rentelco</h2>
                  <p className="text-gray-600">Technology Used: Drupal, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Heat-Control-white-Logo.svg"
                    alt="Heat and control"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Heat And Control</h2>
                  <p className="text-gray-600">Technology Used: Drupal, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Kount_Logo.svg"
                    alt="Kount"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Kount</h2>
                  <p className="text-gray-600">Technology Used: Wordpress, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Cohesity_Logo_Grey-1.svg"
                    alt="Cohesity"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Cohesity</h2>
                  <p className="text-gray-600">Technology Used: Wordpress, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Agari_Logo-1.svg"
                    alt="Agari"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Agari</h2>
                  <p className="text-gray-600">Technology Used: Wordpress, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Hippo_Logo_Grey.svg"
                    alt="Hippo"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Hippo</h2>
                  <p className="text-gray-600">Technology Used: Drupal, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Weka-Grey-Logo-1.svg"
                    alt="Weka"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Weka</h2>
                  <p className="text-gray-600">Technology Used: Wordpress, Html, Scss, JavaScript</p>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md">
              <Image 
                    src="/Carbon-Black-Grey-Logo.svg"
                    alt="Carbonblack"
                    width={100}
                    height={100}
                    className="w-full h-40 object-contain rounded mb-8 bg-white border-b-2" 
                  />                  
                  <h2 className="text-xl font-semibold text-black mb-4">Carbon Black</h2>
                  <p className="text-gray-600">Technology Used: Wordpress, Html, Scss, JavaScript</p>
              </div>

          </div>
          
       </div>
    </div>
    </section>
  );
}

export default MyProjects;
