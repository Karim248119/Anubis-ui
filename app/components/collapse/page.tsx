import CodePreview from "@/components/CodePreview";
import Collapse1, { Collapse1Code } from "@/demo/collapse/Collapse1";
import Collapse2, { Collapse2Code } from "@/demo/collapse/Collapse2";
import Collapse3, { Collapse3Code } from "@/demo/collapse/Collapse3";
import Collapse4, { Collapse4Code } from "@/demo/collapse/Collapse4";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full space-y-5">
      <CodePreview
        className="overflow-hidden"
        code={Collapse1Code}
        component={<Collapse1 />}
        componentClassName="h-screen w-full"
        background="#000"
      />
      <CodePreview
        code={Collapse2Code}
        component={<Collapse2 />}
        componentClassName="h-[55vh]"
        background="#281B2F"
      />
      <CodePreview
        code={Collapse3Code}
        component={<Collapse3 />}
        componentClassName="h-[55vh]"
        background="#000"
      />
      <CodePreview
        code={Collapse4Code}
        component={<Collapse4 />}
        componentClassName="h-[65vh]"
        background="#000"
      />
    </div>
  );
}
