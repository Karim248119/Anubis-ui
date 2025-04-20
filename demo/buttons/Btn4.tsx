export const Button4: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 relative group px-4 h-10 bg-blue-900 text-white button rounded-md capitalize flex items-center justify-center gap-2 overflow-hidden shadow-xl hover:scale-105 duration-500 ${className}`}
      {...props}
    >
      <span className="absolute top-0 w-[120%] h-[40px] -left-[100%] group-hover:left-[100%] opacity-60 bg-gradient-to-r from-transparent via-white/70 blur-sm to-transparent rotate-[120deg] pointer-events-none duration-700 ease-out"></span>
      <div className="font-semibold text-white text-center flex items-center justify-center gap-1">
        {children}
      </div>
    </button>
  );
};

export const Button4Code = `export const Button4: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 relative group px-4 h-10 bg-blue-900 text-white button rounded-md capitalize flex items-center justify-center gap-2 overflow-hidden shadow-xl hover:scale-105 duration-500 \${className}\`}
      {...props}
    >
      <span className="absolute top-0 w-[120%] h-[40px] -left-[100%] group-hover:left-[100%] opacity-60 bg-gradient-to-r from-transparent via-white/70 blur-sm to-transparent rotate-[120deg] pointer-events-none duration-700 ease-out"></span>
      <div className="font-semibold text-white text-center flex items-center justify-center gap-1">
        {children}
      </div>
    </button>
  );
};

`;
