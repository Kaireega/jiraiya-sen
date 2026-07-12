import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function Fireflies({ count = 60, scrollProgress, audioActive }) {
  const points = useRef();
  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = Math.random() * 5 + 0.5;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
      speeds[i] = 0.3 + Math.random() * 0.8;
    }
    return { positions, speeds };
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    const arr = points.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i += 1) {
      const speed = data.speeds[i] * (audioActive ? 1.4 : 1);
      arr[i * 3] += Math.sin(t * speed + i) * 0.003;
      arr[i * 3 + 1] += Math.cos(t * speed * 0.7 + i) * 0.002;
      arr[i * 3 + 2] += Math.sin(t * 0.5 + i) * 0.001;
    }
    points.current.geometry.attributes.position.needsUpdate = true;
    points.current.rotation.y = scrollProgress * 0.3;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={data.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#fbbf24"
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
