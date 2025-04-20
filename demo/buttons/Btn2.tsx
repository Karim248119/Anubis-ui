export const Button2: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-48 h-48 relative md:text-base  text-sm text-black hover:text-amber-300 rounded-full flex justify-center items-center duration-500 group ${className}`}
      {...props}
    >
      <div className="w-full h-full scale-0 absolute top-0 left-0 rounded-full group-hover:scale-100 duration-500 z-10 bg-black" />
      <div className="w-full h-full absolute top-0 left-0 rounded-full group-hover:scale-0  duration-500 z-10 border-2 border-black" />
      <p className=" uppercase z-20 tracking-widest">{children}</p>
    </button>
  );
};

export const Button2Code = `export const Button1: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-44 h-10 border-2 hover:border-primary hover:bg-amber-400 rounded-full relative group overflow-hidden duration-700 z-10 \${className}\`}
      {...props}
    >
      <span className="h-full w-full rounded-full absolute bg-amber-400 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 -left-1/2 group-hover:left-1/2 duration-300 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};`;
