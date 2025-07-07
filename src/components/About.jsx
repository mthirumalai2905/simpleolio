import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section 
      className="about-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1 }}
      viewport={{ once: true }}
    >
      <motion.h2 
        className="about-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.2 }}
      >
        About Me
      </motion.h2>

      <motion.p 
        className="about-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.4 }}
      >
        I'm a passionate developer who loves building efficient, scalable, 
        and beautiful web experiences.
        With a strong background in full-stack development, I enjoy solving real-world problems using clean and modern code.
      </motion.p>
    </motion.section>
  );
};

export default About;
