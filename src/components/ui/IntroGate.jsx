import { motion } from "framer-motion";
import "./IntroGate.css";

export default function IntroGate({ onEnter }) {
  return (
    <motion.div
      className="intro-gate"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <div className="intro-gate__veil" />
      <div className="intro-gate__content">
        <p className="intro-gate__eyebrow">Portfolio Experience</p>
        <h1 className="intro-gate__title">The Trail &amp; The Track</h1>
        <p className="intro-gate__copy">
          A living landscape of code, music, and open air — scroll the path to explore
          who I am beyond the resume.
        </p>
        <button type="button" className="intro-gate__btn" onClick={onEnter}>
          Begin the journey
        </button>
        <p className="intro-gate__hint">Scroll · Sound · Explore</p>
      </div>
    </motion.div>
  );
}
