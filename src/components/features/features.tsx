import React from "react";
import { CiBadgeDollar } from "react-icons/ci";
import { Feature } from "components/features/feature";
import { FaCar } from "react-icons/fa";
import { ImUserTie } from "react-icons/im";
import { TbBulb } from "react-icons/tb";

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

export const Features = () => {
  return (
    <section className="py-10">
      <div className="layout-container flex flex-col gap-8">
        {FEATURE_ITEMS.map((item) => (
          <Feature key={item.title} icon={item.icon} title={item.title}>
            {item.content}
          </Feature>
        ))}
      </div>
    </section>
  );
};
