import React from 'react';
import './Skills.css';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillList = [
    'Java', 'HTML', 'CSS', 'JavaScript', 'Python', 'SQL',
    'React.js', 'Next.js', 'Node.js', 'Express.js',
    'Docker', 'Kubernetes', 'AWS',
    'MongoDB', 'MySQL', 'PostgreSQL',
    'Git', 'GitHub', 'GitLab', 'Kali Linux', 'Postman API', 'Figma'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section 
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 
        className="skills-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>

      <motion.div 
        className="skills-container"
        variants={containerVariants}
      >
        {skillList.map((skill, index) => (
          <motion.span 
            className="skill-pill" 
            key={index}
            variants={itemVariants}
            transition={{ duration: 1.0 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
