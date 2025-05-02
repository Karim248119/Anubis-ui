import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import GallerySlider, { GallerySliderCode } from "@/demo/sliders/Gallery";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages={"framer-motion"} />

      <CodePreview
        className="overflow-hidden"
        code={GallerySliderCode}
        component={<GallerySlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
