import React from 'react';
import { Footer } from '../footer';
import { Header, MobileHeader } from '../header';
import '../../layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <MobileHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
