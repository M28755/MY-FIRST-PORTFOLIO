import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import './CSS/Herosection.css'

function HeroSection() {
    return (
        <>
            <section className="hero">
                <div className="bg-shape shape1 "></div>
                <div className="bg-shape shape2 "></div>

                <div className="hero-content">

                    <motion.div
                        className='hero-text'
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}

                    >
                        <p className="hero-greeting">Hello , I am</p>
                        <h1 className='hero-name'>OMONDI MICHAEL</h1>

                        {/* Typing loop animation */}
                        <div className="hero-typing">
                            <span>I am a</span>
                            <TypeAnimation
                                sequence={[
                                    'Web Developer',
                                    2000,
                                    'Data Scientist',
                                    2000,
                                    'Hacker (Ethical Hacker)',
                                    2000,
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                                className='typing-highlight'
                            />
                        </div>

                        <p className="hero-description">
                            I craft high-performance digital experiences at the intersection of design and engineering. Specializing in immersive web applications that push the boundaries

                        </p>
                        <a href="" className="hero-btn">
                            Get In Touch
                        </a>


                    </motion.div>
                    <motion.div
                        className='hero-visual'
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}

                    >
                        <div className="hero-image-placeholder ">
                            <span>My  Image Goes Here</span>
                        </div>

                    </motion.div>


                </div>
            </section>

        </>
    )
}

export default HeroSection;