import CodePreview from "@/components/CodePreview";
import Collapse1 from "@/demo/collapse/Collapse1";
import Collapse2 from "@/demo/collapse/Collapse2";
import Collapse3 from "@/demo/collapse/Collapse3";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full space-y-5">
      <CodePreview
        className="overflow-hidden"
        code=""
        component={<Collapse1 />}
        componentClassName="h-screen w-full"
        background="#000"
      />
      <CodePreview
        code=""
        component={<Collapse2 />}
        componentClassName="h-[55vh]"
        background="#281B2F"
      />
      <CodePreview
        code=""
        component={<Collapse3 />}
        componentClassName="h-[55vh]"
        background="#000"
      />
    </div>
  );
}
