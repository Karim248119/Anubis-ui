import CodePreview from "@/components/CodePreview";
import InvincibleSlider from "@/demo/sliders/Invincible";
import MythSlider, { MythSliderCode } from "@/demo/sliders/Myth";
import ProductsSlider from "@/demo/sliders/Products";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden"
        code={MythSliderCode}
        component={<ProductsSlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
