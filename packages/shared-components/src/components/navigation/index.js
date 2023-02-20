import Link from 'gatsby-link';
import React from 'react';
import { LargeLink, SubtitleLink, SocialLinks, Icon } from 'shared-components';

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
    <AlvNav
      open={open}
      white={white}
      toggleClose={toggleClose}
      companyPages={companyPages}
      servicePages={servicePages}
      categoryPages={categoryPages}
      logo={logo}
    />
  );
};

const NavLayout = ({
  open,
  logo,
  children,
  toggleClose,
  white,
  isEnLocale,
}) => (
  <nav
    className={`text-theme-text bg-theme-bg tracking-wider fixed overflow-y-scroll overflow-x-hidden z-70 w-full h-full bg-theme-bg left-0 top-0 transition duration-300 ${
      open ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <button
      className="h-screen w-screen fixed left-0 top-0 z-70"
      onClick={toggleClose}
    />
    <NavHeader
      white={white}
      toggleClose={toggleClose}
      logo={logo}
      isEnLocale={isEnLocale}
    />
    {children}
  </nav>
);

const NavHeader = ({ white, logo, toggleClose, isEnLocale }) => (
  /* container  */
  <div className="w-full flex justify-center">
    <div className="container w-full flex items-center relative z-90 justify-between flex-row-reverse max-w-1440 eight:flex-row pt-6">
      <div className="transform scale-70 translate-x-2 sm:translate-x-0">
        <CloseButton toggleClose={toggleClose} white={white} />
      </div>
      <div className="inline-block eight:absolute left-1/2 eight:transform eight:-translate-x-1/2">
        <Link to={isEnLocale ? '/en' : '/'}>
          {white ? logo.Colored() : logo.White()}
        </Link>
      </div>
      <div className="right-0 transform eight:flex hidden relative">
        <SocialLinks white={white} />
      </div>
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

const AlvNav = ({ open, toggleClose, categoryPages, logo, companyPages }) => {
  const filteredCompanyPages = companyPages?.filter(
    (page) => page.slug.current !== 'kunder-og-prosjekter',
  );
  return (
    <NavLayout open={open} logo={logo} toggleClose={toggleClose}>
      <div className="w-full flex eight:justify-center h-full eight:items-center relative eight:-top-16">
        <div className="w-full eight:px-0 eight:flex transition duration-300 gap-x-16 justify-center">
          <GenerateLinks
            title="Hva vi tilbyr"
            linksArr={categoryPages}
            parentPage="/vi-tilbyr"
          />
          <GenerateLinks
            title="Hvem vi er"
            linksArr={filteredCompanyPages}
            parentPage="/om-oss"
            mainLinkText="Om oss"
          >
            <SubtitleLink link="/ansatte">Ansatte</SubtitleLink>
          </GenerateLinks>
          <GenerateLinks title="Mer om alv">
            <SubtitleLink link="/jobbe-i-alv">Ledige stillinger</SubtitleLink>
            <SubtitleLink link="/videoserie">Videoserien</SubtitleLink>
            <SubtitleLink link="/om-oss/kunder-og-prosjekter">
              Kunder og prosjekter
            </SubtitleLink>
            <SubtitleLink link="/blogg">Blogg</SubtitleLink>
            <SubtitleLink link="/kontakt-oss">Kontakt oss</SubtitleLink>
          </GenerateLinks>
        </div>
      </div>
    </NavLayout>
  );
};

const GenerateLinks = ({
  linksArr,
  title,
  parentPage,
  mainLinkText,
  children,
}) => (
  <div className="relative z-70">
    <LargeLink link="#" mobileDropdown>
      {title}
    </LargeLink>
    <ul>
      {mainLinkText && (
        <SubtitleLink link={parentPage}>{mainLinkText}</SubtitleLink>
      )}
      {linksArr?.map((link, index) => (
        <SubtitleLink key={index} link={`${parentPage}/${link.slug.current}`}>
          {link.heroHeading}
        </SubtitleLink>
      ))}
      {children}
    </ul>
  </div>
);
