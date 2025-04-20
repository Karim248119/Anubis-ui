"use client";

import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full flex justify-center items-center py-10  text-white"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="relative w-72 h-80" style={{ perspective: "1000px" }}>
        <div
          className="relative w-full h-full duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute w-full h-full bg-black border shadow rounded-xl overflow-hidden group"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className=" relative w-full h-full px-5 py-10 space-y-5 z-10 ">
              <img
                src="https://medci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.92125326.png&w=64&q=75"
                alt=""
                className="h-18 w-18 "
              />
              <h2 className="text-2xl font-bold font-quicksand text-start">
                What sets Medc apart from others??
              </h2>
              <FaCirclePlus className="text-xl text-slate-200 absolute bottom-4 right-4" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-b from-transparent via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 duration-300">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="w-1/4 border border-orange-500/5 "
                ></div>
              ))}
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute z-10 w-full h-full p-5 bg-gradient-to-bl from-orange-500 via-red-400 to-yellow-400 rounded-xl flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatem, quasi adipisci natus quod corporis tenetur aspernatur
              neque, repudiandae ratione debitis alias itaque vitae suscipit
              repellat expedita dolore perspiciatis molestiae?
            </p>
            <FaCircleMinus className="text-xl absolute bottom-4 right-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export const Card6Code = `"use client";

import { useState } from "react";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="w-full flex justify-center items-center py-10  text-white"
      onClick={() => setFlipped(!flipped)}
    >
      <div className="relative w-72 h-80" style={{ perspective: "1000px" }}>
        <div
          className="relative w-full h-full duration-700"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute w-full h-full bg-black border shadow rounded-xl overflow-hidden group"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <div className=" relative w-full h-full px-5 py-10 space-y-5 z-10 ">
              <img
                src="https://medci.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.92125326.png&w=64&q=75"
                alt=""
                className="h-18 w-18 "
              />
              <h2 className="text-2xl font-bold font-quicksand text-start">
                What sets Medc apart from others??
              </h2>
              <FaCirclePlus className="text-xl text-slate-200 absolute bottom-4 right-4" />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex bg-gradient-to-b from-transparent via-transparent to-orange-500/20 opacity-0 group-hover:opacity-100 duration-300">
              {[1, 2, 3, 4, 5].map((item, index) => (
                <div
                  key={index}
                  className="w-1/4 border border-orange-500/5 "
                ></div>
              ))}
            </div>
          </div>

          {/* Back Face */}
          <div
            className="absolute z-10 w-full h-full p-5 bg-gradient-to-bl from-orange-500 via-red-400 to-yellow-400 rounded-xl flex flex-col items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              voluptatem, quasi adipisci natus quod corporis tenetur aspernatur
              neque, repudiandae ratione debitis alias itaque vitae suscipit
              repellat expedita dolore perspiciatis molestiae?
            </p>
            <FaCircleMinus className="text-xl absolute bottom-4 right-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
`;
