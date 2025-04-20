import { RxTriangleDown } from "react-icons/rx";
export default function Card1({
  id,
  icon,
  title,
  description,
}: {
  id?: string;
  icon: any;
  title: string;
  description: string;
}) {
  return (
    <div className=" w-72 cursor-pointer relative flex flex-col text-center group border-white/60 border p-4 transition-all ease-in-out duration-500 text-white">
      <div className="h-0 overflow-hidden text-sm bg-white text-black text-background px-2 flex justify-center items-center lg:group-hover:h-[30vh] group-hover:h-[30vh] duration-700 transition-all ease-in-out">
        {description}
      </div>
      <div className="flex h-[30vh] flex-col justify-evenly items-center gap-5 group-hover:h-0 overflow-hidden duration-700 transition-all ease-in-out">
        <span className="group-hover:text-white transition-all ease-in-out duration-300">
          <RxTriangleDown size={20} />
        </span>
        <div className="text-6xl text-white ">{icon}</div>
        <span className="">.</span>
      </div>
      <div className="flex flex-col my-5 gap-5">
        <h2 className="font-semibold uppercase">{title}</h2>
        <p className=" text-white/50 group-hover:text-emerald-500 font-semibold">
          {id}
        </p>
      </div>
      <div className="h-[2px] w-1/6 bg-white/50 absolute left-1/2 -translate-x-1/2 -bottom-[1px] group-hover:w-1/3 group-hover:bg-emerald-500 duration-500" />
    </div>
  );
}
