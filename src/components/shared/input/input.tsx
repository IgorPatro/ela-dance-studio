import React, { ReactNode } from "react";
import { IconType } from "react-icons";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
}

export const Input = (props: InputProps) => {
  return (
    <div className="relative flex w-full">
      <input
        className="bg-gray-50 text-sm w-full border-b border-gray-500 p-4 bg-transparent"
        {...props}
      />
      {props.icon}
    </div>
  );
};
