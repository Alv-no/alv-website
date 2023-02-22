import Link from "gatsby-link";
import React from "react";
import { LargeLink, SubtitleLink } from "shared-components";
import { Cross } from "shared-components/src/components/icon";
import { useNavigationQuery } from "../../hookspages/useNavigationQuery";
import { SocialLinks } from "../socialLinks";

export const Navigation = ({ open, toggleClose, logo }) => {
  const { mainMenu } = useNavigationQuery();

  return (
    <NavLayout open={open} logo={logo} toggleClose={toggleClose}>
      <div className="flex eight:justify-center h-full eight:items-center relative eight:-top-16">
        <div className="eight:flex transition duration-300 gap-x-16 justify-center w-full">
          <NavColumns navItems={mainMenu} />
        </div>
      </div>
    </NavLayout>
  );
};

const NavLayout = ({ open, logo, children, toggleClose }) => (
  <nav
    className={`text-theme-text tracking-wider fixed overflow-y-auto eight:overflow-y-hidden overflow-x-hidden z-70 w-full h-full bg-theme-bg p-6 sm:p-8 left-0 top-0 transition duration-300 ${
      open ? "opacity-100" : "opacity-0 pointer-events-none"
    }`}
  >
    <button
      className="h-screen w-screen fixed left-0 top-0 z-70"
      onClick={toggleClose}
    />
    <NavHeader toggleClose={toggleClose} logo={logo} />
    {children}
  </nav>
);

const NavHeader = ({ logo, toggleClose }) => (
  <div className="flex items-center relative z-90 justify-between flex-row-reverse eight:flex-row max-w-1000 mx-auto">
    <div className="transform scale-70 translate-x-2 sm:translate-x-0">
      <CloseButton toggleClose={toggleClose} />
    </div>
    <div className="inline-block eight:absolute left-1/2 eight:transform eight:-translate-x-1/2">
      <Link to={"/"}>{logo.Colored()}</Link>
    </div>
    <div className="right-0 transform eight:flex hidden relative">
      <SocialLinks />
    </div>
  </div>
);

const CloseButton = ({ toggleClose }) => (
  <button
    type="button"
    aria-label="Close"
    className="cursor-pointer focus:outline-none"
    onClick={toggleClose}
  >
    <Cross white={true} />
  </button>
);

const NavColumns = ({ navItems }) => {
  return navItems?.map((navItem, index) => (
    <div key={index} className={"relative z-70"}>
      <LargeLink
        mobileDropdown
        link={navItem.link || "#"}
        white={!navItem.link}
      >
        {navItem.title}
      </LargeLink>

      {navItem.items?.map((el, index) => (
        <SubtitleLink key={index} link={el.link}>
          {el.title}
        </SubtitleLink>
      ))}
    </div>
  ));
};
