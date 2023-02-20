import { window } from 'browser-monads';
import Link from 'gatsby-link';
import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { Breadcrumb } from '../breadcrumb';
import { CallToAction } from '../calltoaction';
import { Dropdown } from '../icon';
import { Navigation } from '../navigation';

export const Header = ({
  categoryPages,
  companyPages,
  servicePages,
  logo,
  white,
  headerCtaText,
  headerCtaLink,
  whiteIcons,
  navyHeader,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };

  const crumbs = window.location.pathname.split('/');
  crumbs.shift();

  return (
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        companyPages={companyPages}
        servicePages={servicePages}
        white={white}
        categoryPages={categoryPages}
        logo={logo}
      />
      <div
        className={`${
          navyHeader ? 'bg-navy' : 'bg-theme-bg'
        } hidden sm:pt-7 py-5 sm:flex justify-center`}
      >
        <div className="px-6 sm:px-12 twelve:px-20 w-full max-w-screen-2xl relative z-50 h-8">
          <div className="flex justify-between sm:mb-7">
            <div className="flex relative z-50">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <Dropdown white={whiteIcons || navyHeader} />
              </button>
              <span className="transform ">
                <Link to="/">
                  {!whiteIcons && !navyHeader ? logo.Colored() : logo.White()}
                </Link>
              </span>
            </div>
            <div
              className={`${
                !white && 'eight:text-theme-text'
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
          <span className="sm:block hidden relative z-50">
            <Breadcrumb path={crumbs} white={!whiteIcons} homeCrumb="Hjem" />
          </span>
        </div>
      </div>
    </>
  );
};

export const MobileHeader = ({
  viewport,
  categoryPages,
  servicePages,
  companyPages,
  white,
  logo,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        servicePages={servicePages}
        companyPages={companyPages}
        categoryPages={categoryPages}
        white={white}
        logo={logo}
      />
      <Headroom style={{ height: '0px', zIndex: 50 }}>
        <div
          className={`bg-navy block ${
            viewport || 'sm'
          }:hidden py-5 px-6 fivefifty:px-10 z-20 relative`}
        >
          <div className="max-w-1600 mx-auto">
            <div className="flex flex-row-reverse justify-between">
              <button
                type="button"
                aria-label="Dropdown"
                className="cursor-pointer focus:outline-none"
                onClick={handleClick}
              >
                <Dropdown white={white && !open} />
              </button>
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

export const BlogHeader = ({
  categoryPages,
  servicePages,
  companyPages,
  homeCrumb,
  white,
  logo,
}) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const toggleClose = () => {
    setOpen(false);
  };
  const crumbs = window.location.pathname.split('/');
  crumbs.shift();
  return (
    <div className="py-7">
      <Navigation
        open={open}
        toggleClose={toggleClose}
        servicePages={servicePages}
        categoryPages={categoryPages}
        companyPages={companyPages}
        white={white}
        logo={logo}
      />
      <div className="pl-6 lg:pl-10">
        <div className="flex justify-between sm:mb-7 ">
          <div className="flex">
            <button
              type="button"
              aria-label="Dropdown"
              className="mr-5 cursor-pointer"
              onClick={handleClick}
            >
              <Dropdown white />
            </button>
            <span className="transform text-white">
              <Link to="/">{logo.White()}</Link>
            </span>
          </div>
        </div>
        <span className="sm:block hidden">
          <Breadcrumb path={crumbs} homeCrumb={homeCrumb} />
        </span>
      </div>
    </div>
  );
};
