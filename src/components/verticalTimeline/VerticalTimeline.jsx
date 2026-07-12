import React from "react";
import "./VerticalTimeline.css";

const experiences = [
  {
    period: "Feb 2024 – Jul 2024",
    title: "Software Developer",
    company: "ThoughtWorks",
    type: "Engineering",
    highlights: [
      "Built Java and Spring Boot applications for client-facing solutions.",
      "Collaborated across engineering, QA, UX, and business analysis to ship production features.",
      "Strengthened full-stack delivery across backend services and web application workflows.",
    ],
    stack: ["Java", "Spring Boot", "Full-stack", "Agile"],
  },
  {
    period: "May 2023 – Dec 2023",
    title: "Pool Manager",
    company: "Wilsons Pool Services",
    type: "Operations",
    highlights: [
      "Managed recurring service operations across residential and commercial accounts.",
      "Maintained quality standards, scheduling discipline, and detailed service records.",
      "Led field work with consistency, accountability, and customer trust.",
    ],
    stack: ["Operations", "Leadership", "Process"],
  },
  {
    period: "May 2022 – Aug 2022",
    title: "Software Developer Intern",
    company: "ThoughtWorks",
    type: "Engineering",
    highlights: [
      "Contributed to a social-impact web application using modern frontend and backend tooling.",
      "Completed a consulting skills program covering agile delivery and cross-functional collaboration.",
      "Gained early production experience in a high-expectation engineering environment.",
    ],
    stack: ["JavaScript", "React", "Spring Boot", "Agile"],
  },
  {
    period: "Aug 2018 – Dec 2022",
    title: "Lead Baker",
    company: "Sammy Cheesecake",
    type: "Leadership",
    highlights: [
      "Directed daily production for a signature dessert operation.",
      "Maintained quality control, team coordination, and health-compliance standards.",
      "Built discipline under pressure — an early foundation for leading technical work.",
    ],
    stack: ["Leadership", "Quality Control", "Operations"],
  },
];

const VerticalTimeline = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <p className="experience-eyebrow">Career</p>
        <h2 className="experience-title">Experience</h2>
        <p className="experience-subtitle">
          A chronological record of the work that shaped how I build, lead, and deliver.
        </p>
      </div>

      <div className="timeline">
        {experiences.map((role, index) => (
          <article key={`${role.company}-${role.period}`} className="timeline-entry">
            <div className="timeline-marker" aria-hidden="true">
              <span className="timeline-dot" />
              {index < experiences.length - 1 && <span className="timeline-line" />}
            </div>

            <div className="timeline-card">
              <div className="timeline-card-top">
                <div>
                  <p className="timeline-period">{role.period}</p>
                  <h3 className="timeline-role">{role.title}</h3>
                  <p className="timeline-company">{role.company}</p>
                </div>
                <span className="timeline-type">{role.type}</span>
              </div>

              <ul className="timeline-highlights">
                {role.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="timeline-stack">
                {role.stack.map((tech) => (
                  <span key={tech} className="timeline-tag">{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default VerticalTimeline;
