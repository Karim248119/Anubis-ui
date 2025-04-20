"use client";
import React, { useEffect, useRef, useState } from "react";
import { Music } from "./data";
import Typo from "@/components/Typo";
import { IoPause, IoPlay } from "react-icons/io5";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { PiPauseCircleFill, PiPlayCircleFill } from "react-icons/pi";
import { BiVolumeFull } from "react-icons/bi";

export default function MusicPlayer() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const handleNext = () => {
    setIsPlaying(false);
    setIndex((prevIndex) => (prevIndex + 1) % Music.length);
    setTimeout(() => setIsPlaying(true), 300);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setIndex((prevIndex) => (prevIndex - 1 + Music.length) % Music.length);
    setTimeout(() => setIsPlaying(true), 300);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = (Number(e.target.value) / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, index]);

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  return (
    <div className="h-full w-full overflow-hidden relative bg-foreground">
      <div
        className="h-[200%] w-full  rounded-full absolute left-[45%] bottom-1/2 translate-y-1/2 bg-gradient-to-br from-green-200   via-green-400 dark:via-green-600 to-green-800"
        style={{
          boxShadow: " 0 20px 40px rgb(0, 0, 0)",
        }}
      />

      <div className="h-full w-full absolute top-0 left-0 py-10 px-20">
        <div className="grid grid-cols-2">
          <div
            className="h-[60vh] w-2/3 flex flex-col gap-4 gap-x-8 overflow-y-scroll"
            //hide scrollbar
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {Music.map((song, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setIndex(idx);
                  setTimeout(() => setIsPlaying(true), 300);
                }}
                className={`flex flex-wrap items-center gap-2 p-2 w-full rounded ${
                  idx === index ? "text-green-400 bg-accent/10" : "text-accent"
                }`}
              >
                <Typo>{idx + 1 < 10 ? "0" + (idx + 1) : idx + 1}</Typo>
                <img
                  src={song.imgsrc}
                  alt=""
                  className="w-10 aspect-square rounded object-cover shadow-2xl"
                />
                {isPlaying && index === idx ? <IoPause /> : <IoPlay />}
                <Typo className="text-xs capitalize font-semibold">
                  {song.title}
                </Typo>
              </button>
            ))}
          </div>

          <div className=" w-full flex flex-col justify-center gap-8 items-center relative ">
            <div className="relative z-10">
              <img
                src="/music/disk.svg"
                alt="disk"
                className="h-[40vh] aspect-square rounded-full object-cover "
              />
              <img
                src={Music[index].imgsrc}
                alt="song"
                className={`absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 h-[20vh] aspect-square rounded-full object-cover  ${
                  isPlaying ? "playing" : ""
                }`}
              />
            </div>
            <Typo className="text-primary capitalize font-bold text-center text-xl">
              {Music[index].title}
            </Typo>

            <div className="flex flex-col w-full gap-2 items-center group cursor-pointer max-w-md mx-auto">
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="w-full appearance-none h-[2px] rounded-full accent-primary bg-primary"
              />
              <audio
                ref={audioRef}
                src={Music[index].src}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
              />
              <div className="w-full flex justify-between text-xs text-primary/40 font-bold">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="flex gap-5 items-center justify-between text-xl">
                <button onClick={handlePrev}>
                  <TbPlayerTrackPrevFilled />
                </button>
                <button onClick={togglePlayPause} className="text-4xl ">
                  {isPlaying ? <PiPauseCircleFill /> : <PiPlayCircleFill />}
                </button>
                <button onClick={handleNext}>
                  <TbPlayerTrackNextFilled />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 w-1/3 text-primary/70 -rotate-90 absolute -right-24 bottom-2/3 h-1 bg-foreground/20 rounded-full p-5">
              <BiVolumeFull size={18} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                className="w-full h-[2px] accent-foreground/0 bg-foreground rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MusicPlayerCode = `"use client";
import React, { useEffect, useRef, useState } from "react";
import { Music } from "./data";
import Typo from "@/components/Typo";
import { IoPause, IoPlay } from "react-icons/io5";
import {
  TbPlayerTrackNextFilled,
  TbPlayerTrackPrevFilled,
} from "react-icons/tb";
import { PiPauseCircleFill, PiPlayCircleFill } from "react-icons/pi";
import { BiVolumeFull } from "react-icons/bi";

export default function MusicPlayer() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const handleNext = () => {
    setIsPlaying(false);
    setIndex((prevIndex) => (prevIndex + 1) % Music.length);
    setTimeout(() => setIsPlaying(true), 300);
  };

  const handlePrev = () => {
    setIsPlaying(false);
    setIndex((prevIndex) => (prevIndex - 1 + Music.length) % Music.length);
    setTimeout(() => setIsPlaying(true), 300);
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const seekTime = (Number(e.target.value) / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return \`\${minutes}:\${seconds < 10 ? "0" : ""}\${seconds}\`;
  };

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, index]);

  const onTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const onLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  return (
    <div className="h-full w-full overflow-hidden relative bg-foreground">
      <div
        className="h-[200%] w-full  rounded-full absolute left-[45%] bottom-1/2 translate-y-1/2 bg-gradient-to-br from-green-200   via-green-400 dark:via-green-600 to-green-800"
        style={{
          boxShadow: " 0 20px 40px rgb(0, 0, 0)",
        }}
      />

      <div className="h-full w-full absolute top-0 left-0 py-10 px-20">
        <div className="grid grid-cols-2">
          <div
            className="h-[60vh] w-2/3 flex flex-col gap-4 gap-x-8 overflow-y-scroll"
            //hide scrollbar
            style={{
              msOverflowStyle: "none",
              scrollbarWidth: "none",
            }}
          >
            {Music.map((song, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setIndex(idx);
                  setTimeout(() => setIsPlaying(true), 300);
                }}
                className={\`flex flex-wrap items-center gap-2 p-2 w-full rounded \${
                  idx === index ? "text-green-400 bg-accent/10" : "text-accent"
                }\`}
              >
                <Typo>{idx + 1 < 10 ? "0" + (idx + 1) : idx + 1}</Typo>
                <img
                  src={song.imgsrc}
                  alt=""
                  className="w-10 aspect-square rounded object-cover shadow-2xl"
                />
                {isPlaying && index === idx ? <IoPause /> : <IoPlay />}
                <Typo className="text-xs capitalize font-semibold">
                  {song.title}
                </Typo>
              </button>
            ))}
          </div>

          <div className=" w-full flex flex-col justify-center gap-8 items-center relative ">
            <div className="relative z-10">
              <img
                src="/music/disk.svg"
                alt="disk"
                className="h-[40vh] aspect-square rounded-full object-cover "
              />
              <img
                src={Music[index].imgsrc}
                alt="song"
                className={\`absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 h-[20vh] aspect-square rounded-full object-cover  \${
                  isPlaying ? "playing" : ""
                }\`}
              />
            </div>
            <Typo className="text-primary capitalize font-bold text-center text-xl">
              {Music[index].title}
            </Typo>

            <div className="flex flex-col w-full gap-2 items-center group cursor-pointer max-w-md mx-auto">
              <input
                type="range"
                min="0"
                max="100"
                value={(currentTime / duration) * 100 || 0}
                onChange={handleSeek}
                className="w-full appearance-none h-[2px] rounded-full accent-primary bg-primary"
              />
              <audio
                ref={audioRef}
                src={Music[index].src}
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onLoadedMetadata}
                onEnded={() => setIsPlaying(false)}
              />
              <div className="w-full flex justify-between text-xs text-primary/40 font-bold">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
              <div className="flex gap-5 items-center justify-between text-xl">
                <button onClick={handlePrev}>
                  <TbPlayerTrackPrevFilled />
                </button>
                <button onClick={togglePlayPause} className="text-4xl ">
                  {isPlaying ? <PiPauseCircleFill /> : <PiPlayCircleFill />}
                </button>
                <button onClick={handleNext}>
                  <TbPlayerTrackNextFilled />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2 w-1/3 text-primary/70 -rotate-90 absolute -right-24 bottom-2/3 h-1 bg-foreground/20 rounded-full p-5">
              <BiVolumeFull size={18} />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                style={{
                  WebkitAppearance: "none",
                  appearance: "none",
                }}
                className="w-full h-[2px] accent-foreground/0 bg-foreground rounded-full "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
`;
