import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import WorldCanvas from "./components/scene/WorldCanvas";
import Navbar from "./components/navigation/Navbar";
import IntroGate from "./components/ui/IntroGate";
import Hero from "./components/ui/Hero";
import PassionConstellation from "./components/ui/PassionConstellation";
import TrailTimeline from "./components/ui/TrailTimeline";
import AudioToggle from "./components/ui/AudioToggle";
import Footer from "./components/footer/Footer";
import { useScrollProgress, usePrefersReducedMotion } from "./hooks/useScrollProgress";
import { useAmbientAudio } from "./hooks/useAmbientAudio";

function App() {
  const [entered, setEntered] = useState(false);
  const scrollProgress = useScrollProgress();
  const reducedMotion = usePrefersReducedMotion();
  const { active: audioActive, toggle: toggleAudio, start: startAudio } = useAmbientAudio();

  const handleEnter = () => {
    setEntered(true);
    startAudio();
  };

  return (
    <div className="App">
      <WorldCanvas
        scrollProgress={scrollProgress}
        audioActive={audioActive}
        reducedMotion={reducedMotion}
      />

      <AnimatePresence>{!entered && <IntroGate onEnter={handleEnter} />}</AnimatePresence>

      <div className={`experience-layer ${entered ? "experience-layer--visible" : ""}`}>
        <Navbar />
        <main className="page-content">
          <Hero />
          <PassionConstellation />
          <TrailTimeline />
        </main>
        <Footer />
      </div>

      {entered && <AudioToggle active={audioActive} onToggle={toggleAudio} />}
    </div>
  );
}

export default App;
