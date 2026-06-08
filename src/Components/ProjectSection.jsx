import { motion } from 'framer-motion';
import './CSS/ProjectSection.css'

const imageModules = import.meta.glob('../assets/ProjrctImages/*.{png,jpg,jpeg}', { eager: true })
function ProjectSection() {
    const projects = [
        {
            id: 1,
            title: 'Admin Dashboard',
            description: '',
            tags: ['React'],
            github: 'https://github.com/M28755/ADMIN-DASHBOARD',
            live: '#'
        },
        {
            id: 2,
            title: "White Eagle Contructor",
            description: "",
            tags: ['HTML', "CSS", 'JAVASCRIPT'],
            github: 'https://github.com/M28755/WHITE-EANGLES-CONSTROCTOR',
            live: '#',
            Image: imageModules['../assets/ProjrctImages/project2.png']?.default,
            /*  avatar: require('../assets/ProjrctImages/project2.png') */
        },
        {
            id: 2,
            title: "Modern Coffee Shop",
            description: "A responsive modern coffee shop website using modern design principles",
            tags: ['HTML', "CSS", 'JAVASCRIPT'],
            github: 'https://github.com/M28755/MODERN-COFFEE-SHOP',
            live: '#',
            Image: imageModules['../assets/ProjrctImages/project3.jpg']?.default,
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

                                <img src={project.Image} alt="" />
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
                                    <a href={project.github} target="_self" rel="noreferrer" className="project-btn">GitHub</a>
                                    <a href={project.live} target="_self" rel="noreferrer" className="project-btn primary-btn">Live Demo</a>

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