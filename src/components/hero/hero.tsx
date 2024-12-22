import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImagesContext } from "context/images-context/images-context";
import { getImage } from "utils/image";
import { CgInfinity } from "react-icons/cg";
import { Button } from "components/shared/button";
import { aboutUrl, homeUrl } from "components/navigation/utils";
import { renderPetals } from "utils/petal";

const petals = [
  "w-12 h-12 absolute bottom-[5%] right-[25%] z-10 rotate-[-55deg]",
  "w-14 h-14 absolute top-[20%] left-[5%] z-10 rotate-[55deg]",
  "hidden md:block w-8 h-8 absolute top-[25%] right-[5%] z-10 rotate-[35deg]",
  "hidden lg:block w-8 h-8 absolute bottom-[15%] left-[25%] z-10 rotate-[39deg]",
  "hidden lg:block w-8 h-8 absolute top-[15%] left-[45%] z-10 rotate-[195deg]",
  "hidden xl:block w-18 h-18 absolute bottom-[20%] right-[10%] z-10 rotate-[195deg]",
];

export const Hero = () => {
  const { hero } = useImagesContext();

  return (
    <section
      id={homeUrl}
      className="w-full min-h-screen max-h-screen relative items-center justify-center flex"
    >
      <div className="layout-container">
        <header className="flex flex-col gap-2 md:gap-3 max-w-xl pt-10">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> przepis na idealne wesele
          </p>
          <h1 className="font-display text-5xl xl:text-7xl text-gray-900">
            Oczaruj gości <br /> swoim pierwszym tańcem
          </h1>
          <p className="text-xl text-gray-500">
            Marzysz o wspaniałym tańcu na swoim ślubie? Ze mną to możliwe!
          </p>
          <Button href={"#" + aboutUrl} className="mt-6">
            Zobacz więcej
          </Button>
        </header>
      </div>
      <GatsbyImage
        className="min-h-screen max-h-screen w-full absolute top-0 left-0 -z-10 [&>img]:object-bottom"
        image={getImage(hero)}
        alt="Para w sali tanecznej patrząca w okno"
      />
      {renderPetals(petals)}
    </section>
  );
};
