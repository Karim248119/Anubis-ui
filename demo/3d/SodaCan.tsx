"use client";

import { Canvas } from "@react-three/fiber";
import { Html, Loader, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { forwardRef, ReactNode, Suspense, useState } from "react";
import { Float, OrbitControls, Environment } from "@react-three/drei";

import { Group } from "three";
import {
  GiCherry,
  GiGrapes,
  GiLemon,
  GiStrawberry,
  GiWatermelon,
} from "react-icons/gi";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/3d/soda/labels/lemon-lime.png",
  grape: "/3d/soda/labels/grape.png",
  blackCherry: "/3d/soda/labels/cherry.png",
  strawberryLemonade: "/3d/soda/labels/strawberry.png",
  watermelon: "/3d/soda/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCanCanvas({ scale = 4 }: SodaCanProps) {
  const [flavor, setFlavor] = useState<keyof typeof flavorTextures>("grape");
  const FLAVORS = [
    { key: "blackCherry", icon: <GiCherry />, color: "#8B0000" },
    { key: "grape", icon: <GiGrapes />, color: "#6F2DA8" },
    { key: "strawberryLemonade", icon: <GiStrawberry />, color: "#FF5E78" },
    { key: "lemonLime", icon: <GiLemon />, color: "#C7EA46" },
    { key: "watermelon", icon: <GiWatermelon />, color: "#FA5C5C" },
  ];
  return (
    <div className="w-1/2 h-full flex">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <FloatingCan flavor={flavor} scale={scale} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="flex flex-col justify-center gap-2">
        {FLAVORS.map((f: any) => (
          <button
            key={f.key}
            onClick={() => setFlavor(f.key)}
            className="p-2 border rounded-full relative overflow-hidden group"
            style={{
              backgroundColor: f.key === flavor ? f.color : "transparent",
            }}
          >
            <span className="relative z-10"> {f.icon}</span>
            <div
              className="w-full h-full absolute top-full left-0 group-hover:top-0 duration-300 "
              style={{ backgroundColor: f.color }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function SodaCanMesh({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/3d/soda/Soda-can.gltf") as GLTF & {
    nodes: {
      cylinder: THREE.Mesh;
      cylinder_1: THREE.Mesh;
      Tab: THREE.Mesh;
    };
  };

  const labels = useTexture(flavorTextures);

  Object.values(labels).forEach((label) => (label.flipY = false));

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
  scale?: number;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      scale,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCanMesh flavor={flavor} scale={scale} />
        </Float>
      </group>
    );
  }
);

FloatingCan.displayName = "FloatingCan";

export const SodaCanCanvasCode = `
"use client";

import { Canvas } from "@react-three/fiber";
import { Html, Loader, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { forwardRef, ReactNode, Suspense, useState } from "react";
import { Float, OrbitControls, Environment } from "@react-three/drei";

import { Group } from "three";
import {
  GiCherry,
  GiGrapes,
  GiLemon,
  GiStrawberry,
  GiWatermelon,
} from "react-icons/gi";

useGLTF.preload("/Soda-can.gltf");

const flavorTextures = {
  lemonLime: "/3d/soda/labels/lemon-lime.png",
  grape: "/3d/soda/labels/grape.png",
  blackCherry: "/3d/soda/labels/cherry.png",
  strawberryLemonade: "/3d/soda/labels/strawberry.png",
  watermelon: "/3d/soda/labels/watermelon.png",
};

const metalMaterial = new THREE.MeshStandardMaterial({
  roughness: 0.3,
  metalness: 1,
  color: "#bbbbbb",
});

export type SodaCanProps = {
  flavor?: keyof typeof flavorTextures;
  scale?: number;
};

export function SodaCanCanvas({ scale = 4 }: SodaCanProps) {
  const [flavor, setFlavor] = useState<keyof typeof flavorTextures>("grape");
  const FLAVORS = [
    { key: "blackCherry", icon: <GiCherry />, color: "#8B0000" },
    { key: "grape", icon: <GiGrapes />, color: "#6F2DA8" },
    { key: "strawberryLemonade", icon: <GiStrawberry />, color: "#FF5E78" },
    { key: "lemonLime", icon: <GiLemon />, color: "#C7EA46" },
    { key: "watermelon", icon: <GiWatermelon />, color: "#FA5C5C" },
  ];
  return (
    <div className="w-1/2 h-full flex">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <FloatingCan flavor={flavor} scale={scale} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <div className="flex flex-col justify-center gap-2">
        {FLAVORS.map((f: any) => (
          <button
            key={f.key}
            onClick={() => setFlavor(f.key)}
            className="p-2 border rounded-full relative overflow-hidden group"
            style={{
              backgroundColor: f.key === flavor ? f.color : "transparent",
            }}
          >
            <span className="relative z-10"> {f.icon}</span>
            <div
              className="w-full h-full absolute top-full left-0 group-hover:top-0 duration-300 "
              style={{ backgroundColor: f.color }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function SodaCanMesh({
  flavor = "blackCherry",
  scale = 2,
  ...props
}: SodaCanProps) {
  const { nodes } = useGLTF("/3d/soda/Soda-can.gltf") as GLTF & {
    nodes: {
      cylinder: THREE.Mesh;
      cylinder_1: THREE.Mesh;
      Tab: THREE.Mesh;
    };
  };

  const labels = useTexture(flavorTextures);

  Object.values(labels).forEach((label) => (label.flipY = false));

  const label = labels[flavor];

  return (
    <group {...props} dispose={null} scale={scale} rotation={[0, -Math.PI, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder as THREE.Mesh).geometry}
        material={metalMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.cylinder_1 as THREE.Mesh).geometry}
      >
        <meshStandardMaterial roughness={0.15} metalness={0.7} map={label} />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Tab as THREE.Mesh).geometry}
        material={metalMaterial}
      />
    </group>
  );
}

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  rotationIntensity?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  children?: ReactNode;
  scale?: number;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      rotationIntensity = 1,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      scale,
      ...props
    },
    ref
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <SodaCanMesh flavor={flavor} scale={scale} />
        </Float>
      </group>
    );
  }
);

FloatingCan.displayName = "FloatingCan";
`;
