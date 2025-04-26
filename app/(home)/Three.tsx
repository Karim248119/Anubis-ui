import Button from "@/components/Button";
import ModelCanvas from "@/components/Model";
import Card5 from "@/demo/cards/Card5";
import React from "react";

export default function Three() {
  return (
    <div className="w-full md:h-[80vh] h-[100vh] grid md:grid-cols-3 md:grid-rows-1 grid-rows-2 md:px-20 px-5 pt-10">
      <div className="w-full h-full flex justify-center items-center col-span-2">
        <div className="md:w-2/3 space-y-4">
          <h2 className="md:text-6xl text-2xl font-bold font-sans">
            3D Models
          </h2>
          <p className="text-foreground/60 md:text-base text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ex
            cum laudantium, debitis eos, ea eveniet, aperiam dicta eligendi
            molestiae laborum assumenda dolores exercitationem! Sequi
            necessitatibus alias aut velit commodi!
          </p>
          <Button
            href="/components/3d/shirt"
            variant="link"
            className="mt-20 -mb-10 w-fit"
          >
            More 3D Models
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex ">
        <ModelCanvas model="/3d/anubis_-_abstract_bust.glb" scale={1.2} />
      </div>
    </div>
  );
}
