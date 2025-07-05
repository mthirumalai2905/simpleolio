import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillList = [
  'Java', 'HTML', 'CSS', 'JavaScript', 'Python', 'SQL',
  'React.js', 'Next.js', 'Node.js', 'Express.js',
  'Docker', 'Kubernetes', 'AWS',
  'MongoDB', 'MySQL', 'PostgreSQL',
  'Git', 'GitHub', 'GitLab',  'Kali Linux', 'Postman API', 'Figma'
];


  return (
    <section className="skills-section">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-container">
        {skillList.map((skill, index) => (
          <span className="skill-pill" key={index}>{skill}</span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
