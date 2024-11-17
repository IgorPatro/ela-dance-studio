import React from "react";
import rose from "assets/images/rose.svg";
import { IconType } from "react-icons";

interface FeatureProps {
  title: string;
  children: React.ReactNode;
  icon: IconType;
}

export const Feature = ({ icon, title, children }: FeatureProps) => {
  const Icon = icon;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5">
        <Icon className="text-primary w-7 h-7" />
        <h3 className="text-xl text-gray-900 font-display text-nowrap">
          {title}
        </h3>
      </div>
      <p>{children}</p>
      <img className="w-min mt-4" src={rose} alt="rose" />
    </div>
  );
};
