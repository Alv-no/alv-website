import React from 'react';
import { Header, MobileHeader, Footer, SEO } from 'shared-components';
import * as Logo from '../logo';
import './layout.css';
import CookieNotice from '../cookieNotice';

interface LayoutData {
   address: string,
   org: string,
   email: string,
   phone: string,
   servicePages: any, // TODO: fixme
   categoryPages: any, // TODO: fixme
   companyPages: any, // TODO: fixme
   site: any,
}

interface Props {
  layoutData: LayoutData,
  path?: string,
  pageDescription?: string,
  pageTitle?: string,
  whiteIcons: any, // TODO: fixme
  white?: any, // TODO: fixme
};

const Layout : React.FC<Props> = ({
  layoutData,
  children,
  path,
  pageDescription,
  pageTitle,
  whiteIcons,
  white,
}) => {
  const {
    address,
    org,
    email,
    phone,
    servicePages,
    categoryPages,
    companyPages,
    site,
  } = layoutData;

  const metaAuthor = site.siteMetadata.author;
  const metaDescription = site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title;
  const metaArr : any[] = [];
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
        whiteIcons={whiteIcons}
        servicePages={servicePages}
        categoryPages={categoryPages}
        logo={Logo}
        companyPages={companyPages}
        headerCtaText="jobbe i alv?"
        headerCtaLink="/jobbe-i-alv"
      />
      <MobileHeader
        servicePages={servicePages}
        companyPages={companyPages}
        categoryPages={categoryPages}
        logo={Logo}
      />
      <div>{children}</div>
      <Footer
        address={address}
        org={org}
        email={email}
        phone={phone}
        companyName="Alv"
      />
      <CookieNotice />
    </>
  );
};

export default Layout;
