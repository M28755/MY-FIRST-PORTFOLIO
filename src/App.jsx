
import { useRef } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'
import ContactSection from './Components/ContactSection'
import Footer from './Components/Footer'





function App() {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: 'start'
    })
  }
  return (
    <>
      <div className="app-container">
        <Navbar />
        <HeroSection onGetOnTouch={scrollToContact} />
        <AboutSection />
        <ProjectSection />
        <ContactSection ref={contactRef} />
        <Footer />
      </div>

    </>
  )
}

export default App
