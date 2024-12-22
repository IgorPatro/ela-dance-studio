import React from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { Feature } from "components/features/feature";
import { FaCar } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { TbBulb } from "react-icons/tb";
import { renderPetals } from "utils/petal";

const FEATURE_ITEMS = [
  {
    title: "Doświadczenie",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at quam odio. Proin elementum in nibh at maximus. ",
    icon: CiBadgeDollar,
  },
  {
    title: "Dojazd do domu",
    content:
      "Pellentesque dapibus iaculis imperdiet. Vestibulum eget ligula iaculis, semper neque eu, sagittis est.",
    icon: FaCar,
  },
  {
    title: "Personalne podejście",
    content:
      "Quisque eget dolor sit amet tellus pretium sodales. Nunc rhoncus tellus id velit",
    icon: ImUserTie,
  },
  {
    title: "Kreatywność",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at quam odio. Proin elementum in nibh at maximus. ",
    icon: TbBulb,
  },
];

const petals = [
  "hidden lg:block w-18 h-18 absolute top-[-10%] left-[5%] z-10 rotate-[235deg]",
  "w-8 h-8 absolute top-[15%] right-[1%] lg:right-[10%] z-10 rotate-[-45deg]",
];

export const Features = () => {
  return (
    <section className="relative py-10 lg:py-14 2xl:py-16">
      <div className="layout-container flex flex-col gap-8 lg:flex-row 2xl:gap-12 w-full">
        {FEATURE_ITEMS.map((item) => (
          <Feature key={item.title} icon={item.icon} title={item.title}>
            {item.content}
          </Feature>
        ))}
      </div>
      {renderPetals(petals)}
    </section>
  );
};
