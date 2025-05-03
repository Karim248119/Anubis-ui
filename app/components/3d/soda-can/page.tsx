import CodePreview from "@/components/CodePreview";
import DownloadButton from "@/components/DownloadButton";
import InstallCommand from "@/components/InstallCommand";
import { SodaCanCanvas, SodaCanCanvasCode } from "@/demo/3d/SodaCan";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <DownloadButton fileName="soda.zip" fileUrl="/3d/soda.zip" />
      <CodePreview
        code={SodaCanCanvasCode}
        component={<SodaCanCanvas />}
        componentClassName="h-[70vh] w-full"
      />
    </div>
  );
}
