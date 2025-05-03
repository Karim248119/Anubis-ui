import CodePreview from "@/components/CodePreview";
import DownloadButton from "@/components/DownloadButton";
import InstallCommand from "@/components/InstallCommand";
import CarCanvas from "@/demo/3d/Car";
import ShirtCanvas, { ShirtCanvasCode } from "@/demo/3d/Shirt";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <DownloadButton fileName="shirt.zip" fileUrl="/3d/shirt.zip" />
      <CodePreview
        code={ShirtCanvasCode}
        component={<ShirtCanvas />}
        componentClassName="h-[70vh] w-full"
      />
    </div>
  );
}
