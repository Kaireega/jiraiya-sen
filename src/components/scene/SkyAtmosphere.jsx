import { useMemo } from "react";
import * as THREE from "three";

function lerpColor(a, b, t) {
  const color = new THREE.Color(a);
  return `#${color.lerp(new THREE.Color(b), t).getHexString()}`;
}

export default function SkyAtmosphere({ scrollProgress }) {
  const top = useMemo(
    () => lerpColor("#ff8c42", "#2d1b69", scrollProgress),
    [scrollProgress]
  );
  const bottom = useMemo(
    () => lerpColor("#ffd4a8", "#120a24", scrollProgress),
    [scrollProgress]
  );

  return (
    <mesh scale={[80, 40, 1]} position={[0, 8, -30]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={top} />
      <mesh position={[0, -20, 0]} scale={[1, 1, 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color={bottom} />
      </mesh>
    </mesh>
  );
}
