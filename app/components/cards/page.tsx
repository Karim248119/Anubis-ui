import CodePreview from "@/components/CodePreview";
import Card1, { Card1Code } from "@/demo/cards/Card1";
import Card10, { Card10Code } from "@/demo/cards/Card10";
import IceCube, { IceCubeCode } from "@/demo/cards/Card12";
import Card13 from "@/demo/cards/Card13";
import Card14 from "@/demo/cards/Card14";
import Card2, { Card2Code } from "@/demo/cards/Card2";
import Card3, { Card3Code } from "@/demo/cards/Card3";
import Card4, { Card4Code } from "@/demo/cards/Card4";
import Card5, { Card5Code } from "@/demo/cards/Card5";
import Card6, { Card6Code } from "@/demo/cards/Card6";
import Card7, { Card7Code } from "@/demo/cards/Card7";
import Card8, { Card8Code } from "@/demo/cards/Card8";
import Card9, { Card9Code } from "@/demo/cards/Card9";
import React from "react";
import { IoLogoDesignernews } from "react-icons/io5";

export default function page() {
  return (
    <div className="grid grid-cols-2 gap-5">
      <CodePreview
        code={Card1Code}
        component={
          <Card1
            id="01"
            title="UI/UX DESIGN"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque accusantium nisi illum deserunt aspernatur, minima voluptatum, et repellat voluptatem assumenda eveniet explicabo autem, provident expedita voluptates eligendi distinctio maiores saepe?"
            icon={<IoLogoDesignernews />}
          />
        }
        componentClassName="h-[55vh]"
        background="#222222"
      />
      <CodePreview
        code={Card2Code}
        component={
          <Card2
            name="metal air earrings"
            price={100}
            model="https://assets.hermes.com/is/image/hermesproduct/loop-earrings-medium-model--114504B%2000-worn-3-0-0-900-900_g.jpg"
            product="https://assets.hermes.com/is/image/hermesproduct/loop-earrings-medium-model--114504B%2000-front-wm-2-0-0-900-900_g.jpg"
          />
        }
        componentClassName="h-[55vh]"
        background="#FAF8F4"
      />
      <CodePreview
        code={Card3Code}
        component={<Card3 index={0} />}
        componentClassName="h-[55vh]"
        background="#222222"
      />
      <CodePreview
        code={Card4Code}
        component={<Card4 />}
        componentClassName="h-[55vh]"
      />
      <div className="col-span-2">
        <CodePreview
          code={Card5Code}
          component={<Card5 />}
          componentClassName="h-[55vh]"
        />
      </div>
      <CodePreview
        code={Card6Code}
        component={
          <div className="cursor-pointer">
            <Card6 />
          </div>
        }
        componentClassName="h-[55vh]"
        background="#fff"
      />
      <CodePreview
        code={Card7Code}
        component={<Card7 />}
        componentClassName="h-[55vh]"
        background="#e8e8e8"
      />
      <CodePreview
        code={Card8Code}
        component={<Card8 />}
        componentClassName="h-[65vh]"
        background="#fff"
      />
      <CodePreview
        code={Card9Code}
        component={
          <Card9
            name="Tilt pentdant lamp"
            designer="Alex Groot Jebbink,"
            price={549}
            colors={["#889999", "#000"]}
            model="https://cdn.shopify.com/s/files/1/0841/4822/4340/files/eettafel_dine_ignore_02570e15-08e7-4bee-a763-47faa6890a54.jpg"
            product="https://cdn.shopify.com/s/files/1/0841/4822/4340/files/ignore_pendant_lamp_tilt.jpg"
          />
        }
        componentClassName="h-[65vh]"
        background="#FAF8F4"
      />
      <CodePreview
        code={Card10Code}
        component={<Card10 />}
        componentClassName="h-[55vh]"
        background="#222222"
      />
      <CodePreview
        code={IceCubeCode}
        component={<IceCube />}
        componentClassName="h-[55vh]"
        background="#222222"
      />
      <CodePreview
        code={""}
        component={<Card13 />}
        componentClassName="h-[70vh]"
      />
      <CodePreview
        code={""}
        component={<Card14 />}
        componentClassName="h-[70vh]"
      />
    </div>
  );
}
