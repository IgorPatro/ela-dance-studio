import { Link } from "gatsby";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
}

export const Button = ({
  children,
  className,
  type = "button",
  href,
}: ButtonProps) => {
  const Element = href ? "a" : "button";

  return (
    <Element
      className={twMerge(
        "uppercase group relative py-3 flex w-fit cursor-pointer text-sm px-8 border-gray-500 overflow-hidden border-y-2 font-normal",
        className
      )}
      type={type}
      href={href}
    >
      <span className="z-10">{children}</span>
      <div className="group-hover:translate-x-0 duration-300 ease-in-out -translate-x-[110%] transition-transform absolute top-0 left-0 w-full h-full bg-accent"></div>
    </Element>
  );
};
