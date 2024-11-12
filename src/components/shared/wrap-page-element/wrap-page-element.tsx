import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { Navigation } from "components/navigation";

export const WrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => (
  <main>
    <Navigation />
    {element}
  </main>
);
