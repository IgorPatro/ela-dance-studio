import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { ImagesContextProvider } from "context/images-context/images-context";

export const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => <ImagesContextProvider>{element}</ImagesContextProvider>;
