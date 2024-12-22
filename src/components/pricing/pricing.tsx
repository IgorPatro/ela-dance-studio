import { pricingUrl } from "components/navigation/utils";
import { Link } from "gatsby";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { renderPetals } from "utils/petal";

const PRICING_ITEMS = [
  {
    title: "Godzina lekcji (60 minut)",
    price: "150 PLN",
  },
  {
    title: "Godzina lekcji (60 minut) - z dojazdem do domu*",
    price: "200 PLN",
  },
  {
    title: "10 lekcji (po 60 minut)",
    price: "140 PLN / lekcja",
  },
  {
    title: "Zajęcia grupowe**",
    price: "50 PLN / osoba",
  },
];

const petals = [
  "w-18 h-18 absolute bottom-[15%] -right-8 z-10 rotate-[45deg]",
  "w-8 h-8 absolute bottom-[15%] left-[10%] z-10 rotate-[119deg]",
];

export const Pricing = () => {
  return (
    <section id={pricingUrl} className="relative py-10 lg:py-14 2xl:py-16">
      <div className="layout-container flex flex-col gap-8 justify-center">
        <header className="flex flex-col gap-2 max-w-4xl text-center m-auto">
          <p className="uppercase flex gap-2 items-center text-base text-primary justify-center">
            <CgInfinity className="w-8 h-8" /> ile to kosztuje
          </p>
          <h1 className="font-display text-5xl text-gray-900">Cennik</h1>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
            distinctio.
          </p>
        </header>
        <div className="max-w-3xl w-full m-auto">
          <table className="bg-accent rounded-xl m-auto w-full">
            <tbody>
              {PRICING_ITEMS.map((item) => (
                <tr key={item.title}>
                  <td className="p-3 border border-white border-collapse">
                    {item.title}
                  </td>
                  <td className="text-center border p-3 border-white border-collapse">
                    {item.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-xs mt-3">
            * dojazd możliwy na terenie Krakowa, w przypadku wystarczającej
            ilości miejsca. Dowiedź się więcej{" "}
            <Link to="#faq" className="underline">
              tutaj
            </Link>
          </p>
          <p className="text-xs mt-1">
            ** zajęcia grupowe odbywają się w grupach od 3 do 6 osób w przypadku
            uformowania grupy
          </p>
        </div>
      </div>
      {renderPetals(petals)}
    </section>
  );
};
