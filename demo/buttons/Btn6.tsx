export const Button6: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className="w-52 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black  rounded-lg shadow hover:shadow-md transition-all duration-200 ">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
        alt="Google Logo"
        width={20}
        height={20}
      />
      <span className="text-sm font-semibold">Sign up with Google</span>
    </button>
  );
};

export const Button6Code = `export const Button6: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button className="w-52 flex items-center justify-center gap-2 px-4 py-2 bg-white text-black  rounded-lg shadow hover:shadow-md transition-all duration-200 ">
      <img
        src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
        alt="Google Logo"
        width={20}
        height={20}
      />
      <span className="text-sm font-semibold">Sign up with Google</span>
    </button>
  );
};
`;
