import Image from "next/image";
import React from "react";

export default function Card8() {
  return (
    <button className="w-56 h-80  relative group">
      <div className="w-full h-full rounded-2xl overflow-hidden relative">
        <Image
          src="https://images.pexels.com/photos/4450376/pexels-photo-4450376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={400}
          height={400}
          alt="user"
          className="w-full h-full object-cove rounded-2xlr"
        />
        <div
          className="w-full h-full absolute top-full group-hover:top-0 rounded-2xl overflow-hidden duration-300"
          style={{
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        />
        <p className="left-5 absolute text-white/70 text-xs text-start bottom-10 group-hover:bottom-20 opacity-0 group-hover:opacity-100 duration-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem delectus
          velit aspernatur quae ducimus aperiam laudantium sunt, officia hic
          nostrum, provident laboriosam? Quasi explicabo dolor velit sint,
          pariatur exercitationem tenetur.
        </p>
      </div>
      <div className="text-black absolute -bottom-8 left-0 font-semibold group-hover:bottom-10 group-hover:left-5 group-hover:text-white duration-500">
        Emily R.
      </div>
    </button>
  );
}
