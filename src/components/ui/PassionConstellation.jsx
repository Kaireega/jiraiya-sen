import { motion } from "framer-motion";
import { passions } from "../../data/content";
import "./PassionConstellation.css";

export default function PassionConstellation() {
  return (
    <section id="passions" className="passions">
      <div className="passions__header">
        <p className="passions__eyebrow">Constellation</p>
        <h2 className="passions__title">What moves me</h2>
        <p className="passions__subtitle">
          Hover the orbs — code, music, the outdoors, and life aren&apos;t separate tracks. They&apos;re one path.
        </p>
      </div>

      <div className="passions__grid">
        {passions.map((item, index) => (
          <motion.article
            key={item.id}
            className="passion-orb"
            style={{ "--orb-color": item.color }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="passion-orb__glow" aria-hidden="true" />
            <span className="passion-orb__glyph">{item.glyph}</span>
            <h3 className="passion-orb__label">{item.label}</h3>
            <p className="passion-orb__blurb">{item.blurb}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
