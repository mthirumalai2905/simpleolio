import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <img
        className="hero-logo"
        src="https://i.pinimg.com/736x/42/74/d6/4274d678ee4b390c48bf2ebb8656642a.jpg"
        alt="Thiru Logo"
      />
      <h1 className="hero-title">Hey, I'm Thiru</h1>
      <h2 className="hero-subtitle">Engineer & Developer</h2>
      <p className="hero-description">
        I build clean, efficient web applications with a focus on performance and design.<br />
        Always exploring new technologies and turning ideas into reality.
      </p>

      <div className="cta">
        <button className="hire-button">Hire Me</button>
        <div className="availability">
  <span className="status-dot"></span>
  <span className="available-text mobile">Available</span>
</div>

      </div>
    </section>
  );
};

export default Hero;
