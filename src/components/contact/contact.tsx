import { Accordion } from "components/shared/accordion";
import { Button } from "components/shared/button";
import { Input } from "components/shared/input";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { CgPhone } from "react-icons/cg";
import { CgPin } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { contactUrl } from "components/navigation/utils";

export const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, name, phone });
  };

  return (
    <section
      id={contactUrl}
      className="py-10 lg:py-14 lg:pb-24 2xl:py-16 2xl:pb-32"
    >
      <div className="layout-container flex flex-col gap-8 lg:flex-row lg:gap-16 lg:items-center">
        <header className="flex flex-col gap-2 max-w-4xl lg:w-1/2">
          <p className="uppercase flex gap-2 items-center text-base text-primary">
            <CgInfinity className="w-8 h-8" /> napisz do mnie
          </p>
          <h1 className="font-display text-5xl text-gray-900">Kontakt</h1>
          <p className="text-base">
            Zostaw smój telefon lub email, a ja skontaktuję się z Tobą w ciągu
            24h. Możesz też napisać do mnie bezpośrednio na adres email. Jeśli
            Ci wygodniej śmiało pisz te na social-mediach!
          </p>
          <div className="flex flex-col gap-1 my-4">
            <div className="flex items-center gap-2">
              <TfiEmail className="w-4 h-4" />
              <a href="mailto:hello@eladancestudio.pl">
                hello@eladancestudio.pl
              </a>
            </div>
            <div className="flex items-center gap-2">
              <CgPhone className="w-4 h-4" />
              <a href="tel:+48111222333">+48 111 222 333</a>
            </div>
            <div className="flex items-center gap-2">
              <CgPin className="w-4 h-4" />
              <span>Kraków i okolice</span>
            </div>
          </div>
          <div className="flex gap-2">
            <FaFacebook className="cursor-pointer w-5 h-5" />
            <FaInstagram className="cursor-pointer w-5 h-5" />
          </div>
        </header>
        <form className="flex flex-col gap-4 lg:w-1/2" onSubmit={handleSubmit}>
          <Input
            placeholder="Imię"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Telefon"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button type="submit" className="mt-4">
            wyślij
          </Button>
        </form>
      </div>
    </section>
  );
};
