"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

export default function GlobeCanvas() {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Globe />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Globe() {
  const { scene } = useGLTF("/3d/globes/planet_earth.glb");
  return <primitive object={scene} scale={3} />;
}
