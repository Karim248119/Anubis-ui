import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import GlobeCanvas from "@/demo/3d/Globe";
import StarsCanvas from "@/demo/3d/Stars";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full space-y-5">
      <InstallCommand packages="@react-three/fiber@8.13.5 @react-three/drei@9.79.1" />
      <CodePreview
        code=""
        component={<GlobeCanvas />}
        componentClassName="h-[70vh] w-full"
      />

      <CodePreview
        code=""
        component={
          <GlobeCanvas
            model="/3d/globes/earth.glb"
            scale={20}
            animationName="Animation"
          />
        }
        componentClassName="h-[70vh] w-full "
      />
      <CodePreview
        code=""
        component={
          <GlobeCanvas
            model="/3d/globes/earth_spots.glb"
            scale={200}
            animationName="Take 001"
          />
        }
        componentClassName="h-[70vh] w-full "
      />
      <CodePreview
        code=""
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
