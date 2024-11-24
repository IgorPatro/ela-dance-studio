import { faqUrl } from "components/navigation/utils";
import { Accordion } from "components/shared/accordion";
import React from "react";
import { CgInfinity } from "react-icons/cg";

const FAQ_ITEMS = [
  {
    title: "Czy są dojazdy do domu?",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in ut est quam laborum illum reprehenderit atque quas esse sed.",
  },
  {
    title: "Czy są dojazdy do domu? v2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in ut est quam laborum illum reprehenderit atque quas esse sed.",
  },
  {
    title: "Czy są dojazdy do domu? v3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in ut est quam laborum illum reprehenderit atque quas esse sed.",
  },
  {
    title: "Czy są dojazdy do domu? v4",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis in ut est quam laborum illum reprehenderit atque quas esse sed.",
  },
];

export const FAQ = () => {
  return (
    <section id={faqUrl} className="py-10 lg:py-14 2xl:py-16">
      <div className="layout-container flex flex-col-reverse gap-8 lg:flex-row lg:gap-16">
        <div className="flex flex-col gap-4 lg:w-1/2">
          {FAQ_ITEMS.map((item) => (
            <Accordion key={item.title} title={item.title}>
              {item.content}
            </Accordion>
          ))}
        </div>
        <header className="flex flex-col gap-2 max-w-4xl lg:w-1/2">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> o co pytają pary młode
          </p>
          <h1 className="font-display text-5xl text-gray-900">FAQ</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
            quam odio. Proin elementum in nibh at maximus. Pellentesque dapibus
            iaculis imperdiet. Vestibulum eget ligula iaculis.
          </p>
        </header>
      </div>
    </section>
  );
};
