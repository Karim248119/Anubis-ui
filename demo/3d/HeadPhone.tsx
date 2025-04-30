"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Float,
  Html,
  Loader,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useMemo, useState } from "react";

import red from "../../public/3d/headphone/red.png";
import blue from "../../public/3d/headphone/blue.png";
import black from "../../public/3d/headphone/black.png";
import gold from "../../public/3d/headphone/gold.png";
import gray from "../../public/3d/headphone/gray.png";
import Image from "next/image";

export default function HeadphoneCanvas() {
  const [color, setColor] = useState("#ff0000");

  const COLORS = [
    { label: "Red", color: "#ff0000", img: red },
    { label: "Blue", color: "#0000ff", img: blue },
    { label: "Black", color: "#111111", img: black },
    { label: "Gray", color: "#808080", img: gray },
    { label: "Gold", color: "#daa520", img: gold },
  ];

  return (
    <div className="w-full h-full relative ">
      <Canvas shadows camera={{ position: [0, 15, 100], fov: 45 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Headphone color={color} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 flex gap-5">
        {COLORS.map((c) => (
          <button
            key={c.label}
            onClick={() => setColor(c.color)}
            className={`w-14 h-14 duration-300 ${
              c.color === color ? "scale-75" : "scale-100"
            }`}
          >
            <Image
              src={c.img}
              alt={c.label}
              width={100}
              height={100}
              className="w-full h-full "
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Headphone({ color = "#ff0000" }: { color?: string }) {
  const { scene } = useGLTF("/3d/headphone2.glb");
  const coloredMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.4,
        clearcoat: 0.3,
        clearcoatRoughness: 0.1,
        reflectivity: 0.5,
        envMapIntensity: 1.5,
        transmission: 1,
      }),
    [color]
  );

  const renderMeshes = (object: THREE.Object3D): React.ReactNode => {
    if ((object as THREE.Mesh).isMesh && (object as THREE.Mesh).geometry) {
      const mesh = object as THREE.Mesh;
      const materialName = (mesh.material as THREE.Material)?.name;
      const isBodyMaterial = materialName === "Headphone_Default";

      return (
        <mesh
          key={object.uuid}
          geometry={mesh.geometry}
          material={isBodyMaterial ? coloredMaterial : mesh.material}
          position={mesh.position}
          rotation={mesh.rotation}
          scale={mesh.scale}
          castShadow
          receiveShadow
        />
      );
    }

    return (
      <group
        key={object.uuid}
        position={object.position}
        rotation={object.rotation}
        scale={object.scale}
      >
        {object.children.map((child) => renderMeshes(child))}
      </group>
    );
  };

  return (
    <group scale={2.3} position={[0, -20, 0]}>
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        {renderMeshes(scene)}
      </Float>
    </group>
  );
}

export const HeadphoneCanvasCode = `"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Float,
  Html,
  Loader,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useMemo, useState } from "react";

import red from "../../public/3d/headphone/red.png";
import blue from "../../public/3d/headphone/blue.png";
import black from "../../public/3d/headphone/black.png";
import gold from "../../public/3d/headphone/gold.png";
import gray from "../../public/3d/headphone/gray.png";
import Image from "next/image";

export default function HeadphoneCanvas() {
  const [color, setColor] = useState("#ff0000");

  const COLORS = [
    { label: "Red", color: "#ff0000", img: red },
    { label: "Blue", color: "#0000ff", img: blue },
    { label: "Black", color: "#111111", img: black },
    { label: "Gray", color: "#808080", img: gray },
    { label: "Gold", color: "#daa520", img: gold },
  ];

  return (
    <div className="w-full h-full relative ">
      <Canvas shadows camera={{ position: [0, 15, 100], fov: 45 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Headphone color={color} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 flex gap-5">
        {COLORS.map((c) => (
          <button
            key={c.label}
            onClick={() => setColor(c.color)}
            className={\`w-14 h-14 duration-300 \${
              c.color === color ? "scale-75" : "scale-100"
            }\`}
          >
            <Image
              src={c.img}
              alt={c.label}
              width={100}
              height={100}
              className="w-full h-full "
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Headphone({ color = "#ff0000" }: { color?: string }) {
  const { scene } = useGLTF("/3d/headphone2.glb");
  const coloredMaterial = useMemo(
    () =>
      new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.4,
        clearcoat: 0.3,
        clearcoatRoughness: 0.1,
        reflectivity: 0.5,
        envMapIntensity: 1.5,
        transmission: 1,
      }),
    [color]
  );

  const renderMeshes = (object: THREE.Object3D): React.ReactNode => {
    if ((object as THREE.Mesh).isMesh && (object as THREE.Mesh).geometry) {
      const mesh = object as THREE.Mesh;
      const materialName = (mesh.material as THREE.Material)?.name;
      const isBodyMaterial = materialName === "Headphone_Default";

      return (
        <mesh
          key={object.uuid}
          geometry={mesh.geometry}
          material={isBodyMaterial ? coloredMaterial : mesh.material}
          position={mesh.position}
          rotation={mesh.rotation}
          scale={mesh.scale}
          castShadow
          receiveShadow
        />
      );
    }

    return (
      <group
        key={object.uuid}
        position={object.position}
        rotation={object.rotation}
        scale={object.scale}
      >
        {object.children.map((child) => renderMeshes(child))}
      </group>
    );
  };

  return (
    <group scale={2.3} position={[0, -20, 0]}>
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={1}
        floatingRange={[-0.1, 0.1]}
      >
        {renderMeshes(scene)}
      </Float>
    </group>
  );
}
`;
