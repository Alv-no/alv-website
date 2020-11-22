import React from 'react';
import { Footer } from '../footer';
import { Header, MobileHeader } from '../header';
import { Navigation } from '../navigation';
import '../../layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <Header />
      <MobileHeader />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
