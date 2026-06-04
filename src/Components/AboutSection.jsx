import { motion } from 'framer-motion'
import SkillBar from './SkillBar/SkillBar';
import './CSS/AboutSection.css'


function AboutSection() {

    const Skills = [
        {name: 'HTML', level: 90},
        {name:'CSS' , level: 85},
        {name:'JAVASCRIPT', level:71},
        {name:'React ', level:60},
        {name: 'git', level:60}

    ]

    return (
        <>
            <section id='about' className="about-section">
                {/* <div className="bg-shape shape2 "></div> */}

                <motion.div
                    className='about-text'
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
                >
                    <h2 className="section-title">About Me</h2>
                    <p className="about-description">
                        An Engineer who is passionate web developer with a strong eye for design and performance.
                        Engineer specialize in building responsive, accessible, and visually stunning web applications.

                        <span><i>When I'm not coding, I'm exploring new design trends, watching Movies.</i></span>
                    </p>
                    <p className="about-description">
                        My goal is to bring ideas to life through clean code and seamless user experiences.
                        Let's turn your vision into reality.
                    </p>
                </motion.div>
                <motion.div
                    className='about-visual'
                    initial={{ opacity: 0, X: 100 }}
                    whileInView={{ opacity: 1, X: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut', delay: 1.3 }}
                >
                    <div className="skills-card">
                        <h3 className="skills-title">My Tech Stack</h3>
                        {Skills.map((skill, index) => (
            <SkillBar 
              key={index} 
              name={skill.name} 
              level={skill.level} 
            />
          ))}
                    </div>
                </motion.div>


            </section>
        </>
    )
}


export default AboutSection