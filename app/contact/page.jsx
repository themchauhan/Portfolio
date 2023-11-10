import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Banner from '@/components/Banner'
import Map from '@/components/Map'
export default function Page() {
    return(
        <main>
            <Nav />
            <Banner  
              title="Contact Us"
              paragraph="If you require professional financial guidance or services, please don't hesitate to reach out to me here."
            />
            <Contact/>
            <Map/>
            <Footer/>
        </main>
    )
}
