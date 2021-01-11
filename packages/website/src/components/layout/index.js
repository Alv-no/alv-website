import React from 'react';
import { Footer } from '../footer';
import { Header, MobileHeader } from '../header';
import { SEO } from '../seo';
import '../../layout.css';

const Layout = ({ children, path }) => {
  return (
    <>
      <SEO />
      <Header path={path} />
      <MobileHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
