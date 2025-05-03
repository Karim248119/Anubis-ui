import CodePreview from "@/components/CodePreview";
import InstallCommand from "@/components/InstallCommand";
import Nav1, { Nav1Code } from "@/demo/navbars/Nav1";
import Nav2, { Nav2Code } from "@/demo/navbars/Nav2";
import Nav3, { Nav3Code } from "@/demo/navbars/Nav3";
import Nav4, { Nav4Code } from "@/demo/navbars/Nav4";
import React from "react";

export default function page() {
  return (
    <div className="w-full min-h-screen space-y-5">
      <InstallCommand packages={"framer-motion"} />
      <CodePreview
        code={Nav1Code}
        className="h-[80vh] relative overflow-hidden"
        component={<Nav1 />}
      />
      <CodePreview
        code={Nav2Code}
        componentClassName="h-[70vh] relative"
        component={<Nav2 />}
      />
      <CodePreview
        code={Nav3Code}
        componentClassName="h-[70vh] relative"
        component={<Nav3 />}
        background="#000"
      />
      <CodePreview
        code={Nav4Code}
        componentClassName="h-[90vh] overflow-hidden relative"
        component={<Nav4 />}
        background="#000"
      />
    </div>
  );
}
