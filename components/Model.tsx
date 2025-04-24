"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
export default function ModelCanvas({
  model,
  scale,
  animationName,
}: {
  model?: string;
  scale?: number;
  animationName?: string;
}) {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [3, 0, 3], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Globe model={model} scale={scale} animationName={animationName} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Globe({
  model = "/3d/globes/planet_earth.glb",
  scale = 1,
  animationName = "Earth Turn",
}: {
  model?: string;
  scale?: number;
  animationName?: string;
}) {
  const group = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF(model);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    const action = actions[animationName];
    if (action) {
      action.reset().play();
    }
  }, [actions]);

  return <primitive ref={group} object={scene} scale={scale} />;
}
