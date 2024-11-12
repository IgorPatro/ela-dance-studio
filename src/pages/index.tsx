import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Hero } from "components/hero";
import { About } from "components/about";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Ela Dance Studio | Kraków</title>;
