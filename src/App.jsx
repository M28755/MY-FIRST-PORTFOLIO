import Navbar from './Components/Navbar'
import './App.css'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'
import ContactSection from './Components/ContactSection'



function App() {


  return (
    <>
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection/>
      </div>

    </>
  )
}

export default App
