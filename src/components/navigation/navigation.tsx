import React from "react";
import logo from "assets/images/logo.svg";
import { twMerge } from "tailwind-merge";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { Link } from "gatsby";

const NAV_ITEMS = [
  {
    name: "Home",
    link: "#home",
  },
  {
    name: "Usługi",
    link: "#services",
  },
  {
    name: "Cennik",
    link: "#pricing",
  },
  {
    name: "O nas",
    link: "#about",
  },
  {
    name: "Opinie",
    link: "#testimonials",
  },
  {
    name: "FAQ",
    link: "#faq",
  },
  {
    name: "Kontakt",
    link: "#contact",
  },
];

export const Navigation = () => {
  const [isUnderHero, setIsUnderHero] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // TODO: Define final value here
      if (window.scrollY < window.innerHeight) {
        setIsUnderHero(false);
      } else {
        setIsUnderHero(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={twMerge(
          "top-0 left-0 w-full z-50 p-5 flex justify-between drop-shadow-md transition-all",
          isUnderHero || isOpen ? "fixed bg-white" : "absolute"
        )}
      >
        <Link to="/">
          <img className="h-6" src={logo} alt="Logo" />
        </Link>
        <ul className="md:flex gap-4 items-center hidden">
          {NAV_ITEMS.map((item) => (
            <li
              className="relative before:content-[''] px-2 before:-translate-x-full hover:before:translate-x-0 overflow-hidden before:transition-transform z-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-accent"
              key={item.name}
            >
              <Link className="z-10 relative" to={item.link}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="flex md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <TfiClose className="w-5 h-5" />
          ) : (
            <CiMenuFries className="w-5 h-5" />
          )}
        </button>
      </div>
      <nav
        className={twMerge(
          "w-full h-full flex md:hidden fixed top-0 left-0 bg-white z-40 transition-all",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-4 p-10 pt-24">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
