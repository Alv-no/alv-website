import React from "react";
import { ContactArrow } from "../icon";

export const CallToAction = ({
  children,
  onClick,
  disabled = false,
  whiteIcons,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={children}
    className="uppercase text-xl font-extralight flex tracking-wider"
  >
    <div className={`mr-5 ${whiteIcons && "text-white"}`}>{children}</div>
    <span
      className={`block transform translate-y-1 translate-x-1 ${
        whiteIcons && "text-white"
      }`}
    >
      <ContactArrow white={whiteIcons} />
    </span>
  </button>
);
