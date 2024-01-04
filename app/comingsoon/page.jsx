import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BannerSecond from '@/components/BannerSecond';
import Intro_block from '@/components/Intro_block';
import Academics from '@/components/Academics';
export default function Page() {
    const section2Content = {
        title: "Have a brilliant concept or a monumental endeavor on your radar? Join me, and together, we'll accomplish greatness.",
        linkText: "Contact Me",
        link: "/contacts",
        bgColor: ""
      };
    return(
        <main>
            <Nav />
            <BannerSecond title="Coming Soon!!" subtitle= "Good Things Takes Time." showLink='false'/>
            <Intro_block {...section2Content} showButton={true}/>
            <Footer/>
        </main>
    )
}
