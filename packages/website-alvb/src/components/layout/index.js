import React from 'react';
import { Header, MobileHeader, Footer, SEO } from 'shared-components';
import { useLayoutQuery } from './useLayoutQuery';
import './layout.css';

export const Layout = ({ children, path, pageDescription, pageTitle }) => {
  const {
    address,
    org,
    email,
    phone,
    servicePages,
    categoryPages,
  } = useLayoutQuery();
  return (
    <>
      <SEO description={pageDescription} title={pageTitle} />
      <Header
        white
        path={path}
        servicePages={servicePages}
        categoryPages={categoryPages}
      />
      <MobileHeader
        white
        servicePages={servicePages}
        categoryPages={categoryPages}
      />
      <div>{children}</div>
      <Footer address={address} org={org} email={email} phone={phone} />
    </>
  );
};
