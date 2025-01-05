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
    <meta
      name="description"
      content="Ela Dance Studio - nauka tańca w Krakowie. Oczaruj gości swoim pierwszym tańcem."
    />
    <meta
      name="keywords"
      content="nauka tańca, nauka tańca kraków, pierwszy taniec, pierwszy taniec kraków, kurs tańca, kurs tańca kraków, nauka tańca weselnego, pierwszy taniec weselny kraków, studio tańca kraków, taniec w krakowie, szkoła tańca, szkoła tańca kraków, kursy tańca indywidualne, instruktor tańca, kursy tańca dla par, choreografia, dwa na jeden, 2 na 1 kraków, taniec weselny, nauka walca, nauka walca weselnego, nauka tańca ślubnego, nauka pierwszego tańca, taniec towarzyski, taniec dla każdego"
    />
  </>
);
