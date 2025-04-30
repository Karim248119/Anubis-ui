export const Button10: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={`relative w-52 h-10  md:mt-10 overflow-hidden p-[1px] rounded-full ${className}`}
    >
      <span className="absolute rounded-full inset-[-500%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F8C86D_0%,#000_50%,#F8C86D_100%)]" />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center 
             bg-slate-950 md:px-7 px-3 font-medium text-white backdrop-blur-3xl gap-2 rounded-full"
      >
        {children}
      </span>
    </button>
  );
};

export const Button10Code = `export const Button10: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      {...props}
      className={\`relative w-52 h-10  md:mt-10 overflow-hidden p-[1px] rounded-full \${className}\`}
    >
      <span className="absolute rounded-full inset-[-500%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F8C86D_0%,#000_50%,#F8C86D_100%)]" />
      <span
        className="inline-flex h-full w-full cursor-pointer items-center justify-center 
             bg-slate-950 md:px-7 px-3 font-medium text-white backdrop-blur-3xl gap-2 rounded-full"
      >
        {children}
      </span>
    </button>
  );
};
`;
