"use client";
import React, { useEffect, useRef, useState } from "react";
import { Music } from "./data";
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
    <div className="h-full w-full overflow-hidden relative text-white">
      <img
        src="/l.jpg"
        alt="bg"
        className="h-full w-full object-cover absolute top-0 left-0"
      />
      <div className="h-full w-full absolute top-0 left-0  px-20">
        <div
          className="h-[70vh] pt-5 w-full flex overflow-y-scroll"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="h-full w-full flex flex-wrap justify-center gap-4 gap-x-8">
            {Music.map((song, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setIndex(idx);
                  setTimeout(() => setIsPlaying(true), 300);
                }}
                className={`flex flex-col items-center gap-2 p-2 w-52 rounded bg-white/10 relative ${
                  idx === index ? "text-[gold] bg-accent/10" : "text-white"
                }`}
                style={{
                  boxShadow: " 0 10px 20px rgba(0, 0, 5, 0.8)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                }}
              >
                <img
                  src={song.imgsrc}
                  alt=""
                  className="w-full aspect-square rounded object-cover shadow-2xl"
                />
                <button
                  className="h-10 w-10 flex items-center justify-center rounded-full absolute border-2 top-[180px] right-5"
                  style={{
                    borderColor: idx === index ? "gold" : "",
                    backgroundImage:
                      "radial-gradient(circle, #000, #222, #555)",
                  }}
                >
                  {isPlaying && index === idx ? <IoPause /> : <IoPlay />}
                </button>
                <div className="w-full flex flex-col text-start pt-3">
                  <h2 className="font-semibold capitalize overflow-hidden text-ellipsis whitespace-nowrap">
                    {song.title}
                  </h2>
                  <p className="text-xs text-white/50 overflow-hidden text-ellipsis whitespace-nowrap">
                    {song.artist || "Unknown"}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div
            className=" w-full h-[12vh]  px-10 py-4 flex flex-col justify-center gap-1 bg-white/5 items-center absolute bottom-0 left-1/2 -translate-x-1/2 z-40"
            style={{
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            <div className="w-full flex gap-5 items-center ">
              <div className="flex gap-2 items-center w-96 ">
                <img
                  src={Music[index].imgsrc}
                  alt="song"
                  className={`h-[8vh] aspect-square rounded-xl object-cover  ${
                    isPlaying ? "playing" : ""
                  }`}
                />
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold capitalize">
                    {Music[index].title}
                  </h2>
                  <p className="text-sm text-white/50">
                    {Music[index].artist || "Unknown"}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center text-xl">
                <button onClick={handlePrev}>
                  <TbPlayerTrackPrevFilled />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="h-10 w-10 flex items-center justify-center rounded-full border-2 bg-white text-black"
                >
                  {isPlaying ? <IoPause /> : <IoPlay />}
                </button>
                <button onClick={handleNext}>
                  <TbPlayerTrackNextFilled />
                </button>
              </div>

              <div className="flex  w-full gap-1 items-center group cursor-pointer">
                <span className="text-[10px] text-white/50">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={(currentTime / duration) * 100 || 0}
                  onChange={handleSeek}
                  className="flex-1 appearance-none h-[2px] rounded-full accent-[gold] cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(to right, gold 0%, gold " +
                      ((currentTime / duration) * 100 || 0) +
                      "%, #d1d5db " +
                      ((currentTime / duration) * 100 || 0) +
                      "%, #d1d5db 100%)",
                  }}
                />
                <audio
                  ref={audioRef}
                  src={Music[index].src}
                  onTimeUpdate={onTimeUpdate}
                  onLoadedMetadata={onLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                <span className="text-[10px] text-white/50">
                  {formatTime(duration)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BiVolumeFull size={18} />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full appearance-none h-[2px] hide-thumb rounded-full bg-primary range-hover-thumb cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, gold 0%, gold ${
                      volume * 100
                    }%, #d1d5db ${volume * 100}%, #d1d5db 100%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const MusicPlayerCode = `
"use client";
import React, { useEffect, useRef, useState } from "react";
import { Music } from "./data";
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
    <div className="h-full w-full overflow-hidden relative text-white">
      <img
        src="/l.jpg"
        alt="bg"
        className="h-full w-full object-cover absolute top-0 left-0"
      />
      <div className="h-full w-full absolute top-0 left-0  px-20">
        <div
          className="h-[70vh] pt-5 w-full flex overflow-y-scroll"
          style={{
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          <div className="h-full w-full flex flex-wrap justify-center gap-4 gap-x-8">
            {Music.map((song, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsPlaying(false);
                  setIndex(idx);
                  setTimeout(() => setIsPlaying(true), 300);
                }}
                className={\`flex flex-col items-center gap-2 p-2 w-52 rounded bg-white/10 relative \${
                  idx === index ? "text-[gold] bg-accent/10" : "text-white"
                }\`}
                style={{
                  boxShadow: " 0 10px 20px rgba(0, 0, 5, 0.8)",
                  backdropFilter: "blur(5px)",
                  WebkitBackdropFilter: "blur(5px)",
                }}
              >
                <img
                  src={song.imgsrc}
                  alt=""
                  className="w-full aspect-square rounded object-cover shadow-2xl"
                />
                <button
                  className="h-10 w-10 flex items-center justify-center rounded-full absolute border-2 top-[180px] right-5"
                  style={{
                    borderColor: idx === index ? "gold" : "",
                    backgroundImage:
                      "radial-gradient(circle, #000, #222, #555)",
                  }}
                >
                  {isPlaying && index === idx ? <IoPause /> : <IoPlay />}
                </button>
                <div className="w-full flex flex-col text-start pt-3">
                  <h2 className="font-semibold capitalize overflow-hidden text-ellipsis whitespace-nowrap">
                    {song.title}
                  </h2>
                  <p className="text-xs text-white/50 overflow-hidden text-ellipsis whitespace-nowrap">
                    {song.artist || "Unknown"}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div
            className=" w-full h-[12vh]  px-10 py-4 flex flex-col justify-center gap-1 bg-white/5 items-center absolute bottom-0 left-1/2 -translate-x-1/2 z-40"
            style={{
              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
            }}
          >
            <div className="w-full flex gap-5 items-center ">
              <div className="flex gap-2 items-center w-96 ">
                <img
                  src={Music[index].imgsrc}
                  alt="song"
                  className={\`h-[8vh] aspect-square rounded-xl object-cover  \${
                    isPlaying ? "playing" : ""
                  }\`}
                />
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold capitalize">
                    {Music[index].title}
                  </h2>
                  <p className="text-sm text-white/50">
                    {Music[index].artist || "Unknown"}
                  </p>
                </div>
              </div>

              <div className="flex gap-5 items-center text-xl">
                <button onClick={handlePrev}>
                  <TbPlayerTrackPrevFilled />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="h-10 w-10 flex items-center justify-center rounded-full border-2 bg-white text-black"
                >
                  {isPlaying ? <IoPause /> : <IoPlay />}
                </button>
                <button onClick={handleNext}>
                  <TbPlayerTrackNextFilled />
                </button>
              </div>

              <div className="flex  w-full gap-1 items-center group cursor-pointer">
                <span className="text-[10px] text-white/50">
                  {formatTime(currentTime)}
                </span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={(currentTime / duration) * 100 || 0}
                  onChange={handleSeek}
                  className="flex-1 appearance-none h-[2px] rounded-full accent-[gold] cursor-pointer"
                  style={{
                    background:
                      "linear-gradient(to right, gold 0%, gold " +
                      ((currentTime / duration) * 100 || 0) +
                      "%, #d1d5db " +
                      ((currentTime / duration) * 100 || 0) +
                      "%, #d1d5db 100%)",
                  }}
                />
                <audio
                  ref={audioRef}
                  src={Music[index].src}
                  onTimeUpdate={onTimeUpdate}
                  onLoadedMetadata={onLoadedMetadata}
                  onEnded={() => setIsPlaying(false)}
                />

                <span className="text-[10px] text-white/50">
                  {formatTime(duration)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BiVolumeFull size={18} />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-full appearance-none h-[2px] hide-thumb rounded-full bg-primary range-hover-thumb cursor-pointer"
                  style={{
                    background: \`linear-gradient(to right, gold 0%, gold \${
                      volume * 100
                    }%, #d1d5db \${volume * 100}%, #d1d5db 100%)\`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

`;
