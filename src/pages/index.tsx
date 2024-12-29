import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero } from "components/hero";
import { About } from "components/about";
import { Services } from "components/services";
import { Features } from "components/features";
import { Pricing } from "components/pricing";
import { SocialMedia } from "components/social-media";
import { FAQ } from "components/faq";
import { Contact } from "components/contact";
import { Steps } from "components/steps";
import { Welcome } from "components/welcome";
import { Navigation } from "components/navigation";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navigation isHome />
      <Hero />
      <About />
      <Steps />
      {/* <Welcome /> */}
      {/* <Services /> */}
      <Features />
      <Pricing />
      <SocialMedia />
      <FAQ />
      <Contact />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Ela Dance Studio | Kraków</title>
  </>
);
