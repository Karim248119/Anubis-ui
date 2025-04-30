import { GoArrowDownRight } from "react-icons/go";

export const Button1: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 bg-black hover:bg-gradient-to-r from-blue-500 text-white to-black ho rounded-xl flex justify-center items-center gap-2 group duration-700 ${className}`}
      {...props}
    >
      <span className=" font-sans ">{children}</span>
      <GoArrowDownRight className="group-hover:-rotate-45 duration-300" />
    </button>
  );
};

export const Button1Code = `import { GoArrowDownRight } from "react-icons/go";

export const Button1: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 h-10 bg-black hover:bg-gradient-to-r from-blue-500 text-white to-black ho rounded-xl flex justify-center items-center gap-2 group duration-700 \${className}\`}
      {...props}
    >
      <span className=" font-sans ">{children}</span>
      <GoArrowDownRight className="group-hover:-rotate-45 duration-300" />
    </button>
  );
};`;
