
import { useState } from 'react'
import './CSS/Navbar.css'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="navbar glass">
                <div className="my-logo">
                    <div></div>
                </div>
                {/* Desktop Links */}
                <ul className="nav-links">
                    <li><a href="#about" className="footer-link">About</a></li>
                    <li><a href="#projects" className="footer-link">Project</a></li>
                    <li><a href="#contact" className="footer-link">Contact</a></li>
                </ul>
                {/* Hemburger icon */}
                <div className="humberger" onClick={toggleMenu}>
                    <div className={isOpen ? 'line line1  open' : ' line line1'}></div>
                    <div className={isOpen ? 'line line2  open' : ' line line2'}></div>
                    <div className={isOpen ? 'line line3  open' : ' line line3'}></div>
                </div>
                {/* Side bar in Mobile */}
                {isOpen && (
                    <div className='mobile-menu glass'>
                        <ul className="mobile-links">
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#projects" onClick={toggleMenu}>Project</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar