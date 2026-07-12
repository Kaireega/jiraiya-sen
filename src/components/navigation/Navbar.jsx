import React from 'react';
import { ReactComponent as GitHubIcon } from '../../assets/picsvg_download.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/i8FR1D01.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import './Navbar.css';

const links = [
  { id: 'github', href: 'https://github.com/Kaireega', label: 'GitHub', Icon: GitHubIcon },
  { id: 'linkedin', href: 'https://www.linkedin.com/in/kairee-gay-8520251b0', label: 'LinkedIn', Icon: LinkedInIcon },
  { id: 'instagram', href: 'https://www.instagram.com/kaireega/', label: 'Instagram', Icon: InstagramIcon },
];

function Navbar() {
  return (
    <header className="navbar">
      <a href="#top" className="navbar-brand">
        <span className="navbar-brand-mark">K</span>
        <span className="navbar-brand-text">Kai&apos;ree Gay</span>
      </a>

      <nav className="navbar-links" aria-label="Primary">
        <a href="#passions">Passions</a>
        <a href="#experience">Experience</a>
        <a href="https://github.com/Kaireega" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/kairee-gay-8520251b0" target="_blank" rel="noreferrer">Contact</a>
      </nav>

      <div className="navbar-social" aria-label="Social links">
        {links.map(({ id, href, label, Icon }) => (
          <a key={id} href={href} target="_blank" rel="noreferrer" aria-label={label} className="navbar-social-link">
            <Icon />
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
