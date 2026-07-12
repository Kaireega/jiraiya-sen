import React from 'react';
import './OpenMessage.css';

function Hero() {
  return (
    <section id="top" className="hero">
      <p className="hero-eyebrow">Software Engineer</p>

      <h1 className="hero-title">
        Kai&apos;ree <span className="hero-title-accent">Gay</span>
      </h1>

      <p className="hero-tagline">
        I build systems that are deliberate, durable, and worth shipping —
        from trading platforms to full-stack products.
      </p>

      <p className="hero-body">
        Software engineer with experience across fintech automation, Spring Boot backends,
        React frontends, and Android development. I care about clean architecture, readable code,
        and work that holds up under real-world pressure.
      </p>

      <div className="hero-actions">
        <a href="#experience" className="hero-btn hero-btn-primary">View experience</a>
        <a
          href="https://github.com/Kaireega"
          target="_blank"
          rel="noreferrer"
          className="hero-btn hero-btn-secondary"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/kairee-gay-8520251b0"
          target="_blank"
          rel="noreferrer"
          className="hero-btn hero-btn-secondary"
        >
          LinkedIn
        </a>
      </div>

      <div className="hero-skills" aria-label="Core technologies">
        {['Python', 'Java', 'TypeScript', 'Spring Boot', 'React', 'FastAPI', 'PostgreSQL', 'Kotlin'].map((skill) => (
          <span key={skill} className="hero-skill">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Hero;
