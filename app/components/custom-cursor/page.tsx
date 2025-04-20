import CodePreview from "@/components/CodePreview";
import { CustomCursor } from "@/demo/CustomCursor";
import MusicPlayer from "@/demo/Music Player/MusicPlayer";
import React from "react";

export default function page() {
  return (
    <div>
      <CodePreview
        code=""
        component={<CustomCursor />}
        componentClassName="h-[70vh] w-full flex items-center justify-center"
      />
    </div>
  );
}
