"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Html,
  Loader,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useMemo, useState } from "react";

import black from "../../public/3d/car/black.png";
import white from "../../public/3d/car/white.png";
import red from "../../public/3d/car/red.png";
import pink from "../../public/3d/car/pink.png";
import orange from "../../public/3d/car/orange.png";
import Image from "next/image";

export default function CarViewer() {
  const [color, setColor] = useState("#222222");

  const COLORS = [
    { label: "Black", color: "#222222", img: black },
    { label: "White", color: "#f0f0f0", img: white },
    { label: "Red", color: "#a52a2a", img: red },
    { label: "Pink", color: "#ed12bf", img: pink },
    { label: "Orange", color: "#ed8765", img: orange },
  ];

  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [20, 20, 50], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Car color={color} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 flex gap-4 bg-white/20 p-4 rounded-full">
        {COLORS.map((c) => (
          <button
            key={c.label}
            onClick={() => setColor(c.color)}
            className="w-10 h-10 group overflow-hidden rounded-full relative bg-black flex justify-center items-center"
          >
            <Image
              src={c.img}
              alt={c.label}
              width={100}
              height={100}
              className="absolute -bottom-2 rotate-12 group-hover:bottom-0 duration-300"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Car({ color = "#000" }: { color?: string }) {
  const { scene } = useGLTF("/3d/car.glb");

  // Memoized colored material function
  const coloredMaterial = useMemo(() => {
    return (originalMaterial: THREE.Material, isMetallic: boolean) => {
      if (
        originalMaterial instanceof THREE.MeshStandardMaterial &&
        isMetallic
      ) {
        // For metallic materials, keep metalness, roughness, and other properties
        const newMaterial = new THREE.MeshStandardMaterial({
          color,
          metalness: originalMaterial.metalness,
          roughness: originalMaterial.roughness,
          envMap: originalMaterial.envMap,
          emissive: originalMaterial.emissive,
        });
        return newMaterial;
      } else {
        // For non-metallic parts (like the chairs), use MeshBasicMaterial or another non-metallic material
        return new THREE.MeshBasicMaterial({ color });
      }
    };
  }, [color]);

  const renderMeshes = (object: THREE.Object3D): React.ReactNode => {
    if ((object as THREE.Mesh).isMesh && (object as THREE.Mesh).geometry) {
      const mesh = object as THREE.Mesh;
      const materialName = (mesh.material as THREE.Material)?.name;
      // Checking for body material (metallic) and chair material (non-metallic)
      const isBodyMaterial =
        materialName === "Aphong3SG1" || materialName === "Aphong6SG1";
      const isChairMaterial = materialName === "Aphong7SG1";

      return (
        <mesh
          key={object.uuid}
          geometry={mesh.geometry}
          material={
            isBodyMaterial
              ? coloredMaterial(mesh.material as THREE.Material, true)
              : isChairMaterial
              ? coloredMaterial(mesh.material as THREE.Material, false)
              : mesh.material
          }
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

  return <group scale={10}>{renderMeshes(scene)}</group>;
}

// roof:Aphong1SG1
// accessories:Aphong2SG1
// body:Aphong3SG1
// wheels:Aphong4SG1
// innerWheels:Aphong5SG1
// innerParts:Aphong6SG1 & Aphong10SG1
// chairs:Aphong7SG1
// board:Aphong8SG1
// floor:Aphong9SG1

export const CarCanvasCode = `"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Html,
  Loader,
} from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useMemo, useState } from "react";

import black from "../../public/3d/car/black.png";
import white from "../../public/3d/car/white.png";
import red from "../../public/3d/car/red.png";
import pink from "../../public/3d/car/pink.png";
import orange from "../../public/3d/car/orange.png";
import Image from "next/image";

export default function CarViewer() {
  const [color, setColor] = useState("#222222");

  const COLORS = [
    { label: "Black", color: "#222222", img: black },
    { label: "White", color: "#f0f0f0", img: white },
    { label: "Red", color: "#a52a2a", img: red },
    { label: "Pink", color: "#ed12bf", img: pink },
    { label: "Orange", color: "#ed8765", img: orange },
  ];

  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [20, 20, 50], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }
        >
          <Car color={color} />
          <Environment preset="city" />
        </Suspense>

        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 flex gap-4 bg-white/20 p-4 rounded-full">
        {COLORS.map((c) => (
          <button
            key={c.label}
            onClick={() => setColor(c.color)}
            className="w-10 h-10 group overflow-hidden rounded-full relative bg-black flex justify-center items-center"
          >
            <Image
              src={c.img}
              alt={c.label}
              width={100}
              height={100}
              className="absolute -bottom-2 rotate-12 group-hover:bottom-0 duration-300"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function Car({ color = "#000" }: { color?: string }) {
  const { scene } = useGLTF("/3d/car.glb");

  const coloredMaterial = useMemo(() => {
    return (originalMaterial: THREE.Material, isMetallic: boolean) => {
      if (
        originalMaterial instanceof THREE.MeshStandardMaterial &&
        isMetallic
      ) {
        const newMaterial = new THREE.MeshStandardMaterial({
          color,
          metalness: originalMaterial.metalness,
          roughness: originalMaterial.roughness,
          envMap: originalMaterial.envMap,
          emissive: originalMaterial.emissive,
        });
        return newMaterial;
      } else {
        return new THREE.MeshBasicMaterial({ color });
      }
    };
  }, [color]);

  const renderMeshes = (object: THREE.Object3D): React.ReactNode => {
    if ((object as THREE.Mesh).isMesh && (object as THREE.Mesh).geometry) {
      const mesh = object as THREE.Mesh;
      const materialName = (mesh.material as THREE.Material)?.name;
      const isBodyMaterial =
        materialName === "Aphong3SG1" || materialName === "Aphong6SG1";
      const isChairMaterial = materialName === "Aphong7SG1";

      return (
        <mesh
          key={object.uuid}
          geometry={mesh.geometry}
          material={
            isBodyMaterial
              ? coloredMaterial(mesh.material as THREE.Material, true)
              : isChairMaterial
              ? coloredMaterial(mesh.material as THREE.Material, false)
              : mesh.material
          }
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

  return <group scale={10}>{renderMeshes(scene)}</group>;
}

`;
