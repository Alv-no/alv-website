import { window } from 'browser-monads';
import Link from 'gatsby-link';
import React from 'react';
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

const NavLayout = ({
  open,
  logo,
  children,
  toggleClose,
  white,
  isEnLocale,
}) => (
  <nav
    className={`text-theme-text bg-theme-bg tracking-wider fixed overflow-y-scroll overflow-x-hidden z-70 w-full h-full bg-theme-bg p-6 sm:p-8 left-0 top-0 transition duration-300 ${
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
  <div className="flex items-center relative z-90 justify-between flex-row-reverse eight:flex-row max-w-1000 mx-auto">
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

const AlvBNav = ({ open, toggleClose, logo, white }) => {
  const isEnLocale = window.location.href.includes('/en');

  const localeNavMapper = [
    {
      no: {
        text: 'Våre prosjekter',
        link: '/våre-prosjekter',
      },
      en: {
        text: 'Our projects',
        link: '/en/our-projects',
      },
    },
    {
      no: {
        text: 'Biobank',
        link: '/biobank',
      },
      en: {
        text: 'Biobank',
        link: '/en/biobank',
      },
    },
    {
      no: {
        text: 'Samarbeid med oss',
        children: [
          {
            text: 'Investering',
            link: '/samarbeid-med-oss/investering',
          },
        ],
      },
      en: {
        text: 'Cooperate with us',
        children: [{ text: 'Invest', link: '/en/collaborate-with-us/invest' }],
      },
    },
    {
      no: { text: 'Vårt team', link: '/vårt-team' },
      en: { text: 'Our team', link: '/en/our-team' },
    },
    {
      no: { text: 'Kunngjøringer og blogg', link: '/blogg' },
      en: { text: 'Announcements and blog', link: '/en/blog' },
    },
    {
      no: { text: 'Kontakt oss', link: '/kontakt-oss' },
      en: { text: 'Contact us', link: '/en/contact-us' },
    },
  ];
  return (
    <NavLayout
      open={open}
      logo={logo}
      toggleClose={toggleClose}
      white={white}
      isEnLocale={isEnLocale}
    >
      <div className="flex eight:items-center h-full -mt-12">
        <div className="eight:text-center items-center relative z-90 eight:mx-auto">
          <LocaleNav localeNavArr={localeNavMapper} isEnLocale={isEnLocale} />
        </div>
      </div>
    </NavLayout>
  );
};

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
            <Subtitle link={child.link}>{child.text}</Subtitle>
          ))}
        </div>
      )}
    </>
  ));
};

const AlvNav = ({ open, toggleClose, categoryPages, logo, companyPages }) => {
  const filteredCompanyPages = companyPages?.filter(
    (page) => page.slug.current !== 'kunder-og-prosjekter'
  );
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
            linksArr={filteredCompanyPages}
            parentPage="/om-oss"
            mainLinkText="Om oss"
          >
            <Subtitle link="/ansatte">Ansatte</Subtitle>
          </GenerateLinks>
          <GenerateLinks title="Mer om alv">
            <Subtitle link="/jobbe-i-alv">Ledige stillinger</Subtitle>
            <Subtitle link="/videoserie">Videoserien</Subtitle>
            <Subtitle link="/om-oss/kunder-og-prosjekter">
              Kunder og prosjekter
            </Subtitle>
            <Subtitle link="/blogg">Blogg</Subtitle>
            <Subtitle link="/kontakt-oss">Kontakt oss</Subtitle>
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
    <LargeLink mobileDropdown>{title}</LargeLink>
    <ul>
      {mainLinkText && <Subtitle link={parentPage}>{mainLinkText}</Subtitle>}
      {linksArr?.map((link) => (
        <Subtitle link={`${parentPage}/${link.slug.current}`}>
          {link.heroHeading}
        </Subtitle>
      ))}
      {children}
    </ul>
  </div>
);
