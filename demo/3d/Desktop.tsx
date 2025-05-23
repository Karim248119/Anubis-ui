"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Loader,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";

export default function DesktopCanvas() {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [40, 10, 50], fov: 10 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Desktop />
          <Environment preset="apartment" />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Desktop() {
  const { scene } = useGLTF("/3d/gaming_desktop.glb");
  return <primitive object={scene} scale={1} />;
}

export const DesktopCanvasCode = `
"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Loader,
  Html,
} from "@react-three/drei";
import { Suspense } from "react";

export default function DesktopCanvas() {
  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [40, 10, 50], fov: 10 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Desktop />
          <Environment preset="apartment" />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Desktop() {
  const { scene } = useGLTF("/3d/gaming_desktop.glb");
  return <primitive object={scene} scale={1} />;
}
`;
