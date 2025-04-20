"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF, Float } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useState } from "react";

export default function HeadphoneCanvas() {
  const [color, setColor] = useState("#ff0000");

  const COLORS = [
    { label: "Red", color: "#ff0000" },
    { label: "Blue", color: "#0000ff" },
    { label: "Black", color: "#111111" },
    { label: "Gray", color: "#808080" },
    { label: "Gold", color: "#daa520" },
  ];

  return (
    <div className="w-full h-full relative ">
      <Canvas shadows camera={{ position: [0, 15, 100], fov: 45 }}>
        <ambientLight intensity={3} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <Headphone color={color} />
        <Environment preset="sunset" />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className="absolute bottom-5 right-1/2 translate-x-1/2 flex gap-4 bg-foreground/20 p-4 rounded-full">
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
