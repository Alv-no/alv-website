import { window } from "browser-monads";
import Link from "gatsby-link";
import React, { useState } from "react";
import Headroom from "react-headroom";
import { Breadcrumb, CallToAction } from "shared-components";
import { Navigation } from "../navigation";

export const Header = ({
  logo,
  white,
  headerCtaText,
  headerCtaLink,
  whiteIcons,
  navyHeader,
  isEnLocale,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };

  const pathStr = window.location.pathname.replace("%C3%A5", "å");

  const pathArr = pathStr.split("/");
  pathArr.shift();

  return (
    <>
      <Navigation open={open} toggleClose={toggleClose} logo={logo} />
      <div
        e={{ paddingLeft: "40px" }}
        className={`${
          navyHeader ? "bg-navy" : "bg-theme-bg"
        } hidden sm:block sm:pt-7 py-5 px-10 -mb-2px`}
      >
        <div className="max-w-1200 mx-auto relative z-50 h-8">
          <div className="flex justify-between sm:mb-7">
            <div className="flex relative z-50">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <DropdownIcon white={whiteIcons || navyHeader} />
              </button>
              <span className="transform">
                <Link to={isEnLocale ? "/en" : "/"}>
                  {!whiteIcons && !navyHeader ? logo.Colored() : logo.White()}
                </Link>
              </span>
            </div>
            <div className="flex">
              <div
                className={`${
                  !white && "eight:text-theme-text"
                } flex hidden sm:block relative z-50`}
              >
                {!window.location.href.includes(headerCtaLink) && (
                  <Link to={headerCtaLink}>
                    <CallToAction whiteIcons={whiteIcons || navyHeader}>
                      {headerCtaText}
                    </CallToAction>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <span className="sm:block hidden relative z-50">
            <Breadcrumb path={pathArr} white={!whiteIcons} homeCrumb="Home" />
          </span>
        </div>
      </div>
    </>
  );
};

const DropdownIcon = ({ white }) => (
  <div className="flex flex-col justify-center items-center h-7">
    <div
      className={`w-7 bg-white ${!white && "eight:bg-theme-text"} h-px mb-2`}
    />
    <div className={`w-7 bg-white ${!white && "eight:bg-theme-text"} h-px`} />
  </div>
);

export const MobileHeader = ({ viewport, white, logo }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Navigation open={open} toggleClose={toggleClose} logo={logo} />
      <Headroom>
        <div
          className={`bg-navy block ${
            viewport || "sm"
          }:hidden py-5 px-6 fivefifty:px-10 `}
        >
          <div className="max-w-1600 mx-auto" style={{ paddingLeft: "40px" }}>
            <div className="flex flex-row-reverse justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  aria-label="Dropdown"
                  className="cursor-pointer focus:outline-none ml-4"
                  onClick={handleClick}
                >
                  <DropdownIcon white={white && !open} />
                </button>
              </div>

              <span className="transform ">
                <Link to="/">{logo.White()}</Link>
              </span>
            </div>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export const BlogHeader = ({ logo }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };
  const crumbs = window.location.pathname.split("/");
  crumbs.shift();
  return (
    <>
      <Navigation open={open} toggleClose={toggleClose} logo={logo} />
      <div className="bg-navy hidden sm:block sm:pt-7 py-5">
        <div className="max-w-1600 mx-auto" style={{ paddingLeft: "40px" }}>
          <div className="flex justify-between sm:mb-7 ">
            <div className="flex">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <DropdownIcon white />
              </button>
              <span className="transform text-white">
                <Link to="/">{logo.White()}</Link>
              </span>
            </div>
          </div>
          <span className="sm:block hidden">
            <Breadcrumb path={crumbs} homeCrumb="Home" />
          </span>
        </div>
      </div>
    </>
  );
};
