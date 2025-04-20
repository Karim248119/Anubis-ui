"use client";
import React from "react";

const Slides = [
  {
    name: "Slide 1",
    img: "https://images.pexels.com/photos/6466295/pexels-photo-6466295.jpeg",
  },
  {
    name: "Slide 2",
    img: "https://images.pexels.com/photos/15130294/pexels-photo-15130294/free-photo-of-a-hotel-room-interior.jpeg",
  },
  {
    name: "Slide 3",
    img: "https://images.pexels.com/photos/8577654/pexels-photo-8577654.jpeg",
  },
  {
    name: "Slide 4",
    img: "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg",
  },
];

export default function VeniceSlider() {
  const [index, setIndex] = React.useState(0);
  return (
    <div className="w-full h-full flex justify-between items-center text-black relative overflow-hidden">
      <div>
        <span>{index + 1}</span> / <span>{Slides.length}</span>
      </div>
      <div className="w-full overflow-hidden flex  ">
        {Slides.map((item, i) => (
          <div key={i} className="h-full w-full flex-shrink-0">
            <img
              src={item.img}
              alt={item.name}
              className=" h-[80%]  aspect-square object-cover"
            />
            <div className="h-[50%] w-40 bg-white -ml-20 flex gap-2 flex-col z-10"></div>
          </div>
        ))}
      </div>
      <div className="w-full h-full absolute top-0 left-0 grid-cols-2">
        <button
          className="w-full h-full"
          onClick={() => setIndex(index === 0 ? Slides.length - 1 : index - 1)}
        ></button>
        <button
          className="w-full h-full"
          onClick={() => setIndex(index === Slides.length - 1 ? 0 : index + 1)}
        ></button>
      </div>
    </div>
  );
}
