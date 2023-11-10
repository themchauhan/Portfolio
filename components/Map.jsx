"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const MapWithContact = () => {
  useEffect(() => {
    const loadMap = () => {
      if (window.google) {
        initMap();
      } else {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        document.head.appendChild(script);
      }
    };

    loadMap();
  }, []);

  const initMap = () => {
    const mapOptions = {
      center: { lat: 30.3016886, lng: 78.0098233 },
      zoom: 15,
    };

    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);
  };

  return (
    <section className="map-wrap bg-white text-black pt-0">
      <div className="container flex">
        <div className="w-1/2 bg-black">
          <div id="map" className="w-full h-96" />
        </div>
        <div className="w-1/2 bg-gray-100 p-8">
          <h2 className="text-2xl font-semibold">Contact Information</h2>
          <p className="mt-4">Your contact details and information can go here.</p>
          <div className="info-wrap flex flex-wrap w-full md:w-5/12 place-content-start pt-5">
           <div className="flex contact-info w-full">
            <span>
              <Image 
                 src="/phone-call-black.svg"
                 alt="person"
                 width={24}
                 height={24}
                 style={{ objectFit: 'contain'}} 
               />
            </span>
            <span className="pl-4">
                <h6 className="text-[#5869a5] text-base"><Link href="tel:+91080770 47210">+91080770 47210</Link></h6>
                <h6 className="mt-3 text-base">Mon to Fri (10am - 6pm)</h6>
            </span>
           </div>
           <div className="flex contact-info w-full pt-6">
            <span>
              <Image 
                 src="/email-black.svg"
                 alt="person"
                 width={24}
                 height={24}
                 style={{ objectFit: 'contain'}} 
               />
            </span>
            <span className="pl-4">
                <h6 className="text-base"><Link href="mailto:mani7015066@gmail.com" className="underline text-[#5869a5] hover:no-underline">Let&#39;s Connect in your Inbox</Link></h6>
                <h6 className="mt-3 text-base">Feel Free To Reach Out Anythime!</h6>
            </span>
           </div>
        </div>
        </div>
     </div>
    </section>
  );
};

export default MapWithContact;
