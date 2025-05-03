import CodePreview from "@/components/CodePreview";
import DownloadButton from "@/components/DownloadButton";
import InstallCommand from "@/components/InstallCommand";
import DesktopCanvas, { DesktopCanvasCode } from "@/demo/3d/Desktop";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <DownloadButton fileName="desktop.glb" fileUrl="/3d/gaming_desktop.glb" />
      <CodePreview
        code={DesktopCanvasCode}
        component={<DesktopCanvas />}
        componentClassName="h-[70vh] w-full"
      />
    </div>
  );
}
