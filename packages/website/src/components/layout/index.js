import React from 'react';
import { Header, MobileHeader, Footer, SEO } from 'shared-components';
import { useLayoutQuery } from './useLayoutQuery';
import './layout.css';

export const Layout = ({
  children,
  path,
  pageDescription,
  pageTitle,
  white,
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

  return (
    <>
      <SEO description={pageDescription} title={pageTitle} {...metaData} />
      <Header
        white={white}
        path={path}
        servicePages={servicePages}
        categoryPages={categoryPages}
      />
      <MobileHeader servicePages={servicePages} categoryPages={categoryPages} />
      <div>{children}</div>
      <Footer address={address} org={org} email={email} phone={phone} />
    </>
  );
};
