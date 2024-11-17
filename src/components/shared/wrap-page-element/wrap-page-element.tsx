import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { Navigation } from "components/navigation";
import { Footer } from "components/footer";

export const WrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => (
  <main>
    <Navigation />
    {element}
    <Footer />
  </main>
);
