import Button from "@/components/Button";
import ModelCanvas from "@/components/Model";
import Card5 from "@/demo/cards/Card5";
import React from "react";

export default function Three() {
  return (
    <div className="w-full h-[80vh] grid grid-cols-3 px-20 ">
      <div className="w-full h-full flex justify-center items-center col-span-2">
        <div className="w-2/3 space-y-4">
          <h2 className="text-6xl font-bold font-sans">3D Models</h2>
          <p className="text-foreground/60">
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
            View Components
          </Button>
        </div>
      </div>
      <div className="w-full h-full flex ">
        <ModelCanvas model="/3d/anubis_-_abstract_bust.glb" scale={1.2} />
      </div>
    </div>
  );
}
