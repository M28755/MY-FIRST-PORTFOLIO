import { motion } from 'framer-motion';
import './SkillBar.css';

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar-container">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-track glass">
        {/* The animated fill bar */}
        <motion.div 
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default SkillBar;