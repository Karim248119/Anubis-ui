export const Button11: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 border-2 hover:border-amber-400 hover:bg-amber-400 rounded-full relative group overflow-hidden duration-700 z-10 ${className}`}
      {...props}
    >
      <span className="h-full w-full rounded-full absolute bg-amber-400 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 -left-1/2 group-hover:left-1/2 duration-300 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};

export const Button11Code = `export const Button1: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 h-10 border-2 hover:border-amber-400 hover:bg-amber-400 rounded-full relative group overflow-hidden duration-700 z-10 \${className}\`}
      {...props}
    >
      <span className="h-full w-full rounded-full absolute bg-amber-400 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 -left-1/2 group-hover:left-1/2 duration-300 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};`;
