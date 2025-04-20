import {
  Poppins,
  Audiowide,
  Share_Tech_Mono,
  Quicksand,
  Roboto,
  Do_Hyeon,
} from "next/font/google";
import localFont from "next/font/local";

const glaston = localFont({ src: "./fonts/Mollie-Glaston.ttf" });
const woodBlock = localFont({ src: "./fonts/Wood Block CG.otf" });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300"],
});

const audiowide = Audiowide({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const orbitron = Share_Tech_Mono({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400"],
});

const robotoMono = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const doHyeon = Do_Hyeon({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const Fonts = {
  poppins,
  audiowide,
  orbitron,
  quicksand,
  robotoMono,
  doHyeon,
  glaston,
  woodBlock,
};
