import CodePreview from "@/components/CodePreview";
import GallerySlider from "@/demo/sliders/Gallery";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden"
        code=""
        component={<GallerySlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
