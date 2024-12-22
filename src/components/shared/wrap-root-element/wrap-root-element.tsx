import * as React from "react";
import { GatsbyBrowser, Script } from "gatsby";
import { ImagesContextProvider } from "context/images-context";

export const WrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => (
  <ImagesContextProvider>
    {/* Calendly */}
    <link
      href="https://assets.calendly.com/assets/external/widget.css"
      rel="stylesheet"
    />
    <Script
      src="https://assets.calendly.com/assets/external/widget.js"
      type="text/javascript"
      async
    />
    {element}
  </ImagesContextProvider>
);
