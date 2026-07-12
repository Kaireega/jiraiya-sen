import { Float, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const codeGlyphs = ["{ }", "</>", "fn", "λ", "01", "git"];
const musicGlyphs = ["♪", "♫", "♬", "♩"];

function FloatingGlyph({ position, glyph, color, speed = 1 }) {
  const ref = useRef();

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed) * 0.25;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <group ref={ref} position={position}>
        <Text
          fontSize={0.35}
          color={color}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {glyph}
        </Text>
      </group>
    </Float>
  );
}

export default function FloatingElements({ scrollProgress, audioActive }) {
  const elements = useMemo(() => {
    const items = [];
    for (let i = 0; i < 6; i += 1) {
      items.push({
        position: [
          (Math.random() - 0.5) * 10,
          1 + Math.random() * 3,
          -1 - Math.random() * 6,
        ],
        glyph: codeGlyphs[i % codeGlyphs.length],
        color: "#6ee7df",
        speed: 0.6 + Math.random() * 0.6,
      });
    }
    for (let i = 0; i < 5; i += 1) {
      items.push({
        position: [
          (Math.random() - 0.5) * 10,
          1.5 + Math.random() * 2.5,
          -2 - Math.random() * 5,
        ],
        glyph: musicGlyphs[i % musicGlyphs.length],
        color: "#f472b6",
        speed: 0.8 + Math.random() * 0.5,
      });
    }
    return items;
  }, []);

  return (
    <group rotation={[0, scrollProgress * 0.5, 0]} scale={audioActive ? 1.05 : 1}>
      {elements.map((el) => (
        <FloatingGlyph key={`${el.glyph}-${el.position.join("-")}`} {...el} />
      ))}

      {/* Glowing orbs */}
      <mesh position={[-3, 2.2, -4]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#6ee7df" emissive="#6ee7df" emissiveIntensity={1.5} />
      </mesh>
      <mesh position={[3.5, 1.8, -5]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial color="#f472b6" emissive="#f472b6" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}
