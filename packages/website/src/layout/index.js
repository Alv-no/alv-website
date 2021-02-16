import React from 'react';
import { Footer } from '../components/footer';
import { Header, MobileHeader } from '../components/header';
import { SEO } from '../components/seo';
import { useLayoutQuery } from '../hooks/useLayoutQuery';
import './layout.css';

const Layout = ({ children, path }) => {
  const { address, org, email, phone, pages } = useLayoutQuery();
  return (
    <>
      <SEO />
      <Header path={path} pages={pages} />
      <MobileHeader pages={pages} />
      <div>{children}</div>
      <Footer address={address} org={org} email={email} phone={phone} />
    </>
  );
};

export default Layout;
