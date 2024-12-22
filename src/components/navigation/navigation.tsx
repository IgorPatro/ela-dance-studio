import React from "react";
import logo from "assets/images/logo.svg";
import { twMerge } from "tailwind-merge";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { Link } from "gatsby";
import { NAVIGATION } from "./utils";

export const Navigation = () => {
  const [passedHeroSection, setPassedHeroSection] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setPassedHeroSection(false);
      } else {
        setPassedHeroSection(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavigation = (classNames: string, logoClassName?: string) => {
    return (
      <div
        className={twMerge(
          "top-0 left-0 w-full z-50 p-5 flex justify-between transition-all",
          classNames
        )}
      >
        <Link to="/">
          <img
            className={twMerge("h-6 lg:h-16", logoClassName)}
            src={logo}
            alt="Logo"
          />
        </Link>
        <ul className="md:flex gap-4 items-center hidden text-base">
          {NAVIGATION.map((item) => (
            <li
              className={twMerge(
                "relative overflow-hidden py-1 text-black",
                "before:transition-transform z-0 before:absolute before:top-0 before:left-0 before:w-full before:duration-200 before:h-[1px] before:bg-gray-500 before:content-[''] px-2 before:-translate-x-[110%] hover:before:translate-x-0",
                "after:transition-transform z-0 after:absolute after:bottom-0 after:left-0 after:w-full after:duration-200 after:h-[1px] after:bg-gray-500 after:content-[''] px-2 after:translate-x-[110%] hover:after:translate-x-0"
              )}
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
    );
  };

  const renderHeroNavigation = () => {
    return renderNavigation("absolute lg:p-10 xl:p-12");
  };

  const renderFixedNavigation = () => {
    const isVisible = passedHeroSection || isOpen;

    return renderNavigation(
      `fixed bg-white drop-shadow-md fixed bg-white drop-shadow-md duration-200 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`,
      "h-6 lg:h-8"
    );
  };

  return (
    <>
      {renderHeroNavigation()}
      {renderFixedNavigation()}
      <nav
        className={twMerge(
          "w-full h-[120vh] flex md:hidden fixed top-0 left-0 bg-white z-40 transition-all",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <ul className="flex flex-col gap-4 p-10 pt-24">
          {NAVIGATION.map((item) => (
            <li key={item.name}>
              <Link to={item.link} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};
