"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";

export default function CarViewer() {
  const [color, setColor] = useState("#ff0000");

  const COLORS = [
    { label: "Red", color: "#ff0000" },
    { label: "Blue", color: "#0000ff" },
    { label: "Black", color: "#222222" },
    { label: "White", color: "#f0f0f0" },
    { label: "Green", color: "#00ff00" },
    { label: "Yellow", color: "#ffff00" },
    { label: "Brown", color: "#a52a2a" },
    { label: "Pink", color: "#ed12bf" },
    { label: "Orange", color: "#ed8765" },
  ];

  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [0, 0, 50], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Car color={color} />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 flex gap-4 bg-white/20 p-4 rounded-full">
        {COLORS.map((c) => (
          <button
            key={c.label}
            onClick={() => setColor(c.color)}
            className={`w-8 h-8 rounded-full ${
              c.color === color ? "ring-2 ring-foreground" : ""
            }`}
            style={{ backgroundColor: c.color }}
          />
        ))}
      </div>
    </div>
  );
}

function Car({ color = "#000" }: { color?: string }) {
  const { scene } = useGLTF("/3d/car/scene.gltf");

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
