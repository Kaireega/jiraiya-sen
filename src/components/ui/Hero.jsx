import { motion } from "framer-motion";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="top" className="hero-stage">
      <motion.div
        className="hero-stage__inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      >
        <p className="hero-stage__eyebrow">Software Engineer · Builder · Outdoors</p>
        <h1 className="hero-stage__title">
          Kai&apos;ree
          <span>Gay</span>
        </h1>
        <p className="hero-stage__tagline">
          I write systems that hold up in production — then I step outside to remember why any of it matters.
        </p>
        <div className="hero-stage__scroll" aria-hidden="true">
          <span>Scroll the trail</span>
          <motion.div
            className="hero-stage__scroll-line"
            animate={{ y: [0, 10, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
