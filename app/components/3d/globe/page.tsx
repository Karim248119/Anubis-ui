import CodePreview from "@/components/CodePreview";
import DownloadButton from "@/components/DownloadButton";
import InstallCommand from "@/components/InstallCommand";
import GlobeCanvas, { GlobeCanvasCode } from "@/demo/3d/Globe";
import StarsCanvas from "@/demo/3d/Stars";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full space-y-5">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <DownloadButton
        fileName="earth.glb"
        fileUrl="/3d/globes/planet_earth.glb"
      />
      <CodePreview
        code={GlobeCanvasCode}
        component={<GlobeCanvas />}
        componentClassName="h-[70vh] w-full"
      />
      <DownloadButton fileName="earth.glb" fileUrl="/3d/globes/earth.glb" />
      <CodePreview
        code={GlobeCanvasCode}
        component={
          <GlobeCanvas
            model="/3d/globes/earth.glb"
            scale={20}
            animationName="Animation"
          />
        }
        componentClassName="h-[70vh] w-full "
      />
      <DownloadButton
        fileName="earth.glb"
        fileUrl="/3d/globes/earth_spots.glb"
      />
      <CodePreview
        code={GlobeCanvasCode}
        component={
          <GlobeCanvas
            model="/3d/globes/earth_spots.glb"
            scale={200}
            animationName="Take 001"
          />
        }
        componentClassName="h-[70vh] w-full "
      />
      <DownloadButton fileName="earth.glb" fileUrl="/3d/globes/sci.glb" />
      <CodePreview
        code={GlobeCanvasCode}
        component={
          <GlobeCanvas
            model="/3d/globes/sci.glb"
            scale={15}
            animationName="Animation"
          />
        }
        componentClassName="h-[70vh] w-full "
      />
    </div>
  );
}
