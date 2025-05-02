import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import ProductsSlider, { ProductsSliderCode } from "@/demo/sliders/Products";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <InstallCommand packages={"framer-motion"} />

      <CodePreview
        className="overflow-hidden"
        code={ProductsSliderCode}
        component={<ProductsSlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
