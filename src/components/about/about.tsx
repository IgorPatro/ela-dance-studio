import { aboutUrl } from "components/navigation/utils";
import { Petal } from "components/shared/petal";
import { useImagesContext } from "context/images-context/images-context";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { getImage } from "utils/image";
import { renderPetals } from "utils/petal";

const petals = [
  "!hidden lg:!block w-18 h-18 absolute top-[15%] -left-6 z-10 rotate-[135deg]",
  "w-8 h-8 absolute top-[25%] right-[1%] lg:right-[10%] z-10 rotate-[225deg]",
];

export const About = () => {
  const { about } = useImagesContext();

  return (
    <section
      id={aboutUrl}
      className="relative py-10 lg:py-14 lg:pt-24 2xl:py-16 2xl:pt-32"
    >
      <div className="layout-container flex flex-col gap-8 lg:flex-row lg:gap-16 items-center justify-center">
        <header className="flex flex-col gap-2 max-w-4xl lg:w-1/2">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> dowiedz się więcej
          </p>
          <h1 className="font-display text-5xl text-gray-900">O mnie</h1>
          <p>
            Moja przygoda z tańcem zaczęła się, gdy miałam 4 lata i szybko stał
            się on moją największą pasją. Dziś posiadam najwyższą polską klasę
            taneczną „A” w stylu standardowym i mam na koncie liczne sukcesy na
            turniejach w Polsce i za granicą, w tym finały Pucharu Mariana
            Wieczystego i Pucharu Polski.
          </p>
          <p>
            Moja pasja do muzyki nie kończy się na tańcu – ukończyłam również
            szkołę muzyczną, co pozwala mi lepiej rozumieć rytm i harmonię.
            Dzięki temu tworzę choreografie, które idealnie współgrają z wybraną
            melodią, nadając każdemu układowi wyjątkowy charakter.
          </p>
          <p>
            Taniec pozwala mi wyrażać emocje i czerpać radość, którą z pasją
            przekazuję innym, pomagając im odkrywać piękno ruchu 😊
          </p>
        </header>
        <div className="image-wrapper w-full relative lg:w-1/2">
          <GatsbyImage
            className="w-full"
            image={getImage(about)}
            alt="O mnie"
            objectFit="contain"
            objectPosition="center"
          />
          <Petal className="w-16 h-16 absolute bottom-[-15%] left-[43%] z-10 rotate-[135deg]" />
        </div>
      </div>
      {renderPetals(petals)}
    </section>
  );
};
