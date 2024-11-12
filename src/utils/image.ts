import {
  getImage as getImagePrimitive,
  IGatsbyImageData,
  ImageDataLike,
} from "gatsby-plugin-image";

export const getImage = (node: ImageDataLike | null) => {
  return getImagePrimitive(node) as IGatsbyImageData;
};
