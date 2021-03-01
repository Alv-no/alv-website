import React from 'react';
import { Footer } from '../components/footer';
import { Header, MobileHeader } from '../components/header';
import { SEO } from '../components/seo';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import './layout.css';

const Layout = ({ children, path, pageDescription, pageTitle }) => {
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

export default Layout;
