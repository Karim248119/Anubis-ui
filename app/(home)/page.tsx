import "../globals.css";
import Cards from "./Cards";
import Collapse from "./Collapse";
import Footer from "./Footer";
import Hero from "./Hero";
import Slider from "./Slider";
import Three from "./Three";

export default function Home() {
  return (
    <main className="w-screen h-full pt-20 !overflow-hidden">
      <Hero />
      <Cards />
      <Slider />
      <Three />
      <Collapse />
      <Footer />
    </main>
  );
}
