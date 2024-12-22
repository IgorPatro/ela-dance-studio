import React from "react";

import { useImagesContext } from "context/images-context/images-context";

import { CgInfinity } from "react-icons/cg";

import { Script } from "gatsby";

export const Calendar = () => {
  const { calendar } = useImagesContext();

  return (
    <section className="w-full relative items-center justify-center flex py-24 my-4 lg:my-8">
      <header className="flex flex-col gap-2 max-w-md">
        <p className="uppercase flex gap-2 items-center text-base text-primary">
          <CgInfinity className="w-8 h-8" /> porozmawiajmy
        </p>
        <h1 className="font-display text-5xl text-gray-900">Konsultacja</h1>
      </header>
      <div
        className="calendly-inline-widget w-full h-[700px]"
        data-url="https://calendly.com/eladancestudio/konsultacja"
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        async
      />
    </section>
  );
};
