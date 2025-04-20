import CodePreview from "@/components/CodePreview";
import JewellerySlider from "@/demo/sliders/Jewllery";
import MythSlider from "@/demo/sliders/Myth";
import SuitsSlider from "@/demo/sliders/Suits";
import TravelSlider from "@/demo/sliders/Travel";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden p-0"
        code=""
        component={<JewellerySlider />}
        componentClassName="h-[80vh] w-full"
        background="#000"
      />
    </div>
  );
}
