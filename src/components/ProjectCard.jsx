import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description, tech, link, video }) => {
  return (
    <div className="project-card">
      <video
        className="project-video"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <div className="tech-stack">
          {tech.map((item, idx) => (
            <span key={idx} className="tech-chip">{item}</span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            Visit
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
