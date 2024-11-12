import * as React from "react";
import { GatsbyBrowser } from "gatsby";

export const WrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <main>{element}</main>;
