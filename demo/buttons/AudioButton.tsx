"use client";
import React from "react";

export default function AudioButton({
  src,
  color,
}: {
  src: string;
  color: string;
}) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  React.useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <div>
      <audio src={src} ref={audioRef} className="hidden" autoPlay loop />
      <button
        onClick={toggleAudio}
        className="w-14 h-14 flex items-center justify-center rounded-full border-2 p-1"
        style={{ borderColor: color }}
      >
        <svg
          width="40"
          height="20"
          viewBox="0 0 40 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d={isPlaying ? "M0 10 Q 10 0, 20 10 T 40 10" : "M0 10 L40 10"}
            stroke={color}
            strokeWidth="1.5"
            fill="none"
          />
        </svg>
      </button>
    </div>
  );
}
