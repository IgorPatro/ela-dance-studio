import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImagesContext } from "context/images-context/images-context";
import { getImage } from "utils/image";

export const Hero = () => {
  const { hero } = useImagesContext();

  return (
    <div className="w-full min-h-screen relative">
      <h1>Hero</h1>
      <GatsbyImage
        class="min-h-screen max-h-screen w-full absolute top-0 left-0 -z-10"
        image={getImage(hero)}
        alt="Astronauta"
      />
    </div>
  );
};
