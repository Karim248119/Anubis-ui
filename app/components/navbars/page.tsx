import CodePreview from "@/components/CodePreview";
import Nav1 from "@/demo/navbars/Nav1";
import Nav2 from "@/demo/navbars/Nav2";
import Nav3 from "@/demo/navbars/Nav3";
import Nav4 from "@/demo/navbars/Nav4";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen space-y-5">
      <CodePreview
        code=""
        className="h-[80vh] relative overflow-hidden"
        component={<Nav1 />}
      />
      <CodePreview
        code=""
        componentClassName="h-[70vh] relative"
        component={<Nav2 />}
      />
      <CodePreview
        code=""
        componentClassName="h-[70vh] relative"
        component={<Nav3 />}
        background="#000"
      />
      <CodePreview
        code=""
        componentClassName="h-[90vh] overflow-hidden relative"
        component={<Nav4 />}
        background="#000"
      />
    </div>
  );
}
