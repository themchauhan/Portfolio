import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import BannerSecond from '@/components/BannerSecond';
import Contact from '@/components/Contact';
export default function Page() {
    return(
        <main>
            <Nav />
            <BannerSecond title="Drop A Message." subtitle= "" showLink='false'/>
            <Contact />
            <Footer/>
        </main>
    )
}
