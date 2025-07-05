import React from 'react';
import './Navbar.css';
import { FiHome, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-icons">
          <FiHome className="icon" />
          <FiGithub className="icon" />
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FiLinkedin className="icon" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter className="icon" /></a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer"><SiLeetcode className="icon" /></a>
        </div>
        <button className="book-call-button">Book a Call</button>
      </div>
    </div>
  );
};

export default Navbar;
