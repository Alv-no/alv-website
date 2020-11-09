import React from 'react';
import { Footer } from '../footer';
import '../../layout.css';

const Layout = ({ children }) => {
  return (
    <>
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
