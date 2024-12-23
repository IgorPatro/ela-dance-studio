import { Button } from "components/shared/button";
import { Input } from "components/shared/input";
import React from "react";
import { CgInfinity } from "react-icons/cg";
import { TfiEmail } from "react-icons/tfi";
import { CgPhone } from "react-icons/cg";
import { CgPin } from "react-icons/cg";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { contactUrl } from "components/navigation/utils";
import { useImagesContext } from "context/images-context/images-context";
import { GatsbyImage } from "gatsby-plugin-image";
import { getImage } from "utils/image";
import { renderPetals } from "utils/petal";
import { Textarea } from "components/shared/textarea/textarea";

const petals = ["w-18 h-18 absolute top-[15%] -right-6 z-10 rotate-[-135deg]"];

export const Contact = () => {
  const { calendar } = useImagesContext();
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [isMissingData, setIsMissingData] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const cleanupForm = () => {
    setEmail("");
    setName("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name && (!email || !phone)) {
      setIsMissingData(true);
      return;
    }

    setIsLoading(true);
    try {
      await fetch("https://formspree.io/f/mkggnegz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });
      setIsSuccess(true);
      setIsLoading(false);
      setIsError(false);
      setIsMissingData(false);
      cleanupForm();
    } catch (error) {
      setIsError(true);
      setIsSuccess(false);
      setIsLoading(false);
      setIsMissingData(false);
    }
  };

  const onCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/eladancestudio/konsultacja",
    });
  };

  return (
    <section
      id={contactUrl}
      className="relative py-10 lg:py-14 lg:pb-24 2xl:py-16 2xl:pb-32"
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
              <a href="mailto:eladancestudio@gmail.com">
                eladancestudio@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <CgPhone className="w-4 h-4" />
              <a href="tel:+48515769690">+48 515 769 690</a>
            </div>
            <div className="flex items-center gap-2">
              <CgPin className="w-4 h-4" />
              <span>Kraków i okolice</span>
            </div>
          </div>
          <div className="mb-4 flex flex-col gap-2 items-start justify-start">
            <p>Umów się na darmową konsultację:</p>
            <button onClick={onCalendly}>
              <GatsbyImage
                alt="Kalendarz google"
                image={getImage(calendar)}
                className="w-28 h-8"
                objectFit="contain"
                objectPosition="center"
              />
            </button>
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
          <Textarea
            placeholder="Wiadomość"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {isMissingData ? (
            <p>
              Dodaj swoje imię oraz email lub telefon, aby wysłać formularz.
            </p>
          ) : null}
          {isError ? (
            <p className="text-red-700">
              Oops! Coś poszło nie tak. Spróbuj ponownie później.
            </p>
          ) : null}
          {isSuccess ? (
            <p>Dziękuję za kontakt. Skontaktuję się z Tobą w ciągu 24h.</p>
          ) : null}
          <Button disabled={isLoading} type="submit" className="mt-4">
            wyślij
          </Button>
        </form>
      </div>
      {renderPetals(petals)}
    </section>
  );
};
