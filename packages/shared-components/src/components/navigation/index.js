import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import { LargeLink, Subtitle } from '../navItems';
import { SocialLinks } from '../socialShare';

export const Navigation = ({
  open,
  white,
  toggleClose,
  servicePages,
  companyPages,
  categoryPages,
  logo,
}) => {
  return (
    <>
      {white ? (
        <AlvBNav
          open={open}
          toggleClose={toggleClose}
          logo={logo}
          white={white}
        />
      ) : (
        <AlvNav
          open={open}
          white={white}
          toggleClose={toggleClose}
          companyPages={companyPages}
          servicePages={servicePages}
          categoryPages={categoryPages}
          logo={logo}
        />
      )}
    </>
  );
};

const NavLayout = ({ open, logo, children, toggleClose, white }) => (
  <nav
    className={`text-theme-text bg-theme-bg tracking-wider fixed overflow-y-scroll overflow-x-hidden z-70 w-full h-full bg-theme-bg p-6 sm:p-8 left-0 top-0 transition duration-300 ${
      open ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <button
      className="h-screen w-screen fixed left-0 top-0 z-70"
      onClick={toggleClose}
    />
    <NavHeader white={white} toggleClose={toggleClose} logo={logo} />
    {children}
  </nav>
);

const NavHeader = ({ white, logo, toggleClose }) => (
  <div className="flex items-center relative z-90 justify-between flex-row-reverse eight:flex-row max-w-1000 mx-auto">
    <div className="transform scale-70 translate-x-2 sm:translate-x-0">
      <CloseButton toggleClose={toggleClose} white={white} />
    </div>
    <div className="inline-block eight:absolute right-1/2 eight:transform translate-x-1/2">
      <Link to="/">{white ? logo.Colored() : logo.White()}</Link>
    </div>
    <div className="right-0 transform eight:flex hidden relative">
      <SocialLinks white={white} />
    </div>
  </div>
);

const CloseButton = ({ toggleClose, white }) => (
  <button
    type="button"
    aria-label="Close"
    className="cursor-pointer focus:outline-none"
    onClick={toggleClose}
  >
    <Icon.Cross white={white} />
  </button>
);

const AlvBNav = ({ open, toggleClose, logo, white }) => (
  <NavLayout open={open} logo={logo} toggleClose={toggleClose} white={white}>
    <div className="flex eight:items-center h-4/6">
      <div className="w-full eight:text-center items-center">
        <LargeLink link="/våre-prosjekter">Våre prosjekter</LargeLink>
        <LargeLink link="/biobank">Biobank</LargeLink>
        <LargeLink white>Samarbeid med oss</LargeLink>
        <div>
          <Subtitle link="/samarbeid-med-oss/investering">Investering</Subtitle>
        </div>
        <LargeLink link="/vårt-team">Vårt team</LargeLink>
        <LargeLink link="/blogg">Kunngjøringer og blogg</LargeLink>
        <LargeLink link="/kontakt-oss">Kontakt oss</LargeLink>
      </div>
    </div>
  </NavLayout>
);

const AlvNav = ({ open, toggleClose, categoryPages, logo, companyPages }) => {
  return (
    <NavLayout open={open} logo={logo} toggleClose={toggleClose}>
      <div className="flex eight:justify-center h-full eight:items-center relative eight:-top-16">
        <div className="eight:flex transition duration-300 gap-x-16 justify-center w-full">
          <GenerateLinks
            title="Hva vi tilbyr"
            linksArr={categoryPages}
            parentPage="/vi-tilbyr"
          />
          <GenerateLinks
            title="Hvem vi er"
            linksArr={companyPages}
            parentPage="/om-oss"
          />
          <GenerateLinks title="Mer om alv">
            <Subtitle link="/jobbe-i-alv">Ledige stillinger</Subtitle>
            <Subtitle link="/videoserie">Videoserien</Subtitle>
            <Subtitle link="/blogg">Blogg</Subtitle>
            <Subtitle link="/kontakt-oss">Kontakt oss</Subtitle>
          </GenerateLinks>
        </div>
      </div>
    </NavLayout>
  );
};

const GenerateLinks = ({ linksArr, title, parentPage, children }) => (
  <div className="relative z-70">
    <LargeLink mobileDropdown>{title}</LargeLink>
    <ul>
      {children}
      {linksArr?.map((link) => (
        <Subtitle link={`${parentPage}/${link.slug.current}`}>
          {link.heroHeading}
        </Subtitle>
      ))}
    </ul>
  </div>
);
