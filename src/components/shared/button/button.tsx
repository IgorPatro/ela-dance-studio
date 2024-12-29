import { Link } from "gatsby";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  href?: string;
  disabled?: boolean;
  target?: string;
}

export const Button = ({
  children,
  className,
  type = "button",
  href,
  disabled,
  target,
}: ButtonProps) => {
  const Element = href ? "a" : "button";

  return (
    <Element
      className={twMerge(
        "uppercase group relative py-3 flex w-fit text-sm px-8 border-gray-500 overflow-hidden border-y-2 font-normal",
        className,
        disabled ? "bg-gray-300" : "cursor-pointer"
      )}
      type={type}
      href={href}
      target={target}
    >
      <span className="z-10">{children}</span>
      <div
        className={twMerge(
          " duration-300 ease-in-out -translate-x-[110%] transition-transform absolute top-0 left-0 w-full h-full bg-accent",
          disabled ? "" : "group-hover:translate-x-0"
        )}
      ></div>
    </Element>
  );
};
