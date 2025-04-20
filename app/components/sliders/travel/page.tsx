import CodePreview from "@/components/CodePreview";
import InvincibleSlider from "@/demo/sliders/Invincible";
import TravelSlider from "@/demo/sliders/Travel";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden"
        code=""
        component={<TravelSlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
