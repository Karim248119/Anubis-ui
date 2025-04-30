export const Button3: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`w-52 py-1 group border rounded-full flex justify-center items-center relative text-lg mt-3 capitalize group text-white ${className}`}
      {...props}
    >
      <span>{children}</span>
      <div className="w-5 aspect-square rounded-full border flex justify-center items-center absolute right-3">
        <span className="w-1 aspect-square rounded-full bg-white -ml-10 group-hover:ml-0 duration-300" />
      </div>
    </button>
  );
};

export const Button3Code = `export const Button3: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={\`w-52 py-1 group border rounded-full flex justify-center items-center relative text-lg mt-3 capitalize group text-white \${className}\`}
      {...props}
    >
      <span>{children}</span>
      <div className="w-5 aspect-square rounded-full border flex justify-center items-center absolute right-3">
        <span className="w-1 aspect-square rounded-full bg-white -ml-10 group-hover:ml-0 duration-300" />
      </div>
    </button>
  );
};
`;
