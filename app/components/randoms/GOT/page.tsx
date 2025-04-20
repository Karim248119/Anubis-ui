import CodePreview from "@/components/CodePreview";
import GOT from "@/demo/randoms/GOT";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full">
      <CodePreview
        className="overflow-hidden"
        code=""
        component={<GOT />}
        componentClassName="h-auto w-full"
        background="#4444"
      />
    </div>
  );
}
