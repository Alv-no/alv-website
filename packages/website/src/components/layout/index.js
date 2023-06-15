import React from "react";
import { Header, MobileHeader } from "../header";
import { Footer, SEO } from "shared-components";
import * as Logo from "../logo";
import "./layout.css";

const Layout = ({
  layoutData,
  children,
  pageDescription,
  pageTitle,
  whiteIcons,
  white,
}) => {
  const { servicePages, categoryPages, companyPages, site, ...footerProps } =
    layoutData;

  const metaAuthor = site.siteMetadata.author;
  const metaDescription = site.siteMetadata.description;
  const metaTitle = site.siteMetadata.title;
  const metaArr = [];
  const metaLang = { lang: "no" };

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
      <Footer {...footerProps} companyName="Alv" />
    </>
  );
};

export default Layout;
