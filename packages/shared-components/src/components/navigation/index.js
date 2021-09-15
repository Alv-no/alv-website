import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import * as Logo from '../logo';
import { LargeLink, Subtitle, ListLink, List } from '../navItems';
import { SocialLinks } from '../socialShare';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export const Navigation = ({
  open,
  toggleClose,
  servicePages,
  categoryPages,
}) => {
  const { width } = useWindowDimensions();
  return (
    <>
      <nav
        className={`text-white tracking-wider fixed overflow-y-scroll overflow-x-hidden z-70 w-full h-full bg-navy p-6 sm:p-8 left-0 top-0 transition duration-300 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {console.log('hello')}
        <div className="eight:flex justify-center z-90 relative mx-auto auto eight:mb-0 eight:mb-25 eight:mx-auto max-w-1200 items-center mb-12 eight:mb-0">
          <div className="inline-block">
            <Link to="/">
              <Logo.White />
            </Link>
          </div>
          <div className="absolute right-0 transform -translate-x-20 eight:flex hidden">
            <SocialLinks />
          </div>
        </div>
        <div
          className={`fixed z-70 left-0 top-0 flex flex-col h-full w-full overflow-y-scroll overflow-x-hidden eight:justify-center eight:items-center mt-20 eight:mt-5  ${
            open ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div
            className="eight:grid eight:gap-x-5 twelve:gap-x-10 2xl:gap-x-16 text-white grid-cols-3 transition duration-300"
            style={{ gridTemplateColumns: '270px 270px 210px' }}
          >
            <div>
              <LargeLink link="/vi-tilbyr">Vi Tilbyr</LargeLink>
              {categoryPages &&
                categoryPages
                  .slice(0, width < 800 ? categoryPages.length : 2)
                  .map((categoryPage) => {
                    return (
                      <div
                        className="eight:max-w-68"
                        key={categoryPage.slug.current}
                      >
                        <Subtitle
                          link={`/vi-tilbyr/${categoryPage.slug.current}`}
                        >
                          {categoryPage.heroHeading}
                        </Subtitle>
                        {servicePages.some(
                          (page) =>
                            page.parentPage.slug.current ===
                            categoryPage.slug.current
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
            <div>
              <div className="eight:mt-10 eight:pt-8 2xl:pt-10 xl:pt-10" />
              {categoryPages &&
                categoryPages
                  .slice(2, categoryPages.length)
                  .map((categoryPage) => {
                    return (
                      <div
                        className="eight:max-w-68 eight:-ml-3 transform eight:translate-y-2px 2xl:translate-y-px"
                        key={categoryPage.slug.current}
                      >
                        <Subtitle
                          link={`/vi-tilbyr/${categoryPage.slug.current}`}
                        >
                          {categoryPage.heroHeading}
                        </Subtitle>
                        {servicePages.some(
                          (page) =>
                            page.parentPage.slug.current ===
                            categoryPage.slug.current
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
            <div
              className={
                width >= 800 && `eight:relative absolute w-screen eight:w-auto`
              }
            >
              <LargeLink link="/jobbe-i-alv">Jobbe i Alv</LargeLink>
              <div className="eight:w-64">
                <LargeLink>Selskapet</LargeLink>
                <div>
                  <Subtitle link="/om-oss">Om Oss</Subtitle>
                  <Subtitle link="/ansatte">Ansatte</Subtitle>
                </div>
              </div>
              <LargeLink link="/videoserie">Videoserie</LargeLink>
              <LargeLink link="/blogg">Blogg</LargeLink>
              <LargeLink link="/kontakt-oss">Kontakt Oss</LargeLink>
            </div>
          </div>
          <div className="fixed hidden eight:relative eight:flex eight:m-0 eight:mt-10 justify-center eight:mr-0 z-90 top-0 right-0 sm:mr-7 transform scale-70">
            <button
              type="button"
              aria-label="Close"
              className="cursor-pointer focus:outline-none"
              onClick={toggleClose}
            >
              <Icon.Cross />
            </button>
          </div>
        </div>
        <div className="fixed eight:hidden justify-center z-90 top-0 right-0 mt-5 sm:mr-7 sm:mr-0 mr-4 sm:mt-8 transform scale-70">
          <button
            type="button"
            aria-label="Close"
            className="cursor-pointer focus:outline-none"
            onClick={toggleClose}
          >
            <Icon.Cross />
          </button>
        </div>
      </nav>
    </>
  );
};
