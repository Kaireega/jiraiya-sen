import { useMemo } from "react";

const peaks = [
  { position: [-5, 0, -6], scale: [2.8, 4.2, 2.8], color: "#2a1f4d" },
  { position: [-1.5, 0, -8], scale: [3.6, 5.8, 3.6], color: "#1f1638" },
  { position: [3, 0, -7], scale: [3.2, 5.1, 3.2], color: "#241a42" },
  { position: [6.5, 0, -5], scale: [2.4, 3.6, 2.4], color: "#2f234f" },
];

export default function MountainTerrain({ scrollProgress }) {
  const groundColor = useMemo(
    () => (scrollProgress > 0.5 ? "#0d1a12" : "#1a2f1f"),
    [scrollProgress]
  );

  return (
    <group position={[0, -1.8 + scrollProgress * -0.5, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -2]} receiveShadow>
        <planeGeometry args={[40, 40, 1, 1]} />
        <meshStandardMaterial color={groundColor} roughness={0.95} metalness={0.05} />
      </mesh>

      {peaks.map((peak) => (
        <mesh key={peak.position.join("-")} position={peak.position} scale={peak.scale}>
          <coneGeometry args={[1, 1, 5]} />
          <meshStandardMaterial color={peak.color} roughness={0.8} flatShading />
        </mesh>
      ))}

      {/* Trail path */}
      <mesh rotation={[-Math.PI / 2, 0, 0.3]} position={[0, 0.02, 1]}>
        <planeGeometry args={[0.5, 14]} />
        <meshStandardMaterial color="#c4a035" emissive="#c4a035" emissiveIntensity={0.15} />
      </mesh>
    </group>
  );
}
