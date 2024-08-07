import React from "react";
import { Footer, SEO } from "shared-components";
import config from "../../config";
import { Header, MobileHeader } from "../header";
import * as Logo from "../logo";
import "./layout.css";
import { useLayoutQuery } from "./useLayoutQuery";

export const Layout = ({
  children,
  path,
  pageDescription,
  pageTitle,
  metaImage,
  white,
  whiteIcons,
  navyHeader,
  noCta,
}) => {
  const { address, org, email, phone, site } = useLayoutQuery();

  const metaAuthor = site.siteMetadata.author;
  const metaDescription = pageDescription || site.siteMetadata.description;
  const metaTitle = pageTitle || site.siteMetadata.title;
  const metaArr = [];
  const metaLang = { lang: config.LOCALE };

  const metaData = {
    metaAuthor,
    metaDescription,
    metaTitle,
    metaArr,
    metaLang,
    metaImage,
  };

  const isEnLocale = true;

  return (
    <>
      <SEO description={pageDescription} title={pageTitle} {...metaData} />
      <Header
        noCta={noCta}
        navyHeader={navyHeader}
        white={white}
        path={path}
        logo={Logo}
        headerCtaText={isEnLocale ? "Contact us" : "Ta kontakt"}
        headerCtaLink={isEnLocale ? "/contact-us" : "/kontakt-oss"}
        whiteIcons={whiteIcons}
        localization={true}
      />
      <MobileHeader white logo={Logo} />
      <div>{children}</div>
      <Footer
        gray
        address={address}
        org={org}
        email={email}
        contactTitle={isEnLocale ? "Contact us" : "Kontakt oss"}
        phone={phone}
        companyName="Alv B"
      />
    </>
  );
};
