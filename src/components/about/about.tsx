import { useImagesContext } from "context/images-context/images-context";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { getImage } from "utils/image";

export const About = () => {
  const { about } = useImagesContext();

  return (
    <section className="py-10">
      <div className="layout-container flex flex-col gap-8">
        <header className="flex flex-col gap-2 max-w-4xl">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> dowiedź się więcej
          </p>
          <h1 className="font-display text-5xl text-gray-900">
            O dance studio
          </h1>
          <p className="text-xl">
            Nasze szybkie motto tutaj znaleźć się powinno i naszych kursantów
            motywować
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            quam odio. Proin elementum in nibh at maximus. Pellentesque dapibus
            iaculis imperdiet. Vestibulum eget ligula iaculis, semper neque eu,
            sagittis est. Quisque eget dolor sit amet tellus pretium sodales.
            Nunc rhoncus tellus id velit finibus ultrices. Praesent sed tortor
            pulvinar, molestie eros non, consectetur tortor.
          </p>
        </header>
        <GatsbyImage className="w-full" image={getImage(about)} alt="O nas" />
      </div>
    </section>
  );
};
