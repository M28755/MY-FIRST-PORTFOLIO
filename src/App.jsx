import Navbar from './Components/Navbar'
import './App.css'
import HeroSection from './Components/HeroSection'
import AboutSection from './Components/AboutSection'


function App() {


  return (
    <>
      <div className="app-container">
        <Navbar />
        <HeroSection />
        <AboutSection />
      </div>

    </>
  )
}

export default App
