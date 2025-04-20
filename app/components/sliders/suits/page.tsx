import CodePreview from "@/components/CodePreview";
import SuitsSlider from "@/demo/sliders/Suits";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden p-0"
        code=""
        component={<SuitsSlider />}
        componentClassName="h-[80vh] w-full"
        background="#000"
      />
    </div>
  );
}
