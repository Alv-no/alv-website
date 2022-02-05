import React, { useEffect, useState } from 'react';
import { navItems } from '../../utils/navItems';

export const LocaleButtons = ({ whiteIcons, navyHeader }) => {
  const pathStr = window.location.pathname.replace('%C3%A5', 'å');
  const pathArr = pathStr.split('/');
  pathArr.shift();

  const localeList = ['no', 'en'];

  const [activeLocale, setActiveLocale] = useState('no');
  useEffect(() => {
    const { pathname } = window.location;
    if (pathname.includes('/en/') || pathname === '/en') {
      if (activeLocale !== 'en') {
        setActiveLocale('en');
      }
    } else {
      if (activeLocale !== 'no') {
        setActiveLocale('no');
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLocaleClick = (locale) => {
    if (pathStr === '/') {
      setActiveLocale('en');
      return (window.location.href = `${window.location.origin}/en`);
    }

    if (pathStr === '/en') {
      setActiveLocale('no');
      return (window.location.href = `${window.location.origin}/`);
    }

    const newPathObj = navItems.find((el) => {
      return (
        el[activeLocale].link?.includes(pathStr) ||
        el[activeLocale]?.children?.[0].link.includes(pathStr)
      );
    });

    const newPathStr =
      newPathObj[locale]?.link || newPathObj[locale]?.children?.[0].link;

    window.location.href = `${window.location.origin}${newPathStr}`;
    setActiveLocale(locale);
  };
  return (
    <div className="ml-10 sm:pt-1">
      {localeList.map((locale, i) => (
        <span
          className={
            whiteIcons || navyHeader ? 'text-white' : 'text-theme-text'
          }
        >
          <button
            key={locale}
            className={`uppercase mx-6px pt-px font-thin focus:outline-none ${
              activeLocale === locale
                ? 'font-medium pointer-events-none'
                : 'opacity-50'
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
