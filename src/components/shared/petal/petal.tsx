import { useImagesContext } from "context/images-context/images-context";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "utils/image";
import React from "react";
import { twMerge } from "tailwind-merge";

interface PetalProps {
  className?: string;
}

export const Petal = ({ className }: PetalProps) => {
  const { petal } = useImagesContext();

  return (
    <GatsbyImage
      className={twMerge(className, "opacity-80")}
      image={getImage(petal)}
      alt="Płatek róży"
      objectFit="contain"
    />
  );
};
