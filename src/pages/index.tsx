import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero } from "components/hero";
import { About } from "components/about";
import { Services } from "components/services";
import { Features } from "components/features";
import { Pricing } from "components/pricing";
import { SocialMedia } from "components/social-media";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Features />
      <Pricing />
      <SocialMedia />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ela Dance Studio | Kraków</title>;
