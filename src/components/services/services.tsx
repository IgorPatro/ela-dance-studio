import { useImagesContext } from "context/images-context/images-context";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { getImage } from "utils/image";

export const Services = () => {
  const { service1, service2, service3 } = useImagesContext();

  return (
    <section className="py-10">
      <div className="layout-container flex flex-col gap-8">
        <header className="flex flex-col gap-2 max-w-4xl text-center">
          <p className="uppercase flex gap-2 items-center text-base text-primary justify-center">
            <CgInfinity className="w-8 h-8" /> co możemy dla ciebie zrobić
          </p>
          <h1 className="font-display text-5xl text-gray-900">Nasze usługi</h1>
          <p className="text-xl text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            distinctio.
          </p>
        </header>
        <div className="flex flex-col gap-2">
          <GatsbyImage
            className="w-full"
            image={getImage(service1)}
            alt="XXXXX"
          />
          <GatsbyImage
            className="w-full"
            image={getImage(service2)}
            alt="XXXXXX"
          />
          <GatsbyImage
            className="w-full"
            image={getImage(service3)}
            alt="YYYYYYYYYYYY"
          />
        </div>
      </div>
    </section>
  );
};
