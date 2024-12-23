import React from "react";

interface TextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = (props: TextareaProps) => {
  return (
    <div className="relative flex w-full">
      <textarea
        className="text-sm bg-gray-50 w-full min-h-14 border-b border-gray-500 p-4 bg-transparent"
        {...props}
        rows={5}
      />
    </div>
  );
};
