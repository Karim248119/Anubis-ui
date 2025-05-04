"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import localFont from "next/font/local";

const ezanity = localFont({
  src: "../../public/random/tarot/Ezanity-Regular.otf",
});
const kobe = localFont({
  src: "../../public/random/tarot/kobe-regular.otf",
});

const Items = [
  {
    name: "The Fool",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-01.png",
    des: "The Fool is the archetype of the essential self which accompanies us throughout the endless changes of life and represents the courage needed to take risks.",
  },
  {
    name: "The Magician",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-02-02.png",
    des: "The Magician is the alchemist of the tarot who can channel his creative life force into material form, using his focused attention to transform inspiration into reality.",
  },
  {
    name: "The High Priestess",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-03.png?v=1606223450",
    des: "The High Priestess is the oracle who guides us through the complexities of life, offering insights that lead us to greater understanding and wisdom.",
  },
  {
    name: "The Empress",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-04.png?v=1606223373",
    des: "The Empress is an emissary of love, beauty, and relationships and attracts her desires with ease because she’s in harmony with the rhythms of the natural world.",
  },
  {
    name: "The Emperor",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-05.png?v=1606223281",
    des: "The Emperor is the archetype of active masculine power, a figure who can bring order and structure to the eros and exuberant creativity of the Empress’ domain.",
  },
  {
    name: "The Hierophant",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-06.png?v=1606223194",
    des: "The Hierophant is the bridge between the sacred and the mundane and represents our ability to hear and transmit the inner voice of truth.",
  },
  {
    name: "The Lovers",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-07.png?v=1606223108",
    des: "The Lovers are the archetype of love, beauty, and relationships and are drawn to the harmonious rhythms of the natural world.",
  },
  {
    name: "The Chariot",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-08.png?v=1606223021",
    des: "The Chariot is the archetype of active masculine power, a figure who can bring order and structure to the eros and exuberant creativity of the Empress’ domain.",
  },
  {
    name: "Strength",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-09.png?v=1606222933",
    des: "Armed with a compassionate heart and a gentle touch, Strength shows us how to venture into the dark forest of the psyche and fearlessly tame—and befriend—the wild creatures that roam there.",
  },
  {
    name: "The Hermit",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-10.png?v=1606222846",
    des: "The Hermit is the archetype of the universal seeker who turns his attention inward to discover enlightenment within and whose lantern of inner wisdom illuminates the path ahead.",
  },
  {
    name: "Wheel of Fortune",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-11.png?v=1606222759",
    des: "The Wheel of Fortune describes the cosmic laws that govern fate and destiny. We experience perpetual motion on the wheel of life, but we can remain centered when we focus our attention on the still, unmoving center of the wheel.",
  },
  {
    name: "Justice",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-12.png?v=1606222672",
    des: "The work of Justice aspires to something more than what is simply fair: she aspires to justice as beauty, beauty as truth, and harmony as a creative expression of the divine made manifest on earth.",
  },
  {
    name: "The Hanged Man",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-13.png?v=1606222585",
    des: "The Hanged Man dangles upside down in mid-air from a gallows, but he maintains an expression of inner peace, revealing that his freedom lies in his conscious and purposeful surrender to life.",
  },
  {
    name: "Death",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-14.png?v=1606222498",
    des: "Death reminds us that loss is built into the fabric of life, and that, paradoxically, the more we feel life’s impermanence, the more we can embrace the fullness of life’s gifts.",
  },
  {
    name: "Temperance",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-15.png?v=1606222411",
    des: "Temperance is the archetype of moderation and balance, bringing equanimity by reconciling contrasting elements and bringing them into harmony within the mind and the spirit.",
  },
  {
    name: "The Devil",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-16.png?v=1606222324",
    des: "The Devil reminds us of the freedom we possess to examine the role of fear, shame, and unhealthy attachments in our lives. He encourages us to connect to our true power by facing our demons with honesty.",
  },
  {
    name: "The Tower",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-17.png?v=1606222237",
    des: "The lightning that strikes The Tower represents the sudden collapse of old structures, which serves to liberate its inhabitants and razes the ground for something new to emerge.",
  },
  {
    name: "The Star",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-18.png?v=1606222150",
    des: "The Star represents the healing power of connection—to self and to the world around her. Stripped down to a state of purity, she’s in touch with what is essential, meaningful, and life-giving.",
  },
  {
    name: "The Moon",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-19.png?v=1606222063",
    des: "To venture past the towers in The Moon card and into the land of rebirth, we must confront the wild animals who guard the threshold and our own instinctual, intuitive, and irrational natures.",
  },
  {
    name: "The Sun",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-20.png?v=1606221976",
    des: "Just as the Sun is the center of our solar system, The Sun card represents the essence of our authentic self, which seeks creative realization in the world.",
  },
  {
    name: "Judgement",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-21.png?v=1606221889",
    des: "Judgement is the archetype of rebirth and marks a moment of awakening where old aspects of self can be surrendered so that a new vision of life can be embraced.",
  },
  {
    name: "The World",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-22.png?v=1606221802",
    des: "The implied finality in The World card also contains a beginning: the wreath is both a boundary that limits, as well as an opening, a birth canal through which new life can emerge.",
  },
  {
    name: "Ace of Wands",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-65.png?v=1605877538",
    des: "The Ace of Wands represents the seed of new life and the spark of our inner flame, which motivates us to dream, create, and take action toward our inspired visions.",
  },
];

const rise = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
const fall = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export default function Tarot() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-5 pt-10">
        <h1 className={`text-[#f0e299] uppercase ${kobe.className}`}>
          Explore Divination
        </h1>
        <h2 className={`text-5xl ${ezanity.className}`}>
          Tarot Card Meanings: Major Arcana, Suits and Spreads
        </h2>
      </div>
      <div className="w-full flex-1 overflow-hidden flex items-center justify-center">
        {Items.map((t, i) => {
          return <Card key={i} t={t} i={i} />;
        })}
      </div>
    </div>
  );
}

const Card = ({ t, i }: { t: { name: string; img: string }; i: number }) => {
  const centerIndex = Math.floor(Items.length / 2);
  const cardWidth = 150;
  const overlap = 0.85;

  const [offset, setOffset] = useState(-centerIndex);
  const [open, setOpen] = useState(false);

  const rotation = offset * 3;
  const leftOffset = offset * cardWidth * (1 - overlap);

  const scale = 1 - Math.abs(offset) * 0;
  const translateY = Math.abs(offset) * 3;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(i - centerIndex);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <>
      <button
        onClick={() => {
          setOpen(true);
          audioRef.current?.play();
        }}
        key={i}
        className="absolute -bottom-10 origin-bottom  duration-1000"
        style={{
          transform: `translateX(${leftOffset}px) translateY(${translateY}px) rotateZ(${rotation}deg) scale(${scale})`,
        }}
      >
        <img
          src={
            "https://i.pinimg.com/736x/29/59/08/295908139347b3a99c281c234e537355.jpg"
          }
          alt={t.name}
          className="w-60 h-auto shadow-lg border-2 border-[#333] rounded-lg hover:mb-10 duration-300"
        />
      </button>
      <AnimatePresence>
        {open && <Details i={i} setOpen={setOpen} />}
      </AnimatePresence>
      <audio ref={audioRef} muted src="/random/tarot/flipcard.mp3"></audio>
    </>
  );
};

export function Details({
  i,
  setOpen,
}: {
  i: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div className="absolute top-0 left-0 right-0 bottom-0 z-40">
      <div className="w-full h-full grid grid-cols-3 overflow-hidden relative ">
        <motion.div
          {...fall}
          className="w-full h-full bg-black flex items-center justify-center "
        >
          <img
            src={Items[i].img}
            alt=""
            className="h-[80%] w-auto border border-[#333] rounded-lg"
          />
        </motion.div>
        <motion.div
          {...rise}
          className="flex-1 bg-black col-span-2 px-10 flex flex-col justify-center gap-10 "
        >
          <h2 className={`text-5xl ${ezanity.className}`}>{Items[i].name}</h2>
          <p className={`opacity-50 ${kobe.className}`}>{Items[i].des}</p>
          <button
            onClick={() => setOpen(false)}
            className="w-14 aspect-square text-lg border-2 border-[#333] text-[#f0e299]  rounded-full flex justify-center items-center absolute right-5 top-8 hover:scale-90 duration-300"
          >
            <TfiClose />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export const TarotCode = `
"use client";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";
import localFont from "next/font/local";

const ezanity = localFont({
  src: "../../public/random/tarot/Ezanity-Regular.otf",
});
const kobe = localFont({
  src: "../../public/random/tarot/kobe-regular.otf",
});

const Items = [
  {
    name: "The Fool",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-01.png",
    des: "The Fool is the archetype of the essential self which accompanies us throughout the endless changes of life and represents the courage needed to take risks.",
  },
  {
    name: "The Magician",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-02-02.png",
    des: "The Magician is the alchemist of the tarot who can channel his creative life force into material form, using his focused attention to transform inspiration into reality.",
  },
  {
    name: "The High Priestess",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-03.png?v=1606223450",
    des: "The High Priestess is the oracle who guides us through the complexities of life, offering insights that lead us to greater understanding and wisdom.",
  },
  {
    name: "The Empress",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-04.png?v=1606223373",
    des: "The Empress is an emissary of love, beauty, and relationships and attracts her desires with ease because she’s in harmony with the rhythms of the natural world.",
  },
  {
    name: "The Emperor",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-05.png?v=1606223281",
    des: "The Emperor is the archetype of active masculine power, a figure who can bring order and structure to the eros and exuberant creativity of the Empress’ domain.",
  },
  {
    name: "The Hierophant",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-06.png?v=1606223194",
    des: "The Hierophant is the bridge between the sacred and the mundane and represents our ability to hear and transmit the inner voice of truth.",
  },
  {
    name: "The Lovers",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-07.png?v=1606223108",
    des: "The Lovers are the archetype of love, beauty, and relationships and are drawn to the harmonious rhythms of the natural world.",
  },
  {
    name: "The Chariot",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-08.png?v=1606223021",
    des: "The Chariot is the archetype of active masculine power, a figure who can bring order and structure to the eros and exuberant creativity of the Empress’ domain.",
  },
  {
    name: "Strength",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-09.png?v=1606222933",
    des: "Armed with a compassionate heart and a gentle touch, Strength shows us how to venture into the dark forest of the psyche and fearlessly tame—and befriend—the wild creatures that roam there.",
  },
  {
    name: "The Hermit",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-10.png?v=1606222846",
    des: "The Hermit is the archetype of the universal seeker who turns his attention inward to discover enlightenment within and whose lantern of inner wisdom illuminates the path ahead.",
  },
  {
    name: "Wheel of Fortune",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-11.png?v=1606222759",
    des: "The Wheel of Fortune describes the cosmic laws that govern fate and destiny. We experience perpetual motion on the wheel of life, but we can remain centered when we focus our attention on the still, unmoving center of the wheel.",
  },
  {
    name: "Justice",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-12.png?v=1606222672",
    des: "The work of Justice aspires to something more than what is simply fair: she aspires to justice as beauty, beauty as truth, and harmony as a creative expression of the divine made manifest on earth.",
  },
  {
    name: "The Hanged Man",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-13.png?v=1606222585",
    des: "The Hanged Man dangles upside down in mid-air from a gallows, but he maintains an expression of inner peace, revealing that his freedom lies in his conscious and purposeful surrender to life.",
  },
  {
    name: "Death",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-14.png?v=1606222498",
    des: "Death reminds us that loss is built into the fabric of life, and that, paradoxically, the more we feel life’s impermanence, the more we can embrace the fullness of life’s gifts.",
  },
  {
    name: "Temperance",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-15.png?v=1606222411",
    des: "Temperance is the archetype of moderation and balance, bringing equanimity by reconciling contrasting elements and bringing them into harmony within the mind and the spirit.",
  },
  {
    name: "The Devil",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-16.png?v=1606222324",
    des: "The Devil reminds us of the freedom we possess to examine the role of fear, shame, and unhealthy attachments in our lives. He encourages us to connect to our true power by facing our demons with honesty.",
  },
  {
    name: "The Tower",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-17.png?v=1606222237",
    des: "The lightning that strikes The Tower represents the sudden collapse of old structures, which serves to liberate its inhabitants and razes the ground for something new to emerge.",
  },
  {
    name: "The Star",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-18.png?v=1606222150",
    des: "The Star represents the healing power of connection—to self and to the world around her. Stripped down to a state of purity, she’s in touch with what is essential, meaningful, and life-giving.",
  },
  {
    name: "The Moon",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-19.png?v=1606222063",
    des: "To venture past the towers in The Moon card and into the land of rebirth, we must confront the wild animals who guard the threshold and our own instinctual, intuitive, and irrational natures.",
  },
  {
    name: "The Sun",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-20.png?v=1606221976",
    des: "Just as the Sun is the center of our solar system, The Sun card represents the essence of our authentic self, which seeks creative realization in the world.",
  },
  {
    name: "Judgement",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-21.png?v=1606221889",
    des: "Judgement is the archetype of rebirth and marks a moment of awakening where old aspects of self can be surrendered so that a new vision of life can be embraced.",
  },
  {
    name: "The World",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-22.png?v=1606221802",
    des: "The implied finality in The World card also contains a beginning: the wreath is both a boundary that limits, as well as an opening, a birth canal through which new life can emerge.",
  },
  {
    name: "Ace of Wands",
    img: "https://www.cocorrina.com/cdn/shop/articles/Divine-Feminine-Tarot-NOCTURNAL-65.png?v=1605877538",
    des: "The Ace of Wands represents the seed of new life and the spark of our inner flame, which motivates us to dream, create, and take action toward our inspired visions.",
  },
];

const rise = {
  initial: { y: "100%" },
  animate: { y: 0 },
  exit: { y: "100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};
const fall = {
  initial: { y: "-100%" },
  animate: { y: 0 },
  exit: { y: "-100%" },
  transition: {
    duration: 1,
    ease: "easeInOut",
    damping: 20,
    type: "keyframes",
  },
};

export default function Tarot() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="flex flex-col items-center gap-5 pt-10">
        <h1 className={\`text-[#f0e299] uppercase\${kobe.className}\`}>
          Explore Divination
        </h1>
        <h2 className={\`text-5xl \${ezanity.className}\`}>
          Tarot Card Meanings: Major Arcana, Suits and Spreads
        </h2>
      </div>
      <div className="w-full flex-1 overflow-hidden flex items-center justify-center">
        {Items.map((t, i) => {
          return <Card key={i} t={t} i={i} />;
        })}
      </div>
    </div>
  );
}

const Card = ({ t, i }: { t: { name: string; img: string }; i: number }) => {
  const centerIndex = Math.floor(Items.length / 2);
  const cardWidth = 150;
  const overlap = 0.85;

  const [offset, setOffset] = useState(-centerIndex);
  const [open, setOpen] = useState(false);

  const rotation = offset * 3;
  const leftOffset = offset * cardWidth * (1 - overlap);

  const scale = 1 - Math.abs(offset) * 0;
  const translateY = Math.abs(offset) * 3;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setOffset(i - centerIndex);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        key={i}
        className="absolute -bottom-10 origin-bottom  duration-1000"
        style={{
          transform:\`translateX(\${leftOffset}px) translateY(\${translateY}px) rotateZ(\${rotation}deg) scale(\${scale})\`,
        }}
      >
        <img
          src={
            "https://i.pinimg.com/736x/29/59/08/295908139347b3a99c281c234e537355.jpg"
          }
          alt={t.name}
          className="w-60 h-auto shadow-lg border-2 border-[#333] rounded-lg hover:mb-10 duration-300"
        />
      </button>
      <AnimatePresence>
        {open && <Details i={i} setOpen={setOpen} />}
      </AnimatePresence>
    </>
  );
};

export function Details({
  i,
  setOpen,
}: {
  i: number;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <motion.div className="absolute top-0 left-0 right-0 bottom-0 z-40">
      <div className="w-full h-full grid grid-cols-3 overflow-hidden relative ">
        <motion.div
          {...fall}
          className="w-full h-full bg-black flex items-center justify-center "
        >
          <img
            src={Items[i].img}
            alt=""
            className="h-[80%] w-auto border border-[#333] rounded-lg"
          />
        </motion.div>
        <motion.div
          {...rise}
          className="flex-1 bg-black col-span-2 px-10 flex flex-col justify-center gap-10 "
        >
          <h2 className={\`text-5xl \${ezanity.className}\`}>{Items[i].name}</h2>
          <p className={\`opacity-50 \${kobe.className}\`}>{Items[i].des}</p>
          <button
            onClick={() => setOpen(false)}
            className="w-14 aspect-square text-lg border-2 border-[#333] text-[#f0e299]  rounded-full flex justify-center items-center absolute right-5 top-8 hover:scale-90 duration-300"
          >
            <TfiClose />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}

`;
