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
      "Dzięki doświadczeniu ze sceny dostosowuję choreografię do Waszych umiejętności i stylu. Sprawię, że poczujecie się pewnie, a Wasz taniec będzie naturalny, piękny i pełen emocji.",
    icon: CiBadgeDollar,
  },
  {
    title: "Dojazd do domu",
    content:
      "Brakuje czasu na dojazdy do studia? Oferuję lekcje pierwszego tańca z dojazdem do Waszego domu lub wybranego miejsca. Wygoda i dbałość o każdy szczegół gwarantowane.",
    icon: FaCar,
  },
  {
    title: "Personalne podejście",
    content:
      "Każdą choreografię dopasowuję do Waszych pomysłów, muzyki i poziomu zaawansowania. Bez względu na doświadczenie taneczne, sprawię, że poczujecie się swobodnie.",
    icon: ImUserTie,
  },
  {
    title: "Kreatywność",
    content:
      "Wasza historia zasługuje na wyjątkową oprawę. Tworzę choreografie, które wyrażają Wasze emocje i styl – od klasyki po nietypowe rozwiązania, które na długo zapadną w pamięć.",
    icon: TbBulb,
  },
];

const petals = [
  "!hidden lg:!block w-18 h-18 absolute top-[-10%] left-[5%] z-10 rotate-[235deg]",
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
