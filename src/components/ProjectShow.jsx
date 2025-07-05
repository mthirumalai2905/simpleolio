import React from 'react';
import './ProjectShow.css';
import ProjectCard from './ProjectCard';

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

const ProjectShow = () => {
  return (
    <section className="project-show">
      <h2 className="project-title">Projects</h2>
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </section>
  );
};

export default ProjectShow;
