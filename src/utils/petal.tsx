import React from "react";
import { Petal } from "components/shared/petal";

export const renderPetals = (petals: string[]) => {
  return petals.map((petalClassName) => (
    <Petal className={petalClassName} key={petalClassName} />
  ));
};
