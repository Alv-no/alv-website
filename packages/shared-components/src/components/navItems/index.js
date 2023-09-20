import Link from "gatsby-link";
import React, { useState } from "react";
import { Dot, TransitionArrow } from "../icon";
import * as styles from "./NavItems.module.css";

export const LargeLink = ({ children, link, mobileDropdown }) => {
  const [open, setOpen] = useState(false);
  const toggleDropdown = () => {
    setOpen(!open);
  };
  return (
    <>
      <Link to={link} className={mobileDropdown && "hidden eight:block"}>
        <LargeLinkContent>{children}</LargeLinkContent>
      </Link>

      {mobileDropdown && (
        <>
          <input
            type="checkbox"
            className={`${styles.subTitleInput} ${
              mobileDropdown ? "eight:hidden" : "hidden"
            }`}
            onChange={toggleDropdown}
          />
          <li className="list-none eight:hidden relative">
            <LargeLinkContent arrow={mobileDropdown} open={open}>
              {children}
            </LargeLinkContent>
          </li>
        </>
      )}
    </>
  );
};

const LargeLinkContent = ({ children, arrow, open }) => (
  <h2 className="flex w-full justify-between pointer-events-none text-theme-text font-bold tracking-widest max-w-screen eight:mt-10 2xl:mt-12 uppercase text-nav my-12 eight:my-8 sm:ml-1 eight:ml-0 z-50 px-5 eight:px-0">
    <span>
      {children}
      <Dot />
    </span>
    {arrow && <TransitionArrow open={open} />}
  </h2>
);

export const Subtitle = ({ children, link, className = "" }) => (
  <Link to={link} className={className}>
    <h3 className="uppercase text-md tracking-widest mt-7 eight:mt-4 eight:mb-4 eight:ml-0 sm:ml-6 ml-6">
      {children}
    </h3>
  </Link>
);

export const List = ({ children }) => (
  <ul className="eight:max-h-full list-none list-style-none hidden eight:block mt-6 eight:mt-8">
    {children}
  </ul>
);

export const ListLink = ({ children, link }) => (
  <li className="text-base uppercase font-light mb-5 list-none list-style-none eight:mb-3 2xl:mb-4 tracking-wider eight:ml-0 ml-20 tracking-widest">
    <Link to={link}>{children}</Link>
  </li>
);
