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
  const [isScrolledTop, setIsScrolledTop] = React.useState(true);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // TODO: Define final value here
      if (window.scrollY > 0) {
        setIsScrolledTop(false);
      } else {
        setIsScrolledTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //   Nawigacja powinna być fixed dopiero poniej hero
  return (
    <>
      <div
        className={twMerge(
          "fixed top-0 left-0 w-full z-20 p-5 flex justify-between transition-colors",
          isScrolledTop ? "bg-transparent" : "bg-[rgba(255,255,255,1)]"
        )}
      >
        <Link to="/">
          <img className="h-6" src={logo} alt="Logo" />
        </Link>
        <ul className="sm:flex gap-6 items-center hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <Link to={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <button
          className="flex sm:hidden"
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
          "w-full h-full flex sm:hidden fixed top-0 left-0 bg-white z-10 transition-all",
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
