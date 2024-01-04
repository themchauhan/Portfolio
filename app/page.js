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
import MyProjects from '@/components/Featured_project';

export default function Home() {
  const section1Props = {
    title: "Have a brilliant concept or a monumental endeavor on your radar? Join me, and together, we'll accomplish greatness.",
    linkText: "Contact Me",
    link: "/contacts",
  };

  return (

    <main>
        <Nav />
        <Hero/>
        <About />
        <Dev_process/>
        <Intro_block {...section1Props}/>
        <Skill/>
        {/* <MyForm/> */}
        <MyProjects/>
        <Contact/>
        <Footer/>
    </main>
  )
}
