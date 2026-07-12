import { motion } from "framer-motion";
import { experiences } from "../../data/content";
import "./TrailTimeline.css";

export default function TrailTimeline() {
  return (
    <section id="experience" className="trail">
      <div className="trail__header">
        <p className="trail__eyebrow">The path so far</p>
        <h2 className="trail__title">Experience</h2>
        <p className="trail__subtitle">
          Chronological trail markers — each stop shaped how I build, lead, and show up.
        </p>
      </div>

      <div className="trail__path">
        <div className="trail__line" aria-hidden="true" />
        {experiences.map((role, index) => (
          <motion.article
            key={`${role.company}-${role.period}`}
            className="trail-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            <div className="trail-card__marker" aria-hidden="true">
              <span>{index + 1}</span>
            </div>
            <div className="trail-card__body">
              <div className="trail-card__top">
                <div>
                  <p className="trail-card__period">{role.period}</p>
                  <h3 className="trail-card__role">{role.title}</h3>
                  <p className="trail-card__company">{role.company}</p>
                </div>
                <span className="trail-card__type">{role.type}</span>
              </div>
              <ul className="trail-card__highlights">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="trail-card__stack">
                {role.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
