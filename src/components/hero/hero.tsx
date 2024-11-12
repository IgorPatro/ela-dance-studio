import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImagesContext } from "context/images-context/images-context";
import { getImage } from "utils/image";
import { CgInfinity } from "react-icons/cg";
import { Button } from "components/shared/button";

export const Hero = () => {
  const { hero } = useImagesContext();

  return (
    <div className="w-full min-h-screen max-h-screen relative items-center flex">
      <div className="flex flex-col gap-2 m-10 max-w-4xl pt-10">
        <p className="uppercase flex gap-2 items-center text-base text-primary">
          <CgInfinity className="w-8 h-8" /> znajdź swoją szansę
        </p>
        <h1 className="font-display text-7xl">
          Oczaruj gości <br /> swoim tańcem
        </h1>
        <p className="text-xl text-gray-500">
          Najlepsza szkoła w <strong>Kraków</strong>
        </p>
        <Button className="mt-10">Zobacz więcej</Button>
      </div>
      <GatsbyImage
        class="min-h-screen max-h-screen w-full absolute top-0 left-0 -z-10 [&>img]:object-bottom"
        image={getImage(hero)}
        alt="Para w sali tanecznej patrząca w okno"
      />
    </div>
  );
};