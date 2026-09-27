import { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProjects from './components/FeaturedProjects'
import Services from './components/Services'
import Stats from './components/Stats'
import Highlights from './components/Highlights'
import Process from './components/Process'
import Skills from './components/Skills'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'
import AskResume from './components/AskResume'

export default function App() {
  // One IntersectionObserver drives the shared .fade-up reveal across all sections.
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('.fade-up'))
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.15 },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
        <Services />
        <Stats />
        <Highlights />
        <Process />
        <Skills />
        <ContactCTA />
      </main>
      <Footer />
      <AskResume />
    </div>
  )
}
