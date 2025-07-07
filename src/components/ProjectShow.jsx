import React from 'react';
import './ProjectShow.css';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

import imagify from '../assets/imagify.webm';
import mock from '../assets/mock.webm';
import blog from '../assets/screen-capture.webm';

const projects = [
  {
    title: 'Imagify - Text to Image SaaS',
    description: 'Generate AI-powered images from text prompts. Full-stack SaaS product.',
    tech: ['Next.js', 'Tailwind', 'Stripe', 'OpenAI'],
    video: imagify,
    link: 'https://imagify.example.com',
  },
  {
    title: 'Mock AI Interview',
    description: 'An interactive AI interview preparation platform with feedback.',
    tech: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    video: mock,
    link: 'https://mockai.example.com',
  },
  {
    title: 'Dev Blog CMS',
    description: 'A developer-friendly CMS to create and share technical blogs.',
    tech: ['React', 'Firebase', 'Markdown'],
    video: blog,
    link: 'https://devblog.example.com',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const ProjectShow = () => {
  return (
    <motion.section
      className="project-show"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.h2
        className="project-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      {projects.map((project, idx) => (
        <motion.div key={idx} variants={itemVariants}>
          <ProjectCard {...project} />
        </motion.div>
      ))}
    </motion.section>
  );
};

export default ProjectShow;
