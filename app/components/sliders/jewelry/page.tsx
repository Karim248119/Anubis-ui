import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import JewelrySlider, { JewelrySliderCode } from "@/demo/sliders/Jewllery";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages={"framer-motion"} />

      <CodePreview
        className="overflow-hidden p-0"
        code={JewelrySliderCode}
        component={<JewelrySlider />}
        componentClassName="h-[80vh] w-full"
        background="#000"
      />
    </div>
  );
}
