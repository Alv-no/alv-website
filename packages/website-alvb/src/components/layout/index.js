import React from 'react';
import { Header, MobileHeader, Footer, SEO } from 'shared-components';
import { useLayoutQuery } from './useLayoutQuery';
import * as Logo from '../logo';
import './layout.css';

export const Layout = ({ children, path, pageDescription, pageTitle }) => {
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

  return (
    <>
      <SEO description={pageDescription} title={pageTitle} {...metaData} />
      <Header
        white
        path={path}
        servicePages={servicePages}
        categoryPages={categoryPages}
        logo={Logo}
        headerCtaText="Ta kontakt"
        headerCtaLink="/kontakt-oss"
        whiteIcons
      />
      <MobileHeader
        white
        servicePages={servicePages}
        categoryPages={categoryPages}
        logo={Logo}
      />
      <div>{children}</div>
      <Footer gray address={address} org={org} email={email} phone={phone} />
    </>
  );
};
