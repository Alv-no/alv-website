import React, { useEffect, useState } from 'react';
import Link from 'gatsby-link';
import Headroom from 'react-headroom';
import { window } from 'browser-monads';
import { Breadcrumb, CallToAction } from 'shared-components';
import { Navigation } from '../navigation';
import { navItems } from '../../utils/navItems';

export const Header = ({
  categoryPages,
  companyPages,
  servicePages,
  logo,
  white,
  headerCtaText,
  localization,
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

  const pathStr = window.location.pathname.replace('%C3%A5', 'å');

  const pathArr = pathStr.split('/');
  pathArr.shift();

  const localeList = ['no', 'en'];

  const [activeLocale, setActiveLocale] = useState('no');

  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.includes('/en/') || pathname === '/en') {
      if (activeLocale !== 'en') {
        setActiveLocale('en');
      }
    } else {
      if (activeLocale !== 'no') {
        setActiveLocale('no');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLocaleClick = (locale) => {
    if (pathStr === '/') {
      setActiveLocale('en');
      return (window.location.href = `${window.location.origin}/en`);
    }

    if (pathStr === '/en') {
      setActiveLocale('no');
      return (window.location.href = `${window.location.origin}/`);
    }

    const newPathObj = navItems.find((el) => {
      return (
        el[activeLocale].link?.includes(pathStr) ||
        el[activeLocale]?.children?.[0].link.includes(pathStr)
      );
    });

    const newPathStr =
      newPathObj[locale]?.link || newPathObj[locale]?.children?.[0].link;

    window.location.href = `${window.location.origin}${newPathStr}`;
    setActiveLocale(locale);
  };

  return (
    <>
      <Navigation
        open={open}
        toggleClose={toggleClose}
        companyPages={companyPages}
        servicePages={servicePages}
        white={white}
        navItems={navItems}
        categoryPages={categoryPages}
        logo={logo}
      />
      <div
        className={`${
          navyHeader ? 'bg-navy' : 'bg-theme-bg'
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
                <Link to={isEnLocale ? '/en' : '/'}>
                  {!whiteIcons && !navyHeader ? logo.Colored() : logo.White()}
                </Link>
              </span>
            </div>
            <div className="flex">
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
              {localization && (
                <LocaleButtons
                  localeList={localeList}
                  whiteIcons={whiteIcons}
                  navyHeader={navyHeader}
                  activeLocale={activeLocale}
                  onClick={handleLocaleClick}
                />
              )}
            </div>
          </div>
          <span className="sm:block hidden relative z-50">
            <Breadcrumb path={pathArr} white={!whiteIcons} />
          </span>
        </div>
      </div>
    </>
  );
};

const LocaleButtons = ({
  localeList,
  whiteIcons,
  navyHeader,
  activeLocale,
  onClick,
}) => (
  <div className="ml-10 pt-1">
    {localeList.map((locale, i) => (
      <span
        className={whiteIcons || navyHeader ? 'text-white' : 'text-theme-text'}
      >
        <button
          key={locale}
          className={`uppercase mx-6px pt-px font-thin focus:outline-none ${
            activeLocale === locale
              ? 'font-medium pointer-events-none'
              : 'opacity-50'
          }`}
          onClick={() => onClick(locale)}
        >
          {locale}
        </button>
        {i !== locale.length - 1 && <span className="opacity-50">|</span>}
      </span>
    ))}
  </div>
);

const DropdownIcon = ({ white }) => (
  <div className="flex flex-col justify-center items-center h-7">
    <div
      className={`w-7 bg-white ${!white && 'eight:bg-theme-text'} h-px mb-2`}
    />
    <div className={`w-7 bg-white ${!white && 'eight:bg-theme-text'} h-px`} />
  </div>
);

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
        navItems={navItems}
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
                <DropdownIcon white={white && !open} />
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
        companyPages={companyPages}
        white={white}
        navItems={navItems}
        logo={logo}
      />
      <div className="bg-navy hidden sm:block sm:pt-7 py-5">
        <div className="max-w-1600 mx-auto">
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
            <Breadcrumb path={crumbs} />
          </span>
        </div>
      </div>
    </>
  );
};
