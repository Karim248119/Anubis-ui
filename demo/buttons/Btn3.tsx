import Image from "next/image";
export const Button3: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex flex-col justify-center items-center gap-1 text-lg mt-3 capitalize group text-white ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className=" w-[calc(100%-15px)] self-end flex flex-1 items-center opacity-50 group-hover:mr-[15px] duration-300">
        <div className="w-full h-[1px] bg-white -mr-1" />
        <Image src="/arr.svg" alt="arrow" width={5} height={5} />
      </div>
    </button>
  );
};

export const Button3Code = `import Image from "next/image";
export const Button3: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`flex flex-col justify-center items-center gap-1 text-lg mt-3 capitalize group \${className}\`}
      {...props}
    >
      <span>{children}</span>
      <div className=" w-[calc(100%-15px)] self-end flex flex-1 items-center opacity-50  group-hover:mr-[15px] duration-300">
        <div className="w-full h-[1px] bg-white -mr-1" />
        <Image src="/arr.svg" alt="arrow" width={5} height={5} />
      </div>
    </button>
  );
};
`;
