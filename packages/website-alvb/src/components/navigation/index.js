import { window } from 'browser-monads';
import Link from 'gatsby-link';
import React from 'react';
import { SocialLinks, LargeLink, SubtitleLink, Icon } from 'shared-components';

export const Navigation = ({ open, toggleClose, logo, navItems }) => {
  const isEnLocale = window.location.href.includes('/en');

  return (
    <NavLayout
      open={open}
      logo={logo}
      toggleClose={toggleClose}
      isEnLocale={isEnLocale}
    >
      <div className="flex eight:items-center h-full eight:-mt-12">
        <div className="eight:text-center items-center relative z-90 eight:mx-auto">
          <LocaleNav localeNavArr={navItems} isEnLocale={isEnLocale} />
        </div>
      </div>
    </NavLayout>
  );
};

const NavLayout = ({ open, logo, children, toggleClose, isEnLocale }) => (
  <nav
    className={`text-theme-text bg-theme-bg tracking-wider fixed overflow-y-scroll overflow-x-hidden z-70 w-full h-full bg-theme-bg p-6 sm:p-8 left-0 top-0 transition duration-300 ${
      open ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <button
      className="h-screen w-screen fixed left-0 top-0 z-70"
      onClick={toggleClose}
    />
    <NavHeader toggleClose={toggleClose} logo={logo} isEnLocale={isEnLocale} />
    {children}
  </nav>
);

const NavHeader = ({ logo, toggleClose, isEnLocale }) => (
  <div className="flex items-center relative z-90 justify-between flex-row-reverse eight:flex-row max-w-1000 mx-auto">
    <div className="transform scale-70 translate-x-2 sm:translate-x-0">
      <CloseButton toggleClose={toggleClose} />
    </div>
    <div className="inline-block eight:absolute left-1/2 eight:transform eight:-translate-x-1/2">
      <Link to={isEnLocale ? '/en' : '/'}>{logo.Colored()}</Link>
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
    <Icon.Cross white={true} />
  </button>
);

const LocaleNav = ({ localeNavArr, isEnLocale }) => {
  const locale = isEnLocale ? 'en' : 'no';
  return localeNavArr?.map((navItem) => (
    <>
      {
        <LargeLink
          link={navItem[locale].link || null}
          white={!navItem[locale].link}
        >
          {navItem[locale].text}
        </LargeLink>
      }
      {navItem[locale].children && (
        <div>
          {navItem[locale].children.map((child) => (
            <SubtitleLink link={child.link}>{child.text}</SubtitleLink>
          ))}
        </div>
      )}
    </>
  ));
};