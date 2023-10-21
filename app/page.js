import Image from 'next/image'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Dev_process from '@/components/Dev_process'
import Intro_block from '@/components/Intro_block'
import Skill from '@/components/Skill'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import MyForm from '@/components/Featured'
export default function Home() {
  return (

    <main>
        <Nav />
        <Hero/>
        <About />
        <Dev_process/>
        <Intro_block/>
        <Skill/>
        <MyForm/>
        <Contact/>
        <Footer/>
    </main>
  )
}
