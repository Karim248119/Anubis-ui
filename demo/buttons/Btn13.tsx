import { PiArrowRight } from "react-icons/pi";

export const Button13: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 flex items-center group text-white ${className}`}
      {...props}
    >
      <span className="w-0 h-0 group-hover:w-10 group-hover:h-10 rounded-full bg-violet-600 flex justify-center items-center duration-300">
        <PiArrowRight />
      </span>
      <span className=" h-10 flex-1 bg-violet-600 rounded-full flex justify-center items-center uppercase font-bold">
        {children}
      </span>
      <span className="w-10 h-10 group-hover:w-0 group-hover:h-0 rounded-full bg-violet-600 flex justify-center items-center duration-300">
        <PiArrowRight />
      </span>
    </button>
  );
};

export const Button13Code = `import { PiArrowRight } from "react-icons/pi";
export const Button13: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 h-10 flex items-center group \${className}\`}
      {...props}
    >
      <span className="w-0 h-0 group-hover:w-10 group-hover:h-10 rounded-full bg-violet-600 flex justify-center items-center duration-300">
        <ArrowRight />
      </span>
      <span className=" h-10 flex-1 bg-violet-600 rounded-full flex justify-center items-center uppercase font-bold">
        {children}
      </span>
      <span className="w-10 h-10 group-hover:w-0 group-hover:h-0 rounded-full bg-violet-600 flex justify-center items-center duration-300">
        <ArrowRight />
      </span>
    </button>
  );
};
}`;
