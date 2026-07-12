import React from 'react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        Designed & built by <span className="footer-name">Kai&apos;ree Gay</span> · {year}
      </p>
      <div className="footer-links">
        <a href="https://github.com/Kaireega" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kairee-gay-8520251b0" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://kaireega.github.io/jiraiya-sen/">Portfolio</a>
      </div>
    </footer>
  );
}

export default Footer;
