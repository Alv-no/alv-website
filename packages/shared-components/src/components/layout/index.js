import React from 'react';
import { Footer } from '../footer';
import { Header, MobileHeader } from '../header';
import { SEO } from '../seo';
// import { useLayoutQuery } from './useLayoutQuery';
import './layout.css';

export const Layout = ({
  children,
  path,
  // pageDescription,
  // pageTitle,
  white,
}) => {
  // const {
  //   address,
  //   org,
  //   email,
  //   phone,
  //   servicePages,
  //   categoryPages,
  // } = useLayoutQuery();
  const servicePages = [
    {
      parentPage: {
        slug: {
          current: '',
        },
      },
      slug: {
        current: '',
      },
    },
  ];
  const categoryPages = [
    {
      name: '',
      heroHeading: '',
      slug: {
        current: '',
      },
    },
  ];

  return (
    <>
      <SEO description={'pageDescription'} title={'pageTitle'} />
      <Header
        white={white}
        path={path}
        servicePages={servicePages}
        categoryPages={categoryPages}
      />

      <MobileHeader servicePages={servicePages} categoryPages={categoryPages} />
      <div>{children}</div>
      <Footer address={'address'} org={'org'} email={'email'} phone={'phone'} />
    </>
  );
};
