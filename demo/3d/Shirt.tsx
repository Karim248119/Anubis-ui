"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";
import {
  Expand,
  ImageUp,
  Palette,
  RotateCcw,
  UnfoldHorizontal,
  UnfoldVertical,
} from "lucide-react";

const Logos = [
  "/3d/shirt/textures/anubis.png",
  "/3d/shirt/textures/zoro.png",
  "/3d/shirt/textures/mihawk.png",
  "/3d/shirt/textures/lannister.png",
  "/3d/shirt/textures/stark.png",
  "/3d/shirt/textures/deathNote.png",
  "/3d/shirt/textures/guts.png",
  "/3d/shirt/textures/eren.png",
  "/3d/shirt/textures/eren2.png",
  "/3d/shirt/textures/toji.png",
  "/3d/shirt/textures/bleach.png",
  "/3d/shirt/textures/itachi.png",
  "/3d/shirt/textures/ww.png",
  "/3d/shirt/textures/jp.png",
  "/3d/shirt/textures/batman.png",
  "/3d/shirt/textures/redhood.png",
  "/3d/shirt/textures/friends.png",
  "/3d/shirt/textures/barney.png",
  "/3d/shirt/textures/lana.png",
  "/3d/shirt/textures/12.png",
  "/3d/shirt/textures/messi2.png",
  "/3d/shirt/textures/r&m.png",
  "/3d/shirt/textures/fc.png",
  "/3d/shirt/textures/am.png",
];

export default function ShirtCanvas() {
  const [logoData, setLogoData] = useState<{
    type: "default" | "uploaded";
    url: string;
    file?: File;
  }>({
    type: "default",
    url: "/3d/shirt/textures/anubis.png",
  });
  const [color, setColor] = useState("#111");
  const [yValue, setYValue] = useState(500);
  const [xValue, setXValue] = useState(150);
  const [size, setSize] = useState(300);

  return (
    <div className="w-full h-full relative">
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <Shirt
          logoData={logoData}
          color={color}
          y={yValue}
          x={xValue}
          size={size}
        />
        <Environment preset="city" />
        <OrbitControls enableZoom={false} />
      </Canvas>

      <div className=" absolute top-0 right-0  flex flex-col items-center gap-4">
        <div className="w-60 h-12 flex items-center justify-center gap-2 bg-foreground/20 p-3 rounded-lg border">
          <Palette />
          <span className="text-sm">Select Color</span>
          <div className="relative inline-block w-8 h-8 rounded-full overflow-hidden shadow-md border border-gray-300 cursor-pointer hover:scale-110 transition">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 cursor-pointer"
            />
          </div>
        </div>
        <div className="w-60 h-12 flex items-center justify-between gap-2 bg-foreground/20 p-3 rounded-lg border relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <ImageUp />
            <span className="text-sm">Upload Logo</span>
          </div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                const file = e.target.files[0];
                setLogoData({
                  type: "uploaded",
                  url: URL.createObjectURL(file),
                  file,
                });

                // 👇 clear the input so selecting the same file again triggers onChange
                e.target.value = "";
              }
            }}
            className="w-40 cursor-pointer opacity-0"
          />
        </div>
        <button
          className="w-60 h-12 flex items-center justify-center gap-2 bg-foreground/20 p-3 rounded-lg border"
          onClick={() => {
            setLogoData({
              type: "default",
              url: "/3d/shirt/textures/anubis.png",
            });
            setColor("#111");
            setYValue(500);
            setXValue(150);
            setSize(300);
          }}
        >
          <RotateCcw />
          Reset All
        </button>
      </div>
      <div className=" absolute top-0 left-0  flex flex-col items-center gap-4">
        <div className="w-60 h-12 flex items-center justify-between gap-2 bg-foreground/20 p-3 rounded-lg border">
          <UnfoldHorizontal />
          <input
            type="range"
            min="100"
            max="500"
            step="1"
            value={xValue}
            onChange={(e) => setXValue(parseInt(e.target.value))}
            className="w-40 cursor-pointer "
          />
        </div>
        <div className="w-60 h-12 flex items-center justify-between gap-2 bg-foreground/20 p-3 rounded-lg border">
          <UnfoldVertical />
          <input
            type="range"
            min="400"
            max="900"
            step="1"
            value={yValue}
            onChange={(e) => setYValue(parseInt(e.target.value))}
            className="w-40 cursor-pointer "
          />
        </div>
        <div className="w-60 h-12 flex items-center justify-between gap-2 bg-foreground/20 p-3 rounded-lg border">
          <Expand />
          <input
            type="range"
            min="50"
            max="500"
            step="1"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="w-40 cursor-pointer "
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[20vh] bg-foreground/20 rounded-lg grid grid-rows-2 grid-cols-12 overflow-hidden border">
        {Logos.map((l, i) => (
          <button
            key={i}
            onClick={() => setLogoData({ type: "default", url: l })}
            className="w-full h-full border p-2"
          >
            <img src={l} alt="logo" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}

function Shirt({
  logoData,
  color,
  y,
  x,
  size,
}: {
  logoData: {
    type: "default" | "uploaded";
    url: string;
    file?: File;
  };
  color: string;
  y: number;
  x: number;
  size: number;
}) {
  const { scene } = useGLTF("/3d/shirt/scene.gltf");
  useMemo(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const yOffset = box.min.y;
    scene.position.y -= yOffset;
  }, [scene]);

  function useDynamicShirtTexture() {
    const [texture, setTexture] = useState<THREE.Texture | null>(null);

    useEffect(() => {
      const canvas = document.createElement("canvas");
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const drawTexture = (logo: HTMLImageElement) => {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.filter = "saturate(1.5)";
        ctx.drawImage(logo, x, y, size, size);

        const tex = new THREE.CanvasTexture(canvas);
        tex.needsUpdate = true;
        setTexture(tex);
      };

      if (!logoData?.url) return;

      const logo = new Image();
      logo.crossOrigin = "anonymous";
      logo.src = logoData.url;
      logo.onload = () => drawTexture(logo);
      if (logo.complete) drawTexture(logo);
    }, [color, logoData, y, x, size]);

    return texture;
  }

  const texture = useDynamicShirtTexture();

  const fabricMaterial = useMemo(() => {
    if (!texture) return null;
    return new THREE.MeshStandardMaterial({
      map: texture,
      roughness: 0.8,
      metalness: 0.0,
    });
  }, [texture]);

  const renderMeshes = (object: THREE.Object3D): React.ReactNode => {
    if ((object as THREE.Mesh).isMesh && (object as THREE.Mesh).geometry) {
      if (!fabricMaterial) return null;

      return (
        <mesh
          key={object.uuid}
          geometry={(object as THREE.Mesh).geometry}
          material={fabricMaterial}
          position={object.position}
          rotation={object.rotation}
          scale={object.scale}
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

  return <group scale={3}>{renderMeshes(scene)}</group>;
}
