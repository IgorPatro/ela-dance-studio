import { contactUrl, stepsUrl } from "components/navigation/utils";
import { Button } from "components/shared/button";
import { useImagesContext } from "context/images-context/images-context";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { getImage } from "utils/image";
import { renderPetals } from "utils/petal";

const STEP_ITEMS = [
  "Wspólny wybór choreografi",
  "Nauka podstawowych kroków",
  "Nauka choreografii",
  "Wybór idealnej piosenki",
  "Nauka tańca w przyjemej atmosferze 😉",
];

const petals = [
  "hidden lg:block w-18 h-18 absolute top-[15%] -right-6 z-10 rotate-[-135deg]",
];

export const Steps = () => {
  const { petal } = useImagesContext();

  return (
    <section id={stepsUrl} className="py-10 lg:py-14 2xl:py-16 relative">
      <div className="layout-container flex flex-col-reverse gap-8 lg:flex-row lg:items-center">
        <div className="lg:w-1/2">
          <ul className="flex flex-col gap-2">
            {STEP_ITEMS.map((item) => (
              <li
                key={item}
                className="flex gap-2 items-center font-display text-lg"
              >
                <GatsbyImage
                  objectFit="contain"
                  class="w-8 h-8 blur-[1px] rotate-[240deg] -translate-y-[2px]"
                  image={getImage(petal)}
                  alt="Płatek"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <header className="flex flex-col gap-2 max-w-4xl lg:w-1/2">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> jak wygląda nauka
          </p>
          <h1 className="font-display text-5xl text-gray-900">
            Pierwsze kroki
          </h1>
          <p className="text-lg">
            Gwarantuję, że nie będziecie mogli oderwać się od tańca i będziecie
            trenować codzienie!
          </p>
          <p>
            A po wszystkim jeżeli tylko będziecie chcieli potrenujemy taniec
            użytkowy, dzięki któremu zatańczycie do każdej muzyki i w każdym
            miejscu. W końcu na weselu trzeba czarować całą noc 😉
          </p>
          <Button className="mt-4" href={"#" + contactUrl}>
            Rozpocznij naukę
          </Button>
        </header>
      </div>
      {renderPetals(petals)}
    </section>
  );
};
