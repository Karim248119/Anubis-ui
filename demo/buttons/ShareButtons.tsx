import {
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoWhatsapp,
  IoShareSocialSharp,
} from "react-icons/io5";

const Items = [
  {
    icon: <IoLogoFacebook className="" />,
    className:
      "-bottom-full left-0 group-hover:bottom-0 hover:text-[#0866ff] duration-150 ",
  },
  {
    icon: <IoLogoPinterest />,
    className:
      " -bottom-1/2 translate-y-1/2 -translate-x-1/2 left-1/2 group-hover:bottom-1/2 hover:text-[#DB4539] duration-200",
  },
  {
    icon: <IoLogoWhatsapp />,
    className:
      "-bottom-full right-0 group-hover:bottom-0 hover:text-[#42e95f] duration-300 ",
  },
];

export const ShareButtons = () => {
  return (
    <div className="w-52 h-10 border bg-black text-white/70 rounded-full relative group overflow-hidden duration-700 z-10">
      {Items.map((item, idx) => (
        <button
          key={idx}
          className={`h-full w-1/3 flex justify-center items-center text-xl absolute bg-black ease-in ${item.className}`}
        >
          {item.icon}
        </button>
      ))}
      <div className="w-full h-full flex justify-center items-center gap-2 uppercase bg-black absolute bottom-0 left-0 group-hover:bottom-full duration-300">
        share <IoShareSocialSharp />
      </div>
    </div>
  );
};

export const ShareButtonsCode = `import {
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoWhatsapp,
  IoShareSocialSharp,
} from "react-icons/io5";

const Items = [
  {
    icon: <IoLogoFacebook className="" />,
    className:
      "-bottom-full left-0 group-hover:bottom-0 hover:text-[#0866ff] duration-150 ",
  },
  {
    icon: <IoLogoPinterest />,
    className:
      " -bottom-1/2 translate-y-1/2 -translate-x-1/2 left-1/2 group-hover:bottom-1/2 hover:text-[#DB4539] duration-200",
  },
  {
    icon: <IoLogoWhatsapp />,
    className:
      "-bottom-full right-0 group-hover:bottom-0 hover:text-[#42e95f] duration-300 ",
  },
];

export const ShareButtons = () => {
  return (
    <div className="w-52 h-10 border bg-black text-white/70 rounded-full relative group overflow-hidden duration-700 z-10">
      {Items.map((item, idx) => (
        <button
          key={idx}
          className={\`h-full w-1/3 flex justify-center items-center text-xl absolute bg-black ease-in \${item.className}\`}
        >
          {item.icon}
        </button>
      ))}
      <div className="w-full h-full flex justify-center items-center gap-2 uppercase bg-black absolute bottom-0 left-0 group-hover:bottom-full duration-300">
        share <IoShareSocialSharp />
      </div>
    </div>
  );
};`;
