import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="hero-section"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.img
        className="hero-logo"
        src="https://i.pinimg.com/736x/42/74/d6/4274d678ee4b390c48bf2ebb8656642a.jpg"
        alt="Thiru Logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      />
      
      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Hey, I'm Thiru
      </motion.h1>

      <motion.h2 
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        Engineer & Developer
      </motion.h2>

      <motion.p 
        className="hero-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        I build clean, efficient web applications with a focus on performance and design.<br />
        Always exploring new technologies and turning ideas into reality.
      </motion.p>

      <motion.div 
        className="cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <motion.button 
          className="hire-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Hire Me
        </motion.button>

        <motion.div 
          className="availability"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="status-dot"></span>
          <span className="available-text mobile">Available</span>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
