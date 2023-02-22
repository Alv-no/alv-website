import Link from "gatsby-link";
import React from "react";
import { Arrow as ArrowIcon } from "../icon";

export const Line = ({ children, navy }) => (
  <div className="flex cursor-pointer">
    <div className="w-8 h-2px bg-theme-accent mr-4 transform translate-y-1 font-semibold" />
    <span
      className={`transform -translate-y-2 uppercase ${navy && "text-navy"}`}
    >
      {children}
    </span>
  </div>
);

export const Arrow = ({ children, color }) => (
  <div className="font-semibold uppercase w-32 flex text-right items-center tracking-wider">
    {children}{" "}
    <span className="ml-2 transform scale-80">
      <ArrowIcon color={color} />
    </span>
  </div>
);

export const OvalSimple = ({
  children,
  onClick,
  className,
  uppercase = true,
  color = "navy",
  variant = "normal",
  padding = "normal",
}) => {
  const colorMapper = {
    navy: "text-navy border-navy",
    white: "text-white border-white",
  };

  const variantClassMapper = {
    normal: "border-2",
    light: "font-thin",
  };

  const paddingMapper = {
    normal: "px-8 py-6px",
    tight: "px-4 py-6px",
  };

  return (
    <button
      className={`${colorMapper[color]} ${variantClassMapper[variant]} ${
        paddingMapper[padding]
      } ${
        uppercase ? "uppercase" : ""
      } ${className} border tracking-wider text-base rounded-full font-semibold focus:outline-none`}
      onClick={onClick}
      aria-label={children}
    >
      {children}
    </button>
  );
};

export const CtaArrow = ({ children, onClick, path }) => (
  <Link to={path || ""}>
    <button
      className="flex items-center focus:outline-none tracking-wider"
      type="button"
      onClick={onClick}
      aria-label={children}
    >
      <span className="mr-2 block uppercase font-semibold">{children}</span>{" "}
      <ArrowIcon />
    </button>
  </Link>
);

export const FormSelect = ({ id, active, children, onClick }) => (
  <div>
    <div
      onClick={onClick}
      className={`flex items-center font-semibold uppercase mb-3 ${
        active === id && "text-theme-accent"
      } transition duration-300 hover:text-theme-accent cursor-pointer`}
      id={id}
    >
      {children}
      <span className="transform ml-3">
        <Arrow />
      </span>
    </div>
  </div>
);
