import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import * as Logo from '../logo';
import { LargeLink, Subtitle, ListLink, List } from '../navItems';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Navigation = ({
  open,
  toggleClose,
  servicePages,
  categoryPages,
}) => {
  const { width } = useWindowDimensions();
  return (
    <header
      className={`text-white tracking-wider fixed overflow-y-scroll overflow-x-hidden z-50 h-full w-full bg-navy p-6 sm:p-8 left-0 top-0 transition duration-300 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="eight:flex justify-center relative z-40 mx-auto auto eight:mb-0 eight:mb-25 eight:mx-auto max-w-1200 items-center mb-12 eight:mb-0">
        <div className="">
          <Link to="/">
            <Logo.White />
          </Link>
        </div>
        <div className="absolute right-0 transform -translate-x-20 eight:flex hidden">
          <a
            href="https://www.instagram.com/alvnoas/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon.Instagram />
          </a>
          <span className="mr-4 ml-6">
            <a
              href="https://twitter.com/alvnoas/"
              target="_blank"
              rel="noreferrer"
            >
              <Icon.Twitter />
            </a>
          </span>
          <a
            href="https://www.facebook.com/AlvNorge/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon.Facebook />
          </a>
        </div>
      </div>
      <div className="eight:flex eight:mx-auto eight:-mt-10 justify-center max-w-1000 -mx-6 sm:-mx-8 eight:pr-8">
        <div>
          <LargeLink margin="eight:mb-10 2xl:mb-12" link="/vi-tilbyr">
            Vi Tilbyr
          </LargeLink>
          {categoryPages &&
            categoryPages.slice(0, 2).map((categoryPage) => {
              return (
                <div className="eight:max-w-68" key={categoryPage.slug.current}>
                  <Subtitle
                    link={`/vi-tilbyr/${categoryPage.slug.current}`}
                    margin="eight:mb-8 2xl:mb-12"
                  >
                    {categoryPage.heroHeading}
                  </Subtitle>
                  {servicePages.some(
                    (page) =>
                      page.parentPage.slug.current === categoryPage.slug.current
                  ) && (
                    <List>
                      {servicePages
                        .filter(
                          (page) =>
                            page.parentPage.slug.current ===
                            categoryPage.slug.current
                        )
                        .map((page) => (
                          <ListLink
                            link={`/vi-tilbyr/${page.parentPage.slug.current}/${page.slug.current}`}
                            margin="eight:mb-5 2xl:mb-6"
                            key={page.slug.current}
                          >
                            {page.heroHeading}
                          </ListLink>
                        ))}
                    </List>
                  )}
                </div>
              );
            })}
        </div>
        <div className="eight:w-10 lg:w-15 xl:w-20 2xl:w-32" />
        <div>
          <div className="eight:mt-20 eight:pt-7 xl:pt-10" />
          {categoryPages &&
            categoryPages.slice(2, categoryPages.length).map((categoryPage) => {
              return (
                <div className="eight:max-w-68" key={categoryPage.slug.current}>
                  <Subtitle
                    link={`/vi-tilbyr/${categoryPage.slug.current}`}
                    inactive={
                      !servicePages.some(
                        (page) =>
                          page.parentPage.slug.current ===
                          categoryPage.slug.current
                      )
                    }
                    margin="eight:mb-10 2xl:mb-12"
                  >
                    {categoryPage.heroHeading}
                  </Subtitle>
                  {servicePages.some(
                    (page) =>
                      page.parentPage.slug.current === categoryPage.slug.current
                  ) && (
                    <List>
                      {servicePages
                        .filter(
                          (page) =>
                            page.parentPage.slug.current ===
                            categoryPage.slug.current
                        )
                        .map((page) => (
                          <ListLink
                            link={`/vi-tilbyr/${page.parentPage.slug.current}/${page.slug.current}`}
                            margin="eight:mb-5 2xl:mb-6"
                            key={page.slug.current}
                          >
                            {page.heroHeading}
                          </ListLink>
                        ))}
                    </List>
                  )}
                </div>
              );
            })}
        </div>
        <div className="eight:w-12 lg:w-15 xl:w-20 2xl:w-32" />
        <div
          className={
            width >= 800 && `eight:relative absolute w-screen eight:w-auto`
          }
        >
          <LargeLink
            link="/jobbe-i-alv"
            margin="eight:mb-10 2xl:mb-12 relative"
          >
            Jobbe i Alv
          </LargeLink>
          <div className="eight:w-64">
            <LargeLink margin="eight:mb-10 2xl:mb-12">Selskapet</LargeLink>
            <div>
              <Subtitle link="/om-oss" margin="eight:mb-8 2xl:mb-6">
                Om Oss
              </Subtitle>
              <Subtitle link="/ansatte" margin="eight:mb-8 2xl:mb-6">
                Ansatte
              </Subtitle>
            </div>
          </div>
          <LargeLink link="/videoserie" margin="eight:mt-10 2xl:mt-12">
            Videoserie
          </LargeLink>
          <LargeLink link="/blogg" margin="eight:mt-10 2xl:mt-12">
            Blogg
          </LargeLink>
          <LargeLink link="/kontakt-oss" margin="eight:mt-1≤0 2xl:mt-12">
            Kontakt Oss
          </LargeLink>
        </div>
      </div>
      <div className="eight:relative eight:flex eight:m-0 justify-center eight:mr-0 absolute z-40 top-0 right-0 mt-5 sm:mr-7 sm:mr-0 mr-4 sm:mt-8 transform scale-70">
        <button
          type="button"
          aria-label="Close"
          className="cursor-pointer focus:outline-none"
          onClick={toggleClose}
        >
          <Icon.Cross />
        </button>
      </div>
    </header>
  );
};
