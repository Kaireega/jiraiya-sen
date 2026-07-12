import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingElements from "./FloatingElements";
import Fireflies from "./Fireflies";
import MountainTerrain from "./MountainTerrain";
import ScrollCamera from "./ScrollCamera";
import DynamicSky from "./DynamicSky";

export default function WorldCanvas({ scrollProgress, audioActive, reducedMotion }) {
  if (reducedMotion) {
    return <div className="world-canvas world-canvas--static" aria-hidden="true" />;
  }

  return (
    <div className="world-canvas" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ScrollCamera scrollProgress={scrollProgress} />
          <DynamicSky scrollProgress={scrollProgress} />
          <ambientLight intensity={0.35} />
          <directionalLight position={[6, 10, 4]} intensity={1.3} color="#ffcba4" />
          <pointLight position={[-4, 3, 2]} intensity={0.6} color="#6ee7df" />
          <pointLight position={[4, 2, -2]} intensity={0.5} color="#f472b6" />
          <MountainTerrain scrollProgress={scrollProgress} />
          <Fireflies scrollProgress={scrollProgress} audioActive={audioActive} />
          <FloatingElements scrollProgress={scrollProgress} audioActive={audioActive} />
          <fog attach="fog" args={["#1a1030", 6, 24]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
