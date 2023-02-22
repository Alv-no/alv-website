import { window } from "browser-monads";
import React from "react";
import { navItems } from "../../utils/navItems";
import config from "../../config";

export const LocaleButtons = ({ whiteIcons, navyHeader }) => {
  const pathStr = window.location.pathname.replace("%C3%A5", "å");
  const pathArr = pathStr.split("/");
  pathArr.shift();

  const localeList = ["no", "en"];

  const handleLocaleClick = (locale) => {
    let domain = config.TRANSLATED_DOMAIN?.includes("://") ? "" : "https://";
    domain += config.TRANSLATED_DOMAIN;

    if (pathStr === "/") {
      window.location.href = domain;
      return;
    }

    const newPathObj = navItems.find((el) => {
      return (
        el[config.LOCALE].link?.includes(pathStr) ||
        el[config.LOCALE]?.children?.[0].link.includes(pathStr)
      );
    });

    // If we cannot find an route
    if (!newPathObj) {
      window.location.href = domain;
    }

    const newPathStr =
      newPathObj[locale]?.link || newPathObj[locale]?.children?.[0].link;

    window.location.href = `${domain}${newPathStr}`;
  };
  return (
    <div className="ml-10 sm:pt-1">
      {localeList.map((locale, i) => (
        <span
          key={i}
          className={
            whiteIcons || navyHeader ? "text-white" : "text-theme-text"
          }
        >
          <button
            key={locale}
            className={`uppercase mx-6px pt-px font-thin focus:outline-none ${
              config.LOCALE === locale
                ? "font-medium pointer-events-none"
                : "opacity-50"
            }`}
            onClick={() => handleLocaleClick(locale)}
          >
            {locale}
          </button>
          {i !== locale.length - 1 && <span className="opacity-50">|</span>}
        </span>
      ))}
    </div>
  );
};
