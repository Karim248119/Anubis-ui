import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import ZodiacSlider, { ZodiacSliderCode } from "@/demo/sliders/Zodiac";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages={"gsap"} />

      <CodePreview
        className="overflow-hidden"
        code={ZodiacSliderCode}
        component={<ZodiacSlider />}
        componentClassName="h-[80vh] w-full"
        background="#4444"
      />
    </div>
  );
}
