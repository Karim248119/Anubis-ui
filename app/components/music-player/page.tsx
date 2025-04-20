import CodePreview from "@/components/CodePreview";
import MusicPlayer, { MusicPlayerCode } from "@/demo/Music Player/MusicPlayer";
import React from "react";

export default function page() {
  return (
    <div>
      <CodePreview
        code={MusicPlayerCode}
        component={<MusicPlayer />}
        componentClassName="h-[80vh] w-full"
      />
    </div>
  );
}
