export const Button5: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 bg-white hover:text-white text-black rounded-full relative group overflow-hidden duration-300 z-10 ${className}`}
      {...props}
    >
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 top-full left-0 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 -top-full left-1/4 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 top-full left-1/2 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 -top-full left-3/4 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};

export const Button5Code = `export const Button5: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 h-10 bg-white hover:text-white text-black rounded-full relative group overflow-hidden duration-300 z-10 \${className}\`}
      {...props}
    >
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 top-full left-0 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 -top-full left-1/4 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 top-full left-1/2 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className="h-full w-1/4 absolute bg-emerald-400 -z-10 -top-full left-3/4 group-hover:-translate-y-1/2  group-hover:top-1/2 duration-300 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};`;
