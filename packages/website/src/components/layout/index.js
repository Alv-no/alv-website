import React, { useEffect } from "react";
import { Header, MobileHeader } from "../header";
import { Footer, SEO } from "shared-components";
import * as Logo from "../logo";
import "./layout.css";
import CookieBanner from "../cookieBanner";

const Layout = ({
  layoutData,
  children,
  pageDescription,
  pageTitle,
  whiteIcons,
  white,
}) => {
  useEffect(() => {
    document.addEventListener(
      "chatlio.ready",
      function () {
        window._chatlio.show();
      },
      false
    );
  }, []);

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
      <chatlio-widget widgetid="0510c3a3-db1f-4280-5a59-eb536d7ead38"></chatlio-widget>
      <CookieBanner />
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
