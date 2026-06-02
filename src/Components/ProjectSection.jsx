import { motion } from 'framer-motion';
import './CSS/ProjectSection.css'


function ProjectSection() {
    const projects = [
        {
            id: 1,
            title: 'Admin Dashboard',
            description: '',
            tags: ['React'],
            github: '#',
            live: '#'
        }
    ];

    const containerVarients = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChidren: 0.3
            }
        }
    }
    const cardVarients = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    }
    return (
        <>
            <section className="projects-section" id="projects">
                <h2 className="section-title">My Projects</h2>

                <motion.div
                    className='projects-grid'
                    variants={containerVarients}
                    initial="hidden"
                    whileInView="visible"

                >
                    {projects.map((project) => (
                        <motion.div
                            className='project-card '
                            key={project.id}
                            variants={cardVarients}
                        >
                            <div className="project-image">

                            </div>

                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                {/* Tags */}
                                <div className="project-tags">
                                    {
                                        project.tags.map((tag, index) => (
                                            <span key={index} className='tag'>{tag}</span>
                                        ))
                                    }
                                </div>

                                {/* Action buttton */}
                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">GitHub</a>
                                    <a href={project.live} target="_blank" rel="noreferrer" className="project-btn primary-btn">Live Demo</a>

                                </div>
                            </div>

                        </motion.div>
                    ))

                    }

                </motion.div>

            </section>
        </>
    )
}
export default ProjectSection;