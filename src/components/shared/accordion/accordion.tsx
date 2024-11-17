import React from "react";
import { Collapse } from "react-collapse";
import { CgInfinity } from "react-icons/cg";
import { GoChevronDown } from "react-icons/go";
import { twMerge } from "tailwind-merge";

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-1">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex justify-between items-center"
      >
        <div className="flex gap-2 items-center">
          <CgInfinity className="w-8 h-8 text-primary" />
          <h3 className="text-lg font-display">{title}</h3>
        </div>
        <GoChevronDown
          className={twMerge(
            "w-5 h-5 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </button>
      <Collapse isOpened={isOpen}>
        <div className="pb-2">{children}</div>
      </Collapse>
      <hr />
    </div>
  );
};
