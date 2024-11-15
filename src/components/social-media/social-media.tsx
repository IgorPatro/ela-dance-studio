import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImagesContext } from "context/images-context/images-context";
import { getImage } from "utils/image";
import { CgInfinity } from "react-icons/cg";
import { Button } from "components/shared/button";

export const SocialMedia = () => {
  const { social_media } = useImagesContext();

  return (
    <section className="w-full relative items-center justify-center flex py-24">
      <div className="layout-container">
        <header className="flex flex-col gap-2 max-w-4xl">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> więcej naszych zdjęć
          </p>
          <h1 className="font-display text-5xl text-gray-900">
            Nasze social media
          </h1>
          <p className="text-base text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            quam odio. Proin elementum in nibh at maximus.
          </p>
          <Button className="mt-10">Instagram</Button>
        </header>
      </div>
      <GatsbyImage
        class="min-h-full max-h-full h-full w-full absolute top-0 left-0 -z-10 [&>img]:object-bottom"
        image={getImage(social_media)}
        alt="Para w trzymająca się za ręcę na białym tle"
      />
    </section>
  );
};
