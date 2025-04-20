import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import PhoneCanvas from "@/demo/3d/Phone";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <CodePreview
        code=""
        component={<PhoneCanvas />}
        componentClassName="h-[70vh] w-full"
      />
    </div>
  );
}
