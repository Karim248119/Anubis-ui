export const Button14: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 py-1 group border border-white/50 rounded-full flex justify-center items-center relative text-lg mt-3 capitalize group text-white ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className="w-4 aspect-square rounded-full border border-white/50 flex absolute right-3 group-hover:scale-50 group-hover:border-none group-hover:bg-white duration-300 origin-center" />
    </button>
  );
};

export const Button14Code = `export const Button14: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 py-1 group border border-white/50 rounded-full flex justify-center items-center relative text-lg mt-3 capitalize group text-white \${className}\`}
      {...props}
    >
      <span>{children}</span>
      <div className="w-4 aspect-square rounded-full border border-white/50 flex absolute right-3 group-hover:scale-50 group-hover:border-none group-hover:bg-white duration-300 origin-center" />
    </button>
  );
};`;
