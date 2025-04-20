export const Button9: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 bg-white text-sky-700 hover:text-white rounded shadow shadow-sky-700/25 relative group overflow-hidden duration-500 z-10 ${className}`}
      {...props}
    >
      <span className="w-full aspect-square  absolute bg-sky-700 -z-10 top-[300%] -left-full group-hover:left-1/2 group-hover:top-1/2 -translate-y-1/2 -translate-x-1/2  rotate-45 duration-500 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};

export const Button9Code = `export const Button9: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 h-10 bg-white text-sky-700 hover:text-white rounded shadow shadow-sky-700/25 relative group overflow-hidden duration-500 z-10 \${className}\`}
      {...props}
    >
      <span className="w-full aspect-square  absolute bg-sky-700 -z-10 top-[300%] -left-full group-hover:left-1/2 group-hover:top-1/2 -translate-y-1/2 -translate-x-1/2  rotate-45 duration-500 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};
`;
