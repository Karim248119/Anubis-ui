import { FaPenFancy } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";

const Items = [
  {
    title: "Story-telling through design",
    des: "Using design to evoke emotions, and create a lasting impression.",
    icon: <IoSettings />,
    imgL: "https://www.lumina-design.co/images/i_diff_one_left.png",
    imgR: "https://www.lumina-design.co/images/i_diff_one_right.png",
    gradient: "from-orange-400 via-orange-600 to-rose-500",
  },
  {
    title: "Creating a Brand Identity",
    des: "Shape your individualistic digital identity with our meaningful designs",
    icon: <FaPenFancy />,
    imgL: "https://www.lumina-design.co/images/i_diff_two_left.png",
    imgR: "https://www.lumina-design.co/images/i_diff_two_right.png",
    gradient: "from-blue-400 via-blue-600 to-violet-500",
  },
  {
    title: "Collaborative Solutions",
    des: "We partner with clients to co-create innovative solutions that meet their immediate goals",
    icon: <TbLayoutListFilled />,
    imgL: "https://www.lumina-design.co/images/i_diff_three_left.png",
    imgR: "https://www.lumina-design.co/images/i_diff_three_right.png",
    gradient: "from-green-400 via-green-600 to-lime-500",
  },
];
export default function Card5() {
  return (
    <div className="flex gap-4">
      {Items.map((item, index) => (
        <div
          key={index}
          className={`h-80 w-80  border rounded-lg relative  group overflow-hidden hover:bg-gradient-to-tl duration-500 ${item.gradient}`}
        >
          <div className="flex items-center  p-5 gap-2">
            <div
              className={`p-3 rounded-full text-xl bg-gradient-to-br group-hover:from-black group-hover:to-black ${item.gradient}`}
            >
              {item.icon}
            </div>
            <h2 className="text-base font-bold mt-5 mb-2">{item.title}</h2>
          </div>
          <p className="font-sans font-extralight text-xs px-5 hidden group-hover:block">
            {item.des}
          </p>
          <img
            src={item.imgL}
            alt=""
            className="w-1/2 absolute bottom-0 left-0 z-10 group-hover:rotate-[30deg] group-hover:-bottom-10 group-hover:-left-10 duration-300"
          />
          <img
            src={item.imgR}
            alt=""
            className="w-[60%] absolute bottom-3 right-0 group-hover:rotate-[30deg] group-hover:-bottom-28 group-hover:-right-20 duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export const Card5Code = `
import { FaPenFancy } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
import { TbLayoutListFilled } from "react-icons/tb";

const Items = [
  {
    title: "Story-telling through design",
    des: "Using design to evoke emotions, and create a lasting impression.",
    icon: <IoSettings />,
    imgL: "https://www.lumina-design.co/images/i_diff_one_left.png",
    imgR: "https://www.lumina-design.co/images/i_diff_one_right.png",
    gradient: "from-orange-400 via-orange-600 to-rose-500",
  },
  {
    title: "Creating a Brand Identity",
    des: "Shape your individualistic digital identity with our meaningful designs",
    icon: <FaPenFancy />,
    imgL: "https://www.lumina-design.co/images/i_diff_two_left.png",
    imgR: "https://www.lumina-design.co/images/i_diff_two_right.png",
    gradient: "from-blue-400 via-blue-600 to-violet-500",
  },
  {
    title: "Collaborative Solutions",
    des: "We partner with clients to co-create innovative solutions that meet their immediate goals",
    icon: <TbLayoutListFilled />,
    imgL: "https://www.lumina-design.co/images/i_diff_three_left.png",
    imgR: "https://www.lumina-design.co/images/i_diff_three_right.png",
    gradient: "from-green-400 via-green-600 to-lime-500",
  },
];
export default function Card5() {
  return (
    <div className="flex gap-4">
      {Items.map((item, index) => (
        <div
          key={index}
          className={\`h-80 w-80  border rounded-lg relative  group overflow-hidden hover:bg-gradient-to-tl duration-500 \${item.gradient}\`}
        >
          <div className="flex items-center  p-5 gap-2">
            <div
              className={\`p-3 rounded-full text-xl bg-gradient-to-br group-hover:from-black group-hover:to-black \${item.gradient}\`}
            >
              {item.icon}
            </div>
            <h2 className="text-base font-bold mt-5 mb-2">{item.title}</h2>
          </div>
          <p className="font-sans font-extralight text-xs px-5 hidden group-hover:block">
            {item.des}
          </p>
          <img
            src={item.imgL}
            alt=""
            className="w-1/2 absolute bottom-0 left-0 z-10 group-hover:rotate-[30deg] group-hover:-bottom-10 group-hover:-left-10 duration-300"
          />
          <img
            src={item.imgR}
            alt=""
            className="w-[60%] absolute bottom-3 right-0 group-hover:rotate-[30deg] group-hover:-bottom-28 group-hover:-right-20 duration-300"
          />
        </div>
      ))}
    </div>
  );
}
`;
