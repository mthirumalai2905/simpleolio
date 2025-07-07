import React from 'react';
import './Footer.css';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="footer-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in touch
      </motion.h2>

      <motion.p
        className="footer-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Building something that needs to convert? Need a design engineer who actually ships products that make money?
        I'm down to work on projects that solve real problems. Hit me up if you're serious about results.
      </motion.p>

      <motion.div
        className="footer-actions"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          className="footer-btn primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
        <span className="or-text">or</span>
        <motion.button
          className="footer-btn secondary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Book a Call
        </motion.button>
      </motion.div>

      <motion.div
        className="footer-copy"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        © 2025 Thirumalai. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
