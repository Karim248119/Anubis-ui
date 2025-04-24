import "../globals.css";
import Collapse from "./Collapse";
import Hero from "./Hero";
import Slider from "./Slider";
import Three from "./Three";

export default function Home() {
  return (
    <main className="w-screen h-full pt-20 !overflow-hidden">
      <Hero />
      <Slider />
      <Three />
      <Collapse />
    </main>
  );
}
