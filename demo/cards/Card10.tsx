import { RxTriangleDown } from "react-icons/rx";
export default function Card10() {
  return (
    <div
      className="relative w-72 h-80 overflow-hidden rounded-md text-white group"
      style={{
        boxShadow: " 0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div className="h-full w-full absolute bottom-[calc(100%-4px)] group-hover:bottom-0 left-0 bg-gradient-to-bl from-orange-400 via-orange-600 to-rose-500 duration-500" />
      <div className="h-full w-full relative z-10 p-5">
        <h2 className="font-bold text-2xl">What Is Medc?</h2>
        <p className="mt-5 mb-8 text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi,
          nihil. Ipsam esse aspernatur error voluptatem excepturi harum
          temporibus possimus. Laboriosam dolorum adipisci officiis nisi
          provident explicabo, deserunt ea quisquam assumenda.
        </p>
        <button
          className="px-3 py-2 text-xs font-semibold rounded-md shadow-xl bg-gradient-to-bl from-orange-400 to-rose-500 group-hover:from-white group-hover:to-white group-hover:text-black hover:!from-transparent hover:!to-transparent hover:!text-white border-2 border-transparent hover:border-white duration-500"
          style={{
            boxShadow: " 0 10px 20px rgba(0, 0, 0, 0.2)",
          }}
        >
          READ MORE
        </button>
      </div>
    </div>
  );
}
