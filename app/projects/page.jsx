import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BannerSecond from '@/components/BannerSecond';
import FeaturedProject from '@/components/Featured_project';
import Intro_block from '@/components/Intro_block';
export default function Page() {
    const section2Content = {
        title: "Have a brilliant concept or a monumental endeavor on your radar? Join me, and together, we'll accomplish greatness.",
        linkText: "Contact Me",
        link: "#contact",
        bgColor: "#000"
      };
    return(
        <main>
            <Nav />
            <BannerSecond title="Project Showcase" subtitle= "Explore a collection of my latest and greatest projects." showLink='false'/>
            <FeaturedProject showButton={false} />
            <Intro_block {...section2Content} showButton={false}/>
            <Footer/>
        </main>
    )
}
