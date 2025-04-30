import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import HeadphoneCanvas, { HeadphoneCanvasCode } from "@/demo/3d/HeadPhone";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <CodePreview
        code={HeadphoneCanvasCode}
        component={<HeadphoneCanvas />}
        componentClassName="h-[70vh] w-full"
      />
    </div>
  );
}
