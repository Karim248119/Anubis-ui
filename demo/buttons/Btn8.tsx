export const Button8: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 h-10 bg-white text-pink-700 hover:text-white rounded-full shadow shadow-pink-700/25 relative group overflow-hidden duration-500 z-10 ${className}`}
      {...props}
    >
      <span className="w-full aspect-square rounded-full absolute bg-pink-700 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 scale-0 group-hover:scale-100 duration-500 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};

export const Button8Code = `export const Button8: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 h-10 bg-white text-pink-700 hover:text-white rounded-full shadow shadow-pink-700/25 relative group overflow-hidden duration-500 z-10 \${className}\`}
      {...props}
    >
      <span className="w-full aspect-square rounded-full absolute bg-pink-700 -z-10 top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 scale-0 group-hover:scale-100 duration-500 ease-in-out" />
      <span className=" font-sans font-normal text-sm uppercase tracking-widest">
        {children}
      </span>
    </button>
  );
};
`;
