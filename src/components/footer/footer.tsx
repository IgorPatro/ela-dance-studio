import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useImagesContext } from "context/images-context/images-context";
import { getImage } from "utils/image";
import logo from "assets/images/logo.svg";
import { Input } from "components/shared/input";
import { TfiEmail } from "react-icons/tfi";
import { CgPhone, CgPin } from "react-icons/cg";
import { IoIosSend } from "react-icons/io";
import { Link } from "gatsby";

export const Footer = () => {
  const { footer } = useImagesContext();
  const [email, setEmail] = React.useState("");

  const onCalendly = () => {
    window.Calendly.initPopupWidget({
      url: "https://calendly.com/eladancestudio/konsultacja",
    });
  };

  return (
    <section className="w-full relative items-center justify-center flex py-8 lg:py-10">
      <div className="layout-container items-center">
        <img className="h-14 m-auto" src={logo} alt="Logo" />
        <div className="flex flex-col gap-6 justify-between my-6 lg:flex-row lg:my-10">
          <div className="text-sm flex flex-col gap-1 lg:gap-2">
            <h6 className="text-base text-gray-900">Darmowy e-book</h6>
            <p>Podstawowa wiedza na temat pierwszego tańca i tego jak zacząć</p>
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={
                <IoIosSend
                  onClick={() => console.log(email)}
                  className="hover:text-black cursor-pointer absolute w-5 h-5 right-4 top-1/2 -translate-y-1/2"
                />
              }
            />
          </div>
          <div className="text-sm flex flex-col gap-1 lg:gap-2">
            <h6 className="text-base text-gray-900">Kontakt</h6>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <CgPin className="w-4 h-4" />
                <span>Ludmiły Korbutowej 50, 30-218 Kraków</span>
              </div>
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
              <button onClick={onCalendly} className="flex underline">
                Darmowa konsultacja
              </button>
            </div>
          </div>
          <div className="text-sm flex flex-col gap-1 lg:gap-2">
            <h6 className="text-base text-gray-900">Social Media</h6>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.instagram.com/ela_dance_studio/"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61570326290967"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-2 lg:mt-10 lg:mb-4" />

        <div className="text-xs flex justify-between">
          <span>All rights reserved &copy; 2024</span>
          <Link className="underline" to="/polityka-prywatnosci">
            Polityka prywatności
          </Link>
        </div>
      </div>
      <GatsbyImage
        class="min-h-full max-h-full h-full w-full !absolute top-0 left-0 -z-10 [&>img]:object-bottom"
        image={getImage(footer)}
        alt="Szara firanka"
      />
    </section>
  );
};
