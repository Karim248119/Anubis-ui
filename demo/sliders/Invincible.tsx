/* eslint-disable @next/next/no-img-element */
"use client";
import { Fonts } from "@/lib/fonts";
import React from "react";
import AudioButton from "../buttons/AudioButton";

const Variants = [
  {
    name: "Masked ",
    description: `The only variant of Mark that is fully masked. This mask comes in the form of a black head covering, meaning no skin is visible on his body. This version of Invincible later says that he did not hate his mother and wishes to reunite with her, revealing that this is what Angstrom promised him for his cooperation. Regardless, Angstrom breaks the deal even after Masked Invincible destroyed Sydney, sending him to the wasteland universe alongside his other variants.`,
    img: "https://i.pinimg.com/736x/b5/e0/25/b5e0258b567b1cb4bd332b9a92ebff89.jpg",
    background: "#3567A6",
    text: "#020202",
  },
  {
    name: "Sinister ",
    description: `Sinister Invincible is differentiated due to his eponymous nature, being outwardly more evil and threatening than our Mark. He is visually distinct due to his black and yellow costume and the long, flowing cape he wears, which can be spotted during his final scene when he is stranded in the wasteland dimension from Invincible season 2's ending after failing to obey Angstrom.`,
    img: "https://i.pinimg.com/736x/ce/29/ed/ce29edf203aae84053f0de6545f0ac64.jpg",
    background: "#E9C42A",
    text: "#020100",
  },

  {
    name: "Viltrumite ",
    description: `This variant sports the logo of the Viltrum Empire, proving this version to be a loyal soldier of the authoritarian rulers in his own universe. During the Invincible War, Viltrumite Invincible is shown fighting Wolf-Man, stating he has killed him before and he will kill him again. Wolf-Man survived, but Viltrumite Invincible won the fight, as he is later stranded by Angstrom.`,
    img: "https://i.pinimg.com/736x/e6/34/56/e6345681c8b2cdc3a3318be01c8e3401.jpg",
    background: "#EDEDED",
    text: "#B6B7B9",
  },

  {
    name: "Omni ",
    description: `As his name suggests, Omni-Man Invincible is discerned by his red and white outfit that resembles Mark's father. As such, it seems that Invincible killed his father in that universe as he had in others, taking the moniker of Omni-Man for himself. Omni-Man Invincible survives the ReAnimen attack that kills Hooded Invincible, as he is later shown laying waste to Tokyo before being stranded by Angstrom.`,
    img: "https://i.pinimg.com/736x/41/cb/70/41cb7016727cc9151480a51ab9e9e95b.jpg",
    background: "#DC230F",
    text: "#A4DEE0",
  },
  {
    name: "Mohawk ",
    description: `Like Sinister Invincible, Mohawk Invincible gets a bigger focus in Invincible season 3, episode 7. Despite being beaten into submission, Mohawk Invincible - differentiated via his black and blue suit and signature hairstyle - escapes and later destroys the Empire State Building. Mohawk Invincible is part of the group trapped in another dimension by Angstrom Levy by the episode's end.`,
    img: "https://i.pinimg.com/736x/3c/6c/cf/3c6ccff3aa6b220c3c54c89d427a2b75.jpg",
    background: "#1C5F89",
    text: "#000201",
  },
  {
    name: "Presoner ",
    description: `One of the most distinctive variants of Invincible is Prison Invincible, a bald, scarred version of Mark in a white and grey prison uniform. This version of Mark is shown attacking Moscow in Invincible season 3, episode 7, remarking that he needs a warm-up after spending a year in a Viltrumite prison. Prison Mark is part of the group that is stranded by Angstrom at the end of the episode.`,
    img: "https://i.pinimg.com/736x/19/43/61/194361bd717b92fff991c081d2b3a001.jpg",
    background: "#AEADA9",
    text: "#71746F",
  },
  {
    name: "Hooded ",
    description: `After defeating Mohawk Invincible, Mark finds himself going up against Hooded Invincible. This version is distinct, thanks to the front hood he wears, which is a blue piece of fabric that hangs below his chin. Hooded Invincible takes on Mark and Eve directly during one part of the Invincible War, before being seemingly killed by Cecil's ReAnimen, given he was not part of the group stranded by Angstrom.`,
    img: "https://i.pinimg.com/736x/b8/92/e2/b892e2aca60a8dc8279c70582be806ff.jpg",
    background: "#0A94EC",
    text: "#F6DE1A",
  },
  {
    name: "Flaxan ",
    description: `Flaxan Invincible is another of the more recognizable evil variants of Mark. This version is shown wearing blue and gray Flaxan armor, which was highlighted by the Flaxan invasion in Invincible season 1. Little about this version of Mark is known other than his ties to the Flaxans in his own universe and that Cecil, Donald, and the ReAnimen of the GDA defeated him during the Invincible War.`,
    img: "https://i.pinimg.com/736x/f7/83/a5/f783a5bca9ddb3485f69bb62d3e3c2af.jpg",
    background: "#2A4540",
    text: "#00A1CD",
  },
];

export default function InvincibleSlider() {
  const [index, setIndex] = React.useState(1);

  return (
    <div
      className="w-full h-full overflow-hidden relative duration-300"
      style={{
        background: Variants[index].background,
        color: Variants[index].text,
      }}
    >
      <div className="absolute top-1/2 right-5 -translate-y-1/2 flex gap-2 flex-col z-10">
        {Variants.map((item, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-4 rounded-full duration-200 ${
              index === i ? "opacity-100" : "opacity-35"
            }`}
            style={{ background: Variants[index].text }}
          ></button>
        ))}
      </div>

      <div className="w-full h-full grid grid-cols-2 items-center">
        <div className="p-10">
          <h2 className={`text-6xl ${Fonts.woodBlock.className}`}>
            {Variants[index].name} Mark
          </h2>
          <p className="opacity-75 my-4 min-h-52">
            {Variants[index].description}
          </p>
          <AudioButton src="/TomTom.mp3" color={Variants[index].text} />
        </div>

        <div className="w-full h-full flex  relative">
          <div
            className="flex flex-col  justify-center items-center absolute left-0 top-[15vh] duration-300"
            style={{
              transformStyle: "preserve-3d",
              transform: `translateX(${index * 15}px) translateY(${
                index * -192
              }px) rotateX(-10deg) rotateY(50deg) rotateZ(10deg)`,
              WebkitTransformStyle: "preserve-3d",
            }}
          >
            {Variants.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={item.name}
                className={`object-cover duration-500 ${
                  i === index
                    ? "w-96 h-52 opacity-100"
                    : "w-80 h-48 opacity-50 grayscale"
                }
                ${index === i + 1 || index === i - 1 ? "cursor-pointer" : ""}
                `}
                onClick={index === i ? undefined : () => setIndex(i)}
                style={{
                  boxShadow:
                    index === i
                      ? "30px 20px 20px rgba(0, 0, 0, 0.5),-1px -1px 10px rgba(0, 0, 0, 0.2)"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const InvincibleSliderCode = `/* eslint-disable @next/next/no-img-element */
"use client";
import { Fonts } from "@/lib/fonts";
import React from "react";
import AudioButton from "../buttons/AudioButton";

const Variants = [
  {
    name: "Masked ",
    description: \`The only variant of Mark that is fully masked. This mask comes in the form of a black head covering, meaning no skin is visible on his body. This version of Invincible later says that he did not hate his mother and wishes to reunite with her, revealing that this is what Angstrom promised him for his cooperation. Regardless, Angstrom breaks the deal even after Masked Invincible destroyed Sydney, sending him to the wasteland universe alongside his other variants.\`,
    img: "https://i.pinimg.com/736x/b5/e0/25/b5e0258b567b1cb4bd332b9a92ebff89.jpg",
    background: "#3567A6",
    text: "#020202",
  },
  {
    name: "Sinister ",
    description: \`Sinister Invincible is differentiated due to his eponymous nature, being outwardly more evil and threatening than our Mark. He is visually distinct due to his black and yellow costume and the long, flowing cape he wears, which can be spotted during his final scene when he is stranded in the wasteland dimension from Invincible season 2's ending after failing to obey Angstrom.\`,
    img: "https://i.pinimg.com/736x/ce/29/ed/ce29edf203aae84053f0de6545f0ac64.jpg",
    background: "#E9C42A",
    text: "#020100",
  },
  {
    name: "Viltrumite ",
    description: \`This variant sports the logo of the Viltrum Empire, proving this version to be a loyal soldier of the authoritarian rulers in his own universe. During the Invincible War, Viltrumite Invincible is shown fighting Wolf-Man, stating he has killed him before and he will kill him again. Wolf-Man survived, but Viltrumite Invincible won the fight, as he is later stranded by Angstrom.\`,
    img: "https://i.pinimg.com/736x/e6/34/56/e6345681c8b2cdc3a3318be01c8e3401.jpg",
    background: "#EDEDED",
    text: "#B6B7B9",
  },
  {
    name: "Omni ",
    description: \`As his name suggests, Omni-Man Invincible is discerned by his red and white outfit that resembles Mark's father. As such, it seems that Invincible killed his father in that universe as he had in others, taking the moniker of Omni-Man for himself. Omni-Man Invincible survives the ReAnimen attack that kills Hooded Invincible, as he is later shown laying waste to Tokyo before being stranded by Angstrom.\`,
    img: "https://i.pinimg.com/736x/41/cb/70/41cb7016727cc9151480a51ab9e9e95b.jpg",
    background: "#DC230F",
    text: "#A4DEE0",
  },
  {
    name: "Mohawk ",
    description: \`Like Sinister Invincible, Mohawk Invincible gets a bigger focus in Invincible season 3, episode 7. Despite being beaten into submission, Mohawk Invincible - differentiated via his black and blue suit and signature hairstyle - escapes and later destroys the Empire State Building. Mohawk Invincible is part of the group trapped in another dimension by Angstrom Levy by the episode's end.\`,
    img: "https://i.pinimg.com/736x/3c/6c/cf/3c6ccff3aa6b220c3c54c89d427a2b75.jpg",
    background: "#1C5F89",
    text: "#000201",
  },
  {
    name: "Presoner ",
    description: \`One of the most distinctive variants of Invincible is Prison Invincible, a bald, scarred version of Mark in a white and grey prison uniform. This version of Mark is shown attacking Moscow in Invincible season 3, episode 7, remarking that he needs a warm-up after spending a year in a Viltrumite prison. Prison Mark is part of the group that is stranded by Angstrom at the end of the episode.\`,
    img: "https://i.pinimg.com/736x/19/43/61/194361bd717b92fff991c081d2b3a001.jpg",
    background: "#AEADA9",
    text: "#71746F",
  },
  {
    name: "Hooded ",
    description: \`After defeating Mohawk Invincible, Mark finds himself going up against Hooded Invincible. This version is distinct, thanks to the front hood he wears, which is a blue piece of fabric that hangs below his chin. Hooded Invincible takes on Mark and Eve directly during one part of the Invincible War, before being seemingly killed by Cecil's ReAnimen, given he was not part of the group stranded by Angstrom.\`,
    img: "https://i.pinimg.com/736x/b8/92/e2/b892e2aca60a8dc8279c70582be806ff.jpg",
    background: "#0A94EC",
    text: "#F6DE1A",
  },
  {
    name: "Flaxan ",
    description: \`Flaxan Invincible is another of the more recognizable evil variants of Mark. This version is shown wearing blue and gray Flaxan armor, which was highlighted by the Flaxan invasion in Invincible season 1. Little about this version of Mark is known other than his ties to the Flaxans in his own universe and that Cecil, Donald, and the ReAnimen of the GDA defeated him during the Invincible War.\`,
    img: "https://i.pinimg.com/736x/f7/83/a5/f783a5bca9ddb3485f69bb62d3e3c2af.jpg",
    background: "#2A4540",
    text: "#00A1CD",
  },
];

export default function InvincibleSlider() {
  const [index, setIndex] = React.useState(1);

  return (
    <div
      className="w-full h-full overflow-hidden relative duration-300"
      style={{
        background: Variants[index].background,
        color: Variants[index].text,
      }}
    >
      <div className="absolute top-1/2 right-5 -translate-y-1/2 flex gap-2 flex-col z-10">
        {Variants.map((item, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={\`w-2 h-4 rounded-full duration-200 \${index === i ? "opacity-100" : "opacity-35"}\`}
            style={{ background: Variants[index].text }}
          ></button>
        ))}
      </div>

      <div className="w-full h-full grid grid-cols-2 items-center">
        <div className="p-10">
          <h2 className={\`text-6xl \${Fonts.woodBlock.className}\`}>
            {Variants[index].name} Mark
          </h2>
          <p className="opacity-75 my-4 min-h-52">
            {Variants[index].description}
          </p>
          <AudioButton src="/TomTom.mp3" color={Variants[index].text} />
        </div>

        <div className="w-full h-full flex relative">
          <div
            className="flex flex-col justify-center items-center absolute left-0 top-[15vh] duration-300"
            style={{
              transformStyle: "preserve-3d",
              transform: \`translateX(\${index * 15}px) translateY(\${index * -192}px) rotateX(-10deg) rotateY(50deg) rotateZ(10deg)\`,
              WebkitTransformStyle: "preserve-3d",
            }}
          >
            {Variants.map((item, i) => (
              <img
                key={i}
                src={item.img}
                alt={item.name}
                className={\`object-cover duration-500 \${i === index ? "w-96 h-52 opacity-100" : "w-80 h-48 opacity-50 grayscale"} \${index === i + 1 || index === i - 1 ? "cursor-pointer" : ""}\`}
                onClick={index === i ? undefined : () => setIndex(i)}
                style={{
                  boxShadow:
                    index === i
                      ? "30px 20px 20px rgba(0, 0, 0, 0.5),-1px -1px 10px rgba(0, 0, 0, 0.2)"
                      : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
`;
