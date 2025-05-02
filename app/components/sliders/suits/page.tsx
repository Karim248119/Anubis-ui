import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import SuitsSlider, { SuitsSliderCode } from "@/demo/sliders/Suits";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages={"framer-motion"} />
      <CodePreview
        className="overflow-hidden p-0"
        code={SuitsSliderCode}
        component={<SuitsSlider />}
        componentClassName="h-[80vh] w-full"
        background="#000"
      />
    </div>
  );
}
