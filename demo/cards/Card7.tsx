import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { GiAnubis } from "react-icons/gi";

const boxes = [
  {
    icon: <FaInstagram className="z-10 absolute top-3 right-3" />,
    wrapperClass:
      "w-[70%] h-[70%] left-[-70%] bottom-[-70%] rounded-br-[50%] rounded-tr-xl delay-300 duration-500",
    gradient:
      "radial-gradient(circle at top left, #4f5bd5, #962fbf, #d62976, #fa7e1e, #feda75)",
    shadow:
      "0 0 10px #962fbf, 0 0 10px #fa7e1e, 0 0 30px #d62976, 0 0 20px #962fbf, 0 0 5px #4f5bd5",
    customGroup: "group/box",
    hoverClass: "group-hover/box:opacity-100",
  },
  {
    icon: <FaLinkedinIn className="z-10 absolute top-3 right-3" />,
    wrapperClass:
      "w-[50%] h-[50%] left-[-50%] bottom-[-50%] rounded-br-[70%] rounded-tr-xl delay-300 duration-700",
    gradient: "radial-gradient(circle at top left, #4f5bd5, #0866ff)",
    shadow:
      "0 0 10px #0866ff, 0 0 20px #0866ff, 0 0 3px #0866ff, 0 0 5px #0866ff",
    customGroup: "group/box",
    hoverClass: "group-hover/box:opacity-100",
  },
  {
    icon: <FaXTwitter className="z-10 absolute top-3 right-3" />,
    wrapperClass:
      "w-[30%] h-[30%] left-[-30%] bottom-[-30%] rounded-br-[90%] rounded-tr-lg delay-300 duration-1000",
    gradient: "#333",
    shadow: "0 0 10px #333, 0 0 20px #333, 0 0 3px #333, 0 0 5px #333",
    customGroup: "group/box",
    hoverClass: "group-hover/box:opacity-100",
  },
];

export default function FancyCard() {
  return (
    <div className="relative w-[200px] h-[200px] bg-gray-200 text-white rounded-[30px] overflow-hidden shadow-xl group">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 100% 107%, #333 0%, #333 30%, #444 60%, #111 100%)",
        }}
      />

      {/* Logo */}
      <div className="absolute right-1/2 bottom-1/2 translate-x-1/2 translate-y-1/2 text-7xl group-hover:text-3xl transition-all duration-1000 ease-in-out group-hover:bottom-8 group-hover:right-8">
        <GiAnubis />
      </div>

      {/* Social Boxes */}
      {boxes.map((box, index) => (
        <div
          key={index}
          className={`absolute p-2 text-right ${
            box.wrapperClass
          } bg-white/40  transition-all origin-bottom-left group-hover:bottom-[-1px] group-hover:left-[-1px] ${
            box.customGroup ?? ""
          }`}
        >
          <div
            className={`absolute inset-0 rounded-[inherit] opacity-0 transition-all duration-500 ${box.hoverClass}`}
            style={{
              background: box.gradient,
              boxShadow: box.shadow,
            }}
          />
          {box.icon}
        </div>
      ))}
    </div>
  );
}
