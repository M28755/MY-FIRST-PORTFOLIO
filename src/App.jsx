import Navbar from './Components/Navbar'
import './App.css'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'
import ProjectSection from './Components/ProjectSection'


function App() {


  return (
    <>
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>

    </>
  )
}

export default App
