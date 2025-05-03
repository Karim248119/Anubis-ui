import CodePreview from "@/components/CodePreview";
import DownloadButton from "@/components/DownloadButton";
import InstallCommand from "@/components/InstallCommand";
import CarCanvas, { CarCanvasCode } from "@/demo/3d/Car";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <DownloadButton fileName="car.glb" fileUrl="/3d/car.glb" />
      <CodePreview
        code={CarCanvasCode}
        component={<CarCanvas />}
        componentClassName="h-[70vh] w-full"
      />
    </div>
  );
}
