import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Dev_process from '@/components/Dev_process'
import Intro_block from '@/components/Intro_block'
import Contact from '@/components/Contact'
import CarouselPage from '@/components/Testimonial'
import MyTeam from '@/components/Team'
import Footer from '@/components/Footer'
export default function Home() {
  return (

    <main>
        <Nav />
        <Hero/>
        <About />
        <Dev_process/>
        <CarouselPage/>
        <MyTeam/>
        <Intro_block/>
        <Footer/>
    </main>
  )
}
