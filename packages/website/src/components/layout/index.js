import React from 'react';
import { Footer } from '../footer';
import { Header, MobileHeader } from '../header';
import '../../layout.css';

const Layout = ({ children, path }) => {
  return (
    <>
      <Header path={path} />
      <MobileHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
