import {
  contactUrl,
  pricingUrl,
  welcomeUrl,
} from "components/navigation/utils";
import { Button } from "components/shared/button";
import { Link, Script } from "gatsby";
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

export const Welcome = () => {
  return (
    <section id={welcomeUrl} className="relative py-10 lg:py-10 2xl:py-12">
      <div className="layout-container flex flex-col gap-8 justify-center items-center">
        <header className="flex flex-col gap-2 max-w-4xl text-center m-auto">
          <p className="uppercase flex gap-2 items-center text-base text-primary justify-center">
            <CgInfinity className="w-8 h-8" /> nauka tańca
          </p>
          <h1 className="font-display text-5xl text-gray-900">Wprowadzenie</h1>
          <p className="text-base text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            distinctio.
          </p>
        </header>
        <div className="max-w-3xl w-full m-auto">
          <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            <iframe
              src="https://player.vimeo.com/video/1041550475?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              title="Untitled"
            />
          </div>
          <Script src="https://player.vimeo.com/api/player.js" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <p>Gotowi na dalsze kroki?</p>
          <Button href={"#" + contactUrl}>Rozpocznij naukę</Button>
        </div>
      </div>
    </section>
  );
};
