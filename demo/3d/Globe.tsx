"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
  Html,
  Loader,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
export default function GlobeCanvas({
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
      <Canvas shadows camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Globe model={model} scale={scale} animationName={animationName} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Globe({
  model = "/3d/globes/planet_earth.glb",
  scale = 5,
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

export const GlobeCanvasCode = `
"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  useAnimations,
  Html,
  Loader,
} from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
export default function GlobeCanvas({
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
      <Canvas shadows camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Globe model={model} scale={scale} animationName={animationName} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}

function Globe({
  model = "/3d/globes/planet_earth.glb",
  scale = 5,
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
`;
