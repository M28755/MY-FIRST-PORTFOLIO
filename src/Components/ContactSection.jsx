import { useState, forwardRef } from 'react';
import { motion } from 'framer-motion';
import './CSS/ContactSection.css';

const ContactSection = forwardRef((props, ref) => {
  // Simple state for our form inputs (I won't hook it up to a backend, just UI for now)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! (Well, simulated for now)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={ref} id="contact" className="contact-section">
      <h2 className="section-title">Get In Touch</h2>

      <div className="contact-container">

        {/* Left Side: Code Block - Sliding in from Left */}
        <motion.div
          className="code-block"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="code-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
            <span className="filename">contact.js</span>
          </div>
          <pre className="code-content">
            <code>
              <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
              <br />
              {'  '}<span className="property">name</span>: <span className="string">"OMONDI MICHAEL"</span>,
              <br />
              {'  '}<span className="property">email</span>: <span className="string">"jaguarhunter28755hunter@gmail.com"</span>,
              <br />
              {'  '}<span className="property">github</span>: <span className="string">"github.com/M28755"</span>,
              <br />
              {'  '}<span className="property">linkedin</span>: <span className="string">"linkedin.com/in/michael-otieno-b86703382"</span>,
              <br />
              {'  '}<span className="property">available</span>: <span className="boolean">true</span>,
              <br />
              {'}'};
            </code>
          </pre>
        </motion.div>

        {/* Right Side: Contact Form - Sliding in from Right */}
        <motion.div
          className="contact-form-wrapper"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <form className="contact-form glass" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <label>Name</label>
            </div>
            <div className="input-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <label>Email</label>
            </div>
            <div className="input-group">
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label>Message</label>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </motion.div>

      </div>
    </section>
  );
})

export default ContactSection;