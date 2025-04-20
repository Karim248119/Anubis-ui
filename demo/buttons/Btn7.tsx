import { PiCirclesFourFill } from "react-icons/pi";
export const Button7: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className="group">
      <div className=" uppercase flex items-center gap-1 text-white  font-semibold tracking-widest">
        <PiCirclesFourFill className="group-hover:rotate-45 duration-500 text-xl" />
        {children}
      </div>
      <div className="h-[0.5px] w-0 bg-white group-hover:w-full duration-500" />
    </button>
  );
};

export const Button7Code = `import { PiCirclesFourFill } from "react-icons/pi";
export const Button7: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className="group">
      <div className=" uppercase flex items-center gap-1 text-white  font-semibold tracking-widest">
        <PiCirclesFourFill className="group-hover:rotate-45 duration-500 text-xl" />
        {children}
      </div>
      <div className="h-[0.5px] w-0 bg-white group-hover:w-full duration-500" />
    </button>
  );
};
`;
