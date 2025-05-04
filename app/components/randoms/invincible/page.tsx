import CodePreview from "@/components/CodePreview";
import InvincibleSlider, {
  InvincibleSliderCode,
} from "@/demo/randoms/Invincible";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden"
        code={InvincibleSliderCode}
        component={<InvincibleSlider />}
        componentClassName="h-[70vh] w-full"
        background="#4444"
      />
    </div>
  );
}
