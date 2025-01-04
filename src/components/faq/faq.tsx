import { faqUrl } from "components/navigation/utils";
import { Accordion } from "components/shared/accordion";
import React from "react";
import { CgInfinity } from "react-icons/cg";

const FAQ_ITEMS = [
  {
    title: "Czy możliwe są dojazdy do domu?",
    content:
      "Tak! Jeżeli tylko macie na to ochotę mogę dojechać do Was do domu na terenie Krakowa i okolic. Podczas konsultacji ustalamy szczegóły oraz czy wystarczy nam miejsca do odpowiedniego treningu w Waszym lokalu. Na próbę generalną zabiorę Was jednak na parkiet, byście poczuli się jak profesjonalni tancerze 😊",
  },
  {
    title: "Ile lekcji potrzebuję?",
    content:
      "Bardzo dużo zależy od Waszych umiejętności tanecznych oraz poziomu trudności choreografii. Przeważnie jednak wystarczy od 3 do 5 lekcji, by zadziała się magia 😊",
  },
  {
    title: "Czy istnieje możliwość nauki w grupie?",
    content:
      "Tak! Oferuję również lekcje grupowe, które są świetną okazją do wspólnego spędzenia czasu z przyjaciółmi czy rodziną. Jeżeli tylko macie ochotę - śmiało pytajcie o szczegóły!",
  },
  {
    title: "Gdzie odbywają się lekcje?",
    content:
      "Moim stałym miejscem lekcji jest Wola Justowska, ul. Ludomiły Korbutowej 50, 30-218, Kraków. Często jednak istnieje możliwość wyboru innej sali na terenie Krakowa. W trakcie konsultacji przedstawiam inne możliwe adresy. Oczywiście istnieje też opcja dojazdu do Was do domu 😊",
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
            Staram się zebrać wszystkie pytania, które nurtują pary młode. Jeśli
            jednak coś jest niejasne - śmiało pytajcie! 😊
          </p>
        </header>
      </div>
    </section>
  );
};
