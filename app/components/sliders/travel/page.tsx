import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import TravelSlider, { TravelSliderCode } from "@/demo/sliders/Travel";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages={"framer-motion"} />

      <CodePreview
        className="overflow-hidden"
        code={TravelSliderCode}
        component={<TravelSlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
