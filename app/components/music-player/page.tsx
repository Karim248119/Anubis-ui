import CodePreview from "@/components/CodePreview";
import MusicPlayer from "@/demo/Music Player/MusicPlayer";
import React from "react";

export default function page() {
  return (
    <div>
      <CodePreview
        code=""
        component={<MusicPlayer />}
        componentClassName="h-[80vh] w-full"
      />
    </div>
  );
}
