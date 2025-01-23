import * as React from "react";
import { GatsbyBrowser } from "gatsby";
import { Navigation } from "components/navigation";
import { Footer } from "components/footer";
import CookiesBanner from "components/cookies-banner/cookies-banner";

export const WrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => (
  <main>
    {element}
    <Footer />
    <CookiesBanner />
  </main>
);
