import CodePreview from "@/components/CodePreview";
import H from "@/components/H";
import InstallCommand from "@/components/InstallCommand";
import VerticalScrollSlider, {
  verticalSliderCode,
} from "@/demo/sliders/VerticalScroll";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full space-y-10">
      <InstallCommand packages={"gsap"} />
      <div>
        <H variant="code">Code</H>
        <CodePreview
          code={verticalSliderCode}
          codeOnly
          componentClassName="h-screen"
        />
      </div>
      <div className="w-full">
        <H variant="preview">Preview</H>
        <VerticalScrollSlider />
      </div>
    </div>
  );
}
