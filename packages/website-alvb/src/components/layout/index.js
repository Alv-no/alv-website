import React from 'react';
import { Footer, SEO } from 'shared-components';
import { window } from 'browser-monads';
import { Header, MobileHeader } from '../header';
import { useLayoutQuery } from './useLayoutQuery';
import * as Logo from '../logo';
import './layout.css';

export const Layout = ({
  children,
  path,
  pageDescription,
  pageTitle,
  white,
  whiteIcons,
  navyHeader,
  noCta,
}) => {
  const {
    address,
    org,
    email,
    phone,
    servicePages,
    categoryPages,
    site,
  } = useLayoutQuery();

  const metaAuthor = site.siteMetadata.author;
  const metaDescription = site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title;
  const metaArr = [];
  const metaLang = { lang: 'no' };

  const metaData = {
    metaAuthor,
    metaDescription,
    metaTitle,
    metaArr,
    metaLang,
  };

  const isEnLocale =
    window.location.pathname.includes('/en/') ||
    window.location.pathname === '/en';

  return (
    <>
      <SEO description={pageDescription} title={pageTitle} {...metaData} />
      <Header
        noCta={noCta}
        navyHeader={navyHeader}
        white={white}
        path={path}
        logo={Logo}
        headerCtaText={isEnLocale ? 'Contact us' : 'Ta kontakt'}
        headerCtaLink={isEnLocale ? '/en/contact-us' : '/kontakt-oss'}
        whiteIcons={whiteIcons}
        isEnLocale={isEnLocale}
      />
      <MobileHeader
        white
        servicePages={servicePages}
        categoryPages={categoryPages}
        logo={Logo}
      />
      <div>{children}</div>
      <Footer
        gray
        address={address}
        org={org}
        email={email}
        contactTitle={isEnLocale ? 'Contact us' : 'Kontakt oss'}
        phone={phone}
        companyName="Alv B"
      />
    </>
  );
};
