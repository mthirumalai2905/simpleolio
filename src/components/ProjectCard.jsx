import React from 'react';
import './ProjectCard.css';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, tech, link, video }) => {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <motion.video
        className="project-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      ></motion.video>

      <motion.div
        className="project-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="tech-stack">
          {tech.map((item, idx) => (
            <motion.span
              key={idx}
              className="tech-chip"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {item}
            </motion.span>
          ))}
        </div>

        {link && (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Visit
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
