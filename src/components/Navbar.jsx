import React from 'react';
import './Navbar.css';
import { FiHome, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { SiLeetcode } from 'react-icons/si';

const Navbar = () => {
  const handleBookCall = () => {
    window.open(
      'https://mail.google.com/mail/?view=cm&fs=1&to=mthirumalai2905@gmail.com&su=Book a Call&body=Hi Thiru, I would like to book a call with you.',
      '_blank'
    );
  };

  return (
    <div className="navbar-container">
      <div className="navbar-inner">
        <div className="navbar-icons">
          <a href="/" className="icon"><FiHome /></a>
          <a href="https://github.com/mthirumalai2905" target="_blank" rel="noopener noreferrer">
            <FiGithub className="icon" />
          </a>
          <a href="https://linkedin.com/in/mthirumalai2905" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="icon" />
          </a>
          <a href="https://x.com/piratethiru" target="_blank" rel="noopener noreferrer">
            <FiTwitter className="icon" />
          </a>
          <a href="https://leetcode.com/mthirumalai2905" target="_blank" rel="noopener noreferrer">
            <SiLeetcode className="icon" />
          </a>
        </div>

        <button className="book-call-button" onClick={handleBookCall}>
          Book a Call
        </button>
      </div>
    </div>
  );
};

export default Navbar;
