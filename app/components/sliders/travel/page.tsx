import CodePreview from "@/components/CodePreview";
import InvincibleSlider from "@/demo/sliders/Invincible";
import TravelSlider, { TravelSliderCode } from "@/demo/sliders/Travel";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
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
