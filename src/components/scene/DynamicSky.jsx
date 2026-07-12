import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

export default function DynamicSky({ scrollProgress }) {
  const { scene } = useThree();
  const sunset = useMemo(() => new THREE.Color("#ff8c42"), []);
  const night = useMemo(() => new THREE.Color("#120a24"), []);

  useFrame(() => {
    scene.background = new THREE.Color().lerpColors(sunset, night, scrollProgress);
  });

  return null;
}
