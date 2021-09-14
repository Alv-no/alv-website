import React, { useState } from 'react';
import Link from 'gatsby-link';
import * as Logo from '../logo';
import * as Icon from '../icon';
import Breadcrumbs from '../breadcrumb';
import CTA from '../calltoaction';
import Headroom from 'react-headroom';
import logo from './logo.png';
import { Navigation } from '../navigation';
import { window } from 'browser-monads';

export const Header = ({ path, categoryPages, servicePages, white }) => {
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
      />
      <div className="bg-theme-bg hidden sm:block sm:pt-7 py-5 px-10">
        <div className="max-w-1200 mx-auto relative z-50">
          <div className="flex justify-between sm:mb-7">
            <div className="flex relative z-50">
              <button
                type="button"
                aria-label="Dropdown"
                className="mr-5 cursor-pointer"
                onClick={handleClick}
              >
                <Icon.Dropdown white={white} />
              </button>
              <span className="transform ">
                <Link to="/">
                  {white ? (
                    <img alt="logo" style={{ width: '74px' }} src={logo} />
                  ) : (
                    <Logo.White />
                  )}
                </Link>
              </span>
            </div>
            {!path || !path.includes('/kontakt-oss') ? (
              <div className="text-theme-text flex hidden sm:block relative z-50">
                <Link to="/kontakt-oss">
                  <CTA internalLink="/kontakt-oss">Ta kontakt</CTA>
                </Link>
              </div>
            ) : null}
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
      />
      <Headroom>
        <div
          className={`bg-navy block ${
            viewport || 'sm'
          }:hidden py-5 px-6 five:px-10`}
        >
          <div className="max-w-1600 mx-auto">
            <div className="flex flex-row-reverse justify-between">
              <button
                type="button"
                aria-label="Dropdown"
                className="cursor-pointer focus:outline-none"
                onClick={handleClick}
              >
                <Icon.Dropdown />
              </button>
              <span className="transform ">
                <Link to="/">
                  <Logo.White />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Headroom>
    </>
  );
};

export const BlogHeader = ({ categoryPages, servicePages }) => {
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
                <Link to="/">
                  <Logo.White />
                </Link>
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
