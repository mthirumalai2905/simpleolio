import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer-heading">Get in touch</h2>
      <p className="footer-text">
        Building something that needs to convert? Need a design engineer who actually ships products that make money?
        I'm down to work on projects that solve real problems. Hit me up if you're serious about results.
      </p>

      <div className="footer-actions">
        <button className="footer-btn primary">Send Message</button>
        <span className="or-text">or</span>
        <button className="footer-btn secondary">Book a Call</button>
      </div>

      <div className="footer-copy">
        © 2025 Thirumalai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
