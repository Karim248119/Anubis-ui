import React from "react";
import Image from "next/image";

import stark from "@/public/random/got/Stark by Jie Feng (2).png";
import starkLogo from "@/public/random/got/Stark by Jie Feng (3).png";
import lannister from "@/public/random/got/Lannister by Jie Feng (2).png";
import lannisterLogo from "@/public/random/got/Lannister by Jie Feng (1).png";
import targaryan from "@/public/random/got/Targaryen by Jie Feng (2).png";
import targaryanLogo from "@/public/random/got/Targaryen by Jie Feng (1).png";
import baratheon from "@/public/random/got/Baratheon by Jie Feng (2).png";
import baratheonLogo from "@/public/random/got/Baratheon by Jie Feng (1).png";
import highTower from "@/public/random/got/HighTower by Jie Feng (2).png";
import highTowerLogo from "@/public/random/got/HighTower by Jie Feng (1).png";
import bolton from "@/public/random/got/bolton (1).jpg";
import boltonLogo from "@/public/random/got/bolton.png";
import tully from "@/public/random/got/Tully by Jie Feng (2).png";
import tullyLogo from "@/public/random/got/Tully by Jie Feng (1).png";
import greyjoy from "@/public/random/got/Greyjoy by Jie Feng (2).png";
import greyjoyLogo from "@/public/random/got/Greyjoy by Jie Feng (1).png";
import martell from "@/public/random/got/Martell by Jie Feng (2).png";
import martellLogo from "@/public/random/got/Martell by Jie Feng (1).png";
import tyrell from "@/public/random/got/Tyrell by Jie Feng (2).png";
import tyrellLogo from "@/public/random/got/Tyrell by Jie Feng (1).png";
import arryn from "@/public/random/got/Arryn by Jie Feng (2).png";
import arrynLogo from "@/public/random/got/Arryn by Jie Feng (1).png";
import kastark from "@/public/random/got/kastark (1).jpg";
import kastarkLogo from "@/public/random/got/kastark.png";
import faceless from "@/public/random/got/faceless (1).jpg";
import facelessLogo from "@/public/random/got/faceless(2).png";

const Houses = [
  {
    name: "Stark",
    logo: starkLogo,
    image: stark,
    url: "https://www.youtube.com/watch?v=8zF98rGIElo&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "Lannister",
    logo: lannisterLogo,
    image: lannister,
    url: "https://www.youtube.com/watch?v=SQU7kQOaDtc&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "Targaryen",
    logo: targaryanLogo,
    image: targaryan,
    url: "https://www.youtube.com/watch?v=kYGi2Ly0oBs&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "Baratheon",
    logo: baratheonLogo,
    image: baratheon,
    url: "https://www.youtube.com/watch?v=u-pyxOoq_uM&ab_channel=XEgalmothOfGondolin",
  },
  {
    name: "High Tower",
    logo: highTowerLogo,
    image: highTower,
    url: "https://youtu.be/tEVqSop45Ck?si=DDt432IbjKDNHBdu",
  },
  {
    name: "Bolton",
    logo: boltonLogo,
    image: bolton,
    url: "https://www.youtube.com/watch?v=mbHWKxda0nU&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "Tully",
    logo: tullyLogo,
    image: tully,
    url: "https://www.youtube.com/watch?v=dxSSamDuvtE&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "Greyjoy",
    logo: greyjoyLogo,
    image: greyjoy,
    url: "https://www.youtube.com/watch?v=lPb0vSgH6Zs&ab_channel=gameofthronesfan94",
  },
  {
    name: "Martell",
    logo: martellLogo,
    image: martell,
    url: "https://www.youtube.com/watch?v=6VCGXAYYntc&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "Tyrell",
    logo: tyrellLogo,
    image: tyrell,
    url: "https://www.youtube.com/watch?v=dFcGMmcFDWE&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "arryn",
    logo: arrynLogo,
    image: arryn,
    url: "https://www.youtube.com/watch?v=2MJ5zbgNTVk&ab_channel=ASongofIceandFireChapters",
  },
  {
    name: "kastart",
    logo: kastarkLogo,
    image: kastark,
    url: "https://www.youtube.com/watch?v=lqDNZ7imt74",
  },
  {
    name: "faceless",
    logo: facelessLogo,
    image: faceless,
    url: "https://www.youtube.com/watch?v=YaZA6ik2ESk",
  },
];
export default function GOT() {
  return (
    <div className="flex flex-wrap justify-center gap-5 overflow-hidden">
      {Houses.map((house, idx) => (
        <a
          key={idx}
          href={house.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group"
        >
          <Image
            src={house.image}
            alt={house.name}
            className="w-ful w-48 h-80 rounded-lg"
          />
          <Image
            src={house.logo}
            alt={house.name}
            className="absolute top-3 left-0 group-hover:rotate-180 duration-500"
          />
        </a>
      ))}
    </div>
  );
}
