import React, { useState } from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import Breadcrumbs from '../breadcrumb';
import CTA from '../calltoaction';
import Headroom from 'react-headroom';
import { Navigation } from '../navigation';
import { window } from 'browser-monads';

export const Header = ({
  categoryPages,
  servicePages,
  logo,
  white,
  headerCtaText,
  headerCtaLink,
  whiteIcons,
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
        servicePages={servicePages}
        white={white}
        categoryPages={categoryPages}
        logo={logo}
      />
      <div className="bg-theme-bg hidden sm:block sm:pt-7 py-5 px-10 -mb-2px">
        <div className="max-w-1200 mx-auto relative z-50 h-8">
          <div className="flex justify-between sm:mb-7">
            <div className="flex relative z-50">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <Icon.Dropdown white={whiteIcons} />
              </button>
              <span className="transform ">
                <Link to="/">
                  {white && !whiteIcons ? logo.Colored() : logo.White()}
                </Link>
              </span>
            </div>
            <div
              className={`${
                !white && 'eight:text-theme-text'
              } flex hidden sm:block relative z-50`}
            >
              <Link to={headerCtaLink}>
                <CTA>{headerCtaText}</CTA>
              </Link>
            </div>
          </div>
          <span className="sm:block hidden relative z-50">
            <Breadcrumbs path={crumbs} />
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
        categoryPages={categoryPages}
        white={white}
        logo={logo}
      />
      <Headroom>
        <div
          className={`bg-navy block ${
            viewport || 'sm'
          }:hidden py-5 px-6 fivefifty:px-10 `}
        >
          <div className="max-w-1600 mx-auto">
            <div className="flex flex-row-reverse justify-between">
              <button
                type="button"
                aria-label="Dropdown"
                className="cursor-pointer focus:outline-none"
                onClick={handleClick}
              >
                <Icon.Dropdown white={white && !open} />
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
  children,
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
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        servicePages={servicePages}
        categoryPages={categoryPages}
        white={white}
        logo={logo}
      />
      <div className="bg-navy hidden sm:block sm:pt-7 py-5 px-10">
        <div className="max-w-1600 mx-auto">
          <div className="flex justify-between sm:mb-7 ">
            <div className="flex">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <Icon.Dropdown />
              </button>
              <span className="transform ">
                <Link to="/">{children}</Link>
              </span>
            </div>
          </div>
          <span className="sm:block hidden">
            <Breadcrumbs path={crumbs} />
          </span>
        </div>
      </div>
    </>
  );
};
