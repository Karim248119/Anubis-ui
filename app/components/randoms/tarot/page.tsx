import CodePreview from "@/components/CodePreview";
import React from "react";
import Tarot, { TarotCode } from "@/demo/randoms/Tarot";
import InstallCommand from "@/components/InstallCommand";

export default function page() {
  return (
    <div>
      <InstallCommand packages={"framer-motion"} />
      <CodePreview
        code={TarotCode}
        component={<Tarot />}
        componentClassName="h-[90vh] w-full"
        className="p-0"
        background="#000"
      />
    </div>
  );
}
