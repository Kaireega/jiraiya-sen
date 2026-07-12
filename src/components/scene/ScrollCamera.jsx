import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ScrollCamera({ scrollProgress }) {
  const target = useRef({ y: 2, z: 8, rotX: -0.08 });

  useFrame((state) => {
    target.current.y = 2.2 - scrollProgress * 1.4;
    target.current.z = 8 - scrollProgress * 2.2;
    target.current.rotX = -0.08 - scrollProgress * 0.12;

    state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, target.current.y, 0.04);
    state.camera.position.z = THREE.MathUtils.lerp(state.camera.position.z, target.current.z, 0.04);
    state.camera.rotation.x = THREE.MathUtils.lerp(state.camera.rotation.x, target.current.rotX, 0.04);
    state.camera.lookAt(0, 0.4 - scrollProgress * 0.8, -2);
  });

  return null;
}
