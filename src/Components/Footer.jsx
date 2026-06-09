import { motion } from 'framer-motion';
import './CSS/Footer.css';

function Footer() {
  return (
    <motion.footer 
      className="footer glass"
      initial={{ opacity: 0, y: 50 }} // Starts 50px below, invisible
      whileInView={{ opacity: 1, y: 0 }} // Slides up to original position
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="footer-content">
        
        {/* Social Links */}
        <div className="footer-links">
          <a href="https://github.com/M28755" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/michael-otieno-b86703382" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://tiktok.com/@jaguar.king.of.jungle30" target="_blank" rel="noreferrer" className="footer-link">TikTok</a>
        </div>

        {/* Tagline */}
        <p className="footer-tagline">Designed &amp; Built by OMONDI MICHAEL</p>

        {/* Copyright */}
        <p className="footer-copyright">© {new Date().getFullYear()} Omondi Michael Otieno. All rights reserved.</p>
        
      </div>
    </motion.footer>
  );
}

export default Footer;