import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import { LargeLink, Subtitle, ListLink, List } from '../navItems';
import { SocialLinks } from '../socialShare';

export const Navigation = ({
  open,
  white,
  toggleClose,
  servicePages,
  companyPages,
  categoryPages,
  logo,
}) => {
  return (
    <>
      {white ? (
        <AlvBNav
          open={open}
          toggleClose={toggleClose}
          logo={logo}
          white={white}
        />
      ) : (
        <AlvNav
          open={open}
          white={white}
          toggleClose={toggleClose}
          companyPages={companyPages}
          servicePages={servicePages}
          categoryPages={categoryPages}
          logo={logo}
        />
      )}
    </>
  );
};

const NavHeader = ({ open, logo, children, toggleClose, white }) => (
  <nav
    className={`text-theme-text bg-theme-bg tracking-wider fixed overflow-y-scroll overflow-x-hidden z-70 w-full h-full bg-theme-bg p-6 sm:p-8 left-0 top-0 transition duration-300 ${
      open ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}
  >
    <div className="eight:flex justify-center z-90 relative mx-auto auto eight:mb-0 eight:mb-25 eight:mx-auto max-w-1200 items-center mb-12 eight:mb-0">
      <div className="inline-block">
        <Link to="/">{white ? logo.Colored() : logo.White()}</Link>
      </div>
      <div className="absolute right-0 transform -translate-x-20 eight:flex hidden">
        <SocialLinks white={white} />
      </div>
    </div>
    {children}
    <div className="fixed top-4 right-4 eight:relative eight:flex eight:m-0 eight:mt-10 justify-center eight:mr-0 z-90 top-0 right-0 sm:mr-7 transform scale-70">
      <button
        type="button"
        aria-label="Close"
        className="cursor-pointer focus:outline-none"
        onClick={toggleClose}
      >
        <Icon.Cross white={white} />
      </button>
    </div>
  </nav>
);

const AlvBNav = ({ open, toggleClose, logo, white }) => (
  <NavHeader open={open} logo={logo} toggleClose={toggleClose} white={white}>
    <div className="flex eight:items-center h-4/6">
      <div className="w-full eight:text-center items-center">
        <LargeLink link="/våre-prosjekter">Våre prosjekter</LargeLink>
        <LargeLink link="/biobank">Biobank</LargeLink>
        <LargeLink white>Samarbeid med oss</LargeLink>
        <div>
          <Subtitle link="/samarbeid-med-oss/investering">Investering</Subtitle>
        </div>
        <LargeLink link="/vårt-team">Vårt team</LargeLink>
        <LargeLink link="/blogg">Kunngjøringer og blogg</LargeLink>
        <LargeLink link="/kontakt-oss">Kontakt oss</LargeLink>
      </div>
    </div>
  </NavHeader>
);

const AlvNav = ({
  open,
  toggleClose,
  servicePages,
  categoryPages,
  logo,
  companyPages,
}) => {
  return (
    <>
      <NavHeader open={open} logo={logo} toggleClose={toggleClose}>
        <div className="flex eight:items-center h-4/6 eight:justify-center">
          <div
            className="eight:grid eight:gap-x-5 twelve:gap-x-10 2xl:gap-x-16 text-theme-text grid-cols-3 transition duration-300"
            style={{ gridTemplateColumns: '270px 270px 210px' }}
          >
            <div>
              <LargeLink link="/vi-tilbyr">Vi Tilbyr</LargeLink>
              <span className="hidden eight:block">
                {categoryPages &&
                  categoryPages.slice(0, 2).map((categoryPage) => {
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
              </span>
              <span className="eight:hidden">
                {categoryPages &&
                  categoryPages
                    .slice(0, categoryPages.length)
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
              </span>
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
            <div className="eight:relative eight:absolute eight:w-screen eight:w-auto">
              <LargeLink link="/jobbe-i-alv">Jobbe i Alv</LargeLink>
              <div className="eight:w-64">
                <LargeLink link="/selskapet">Selskapet</LargeLink>
                <div>
                  {companyPages &&
                    companyPages.map((page) => (
                      <Subtitle link={`/selskapet/${page.node.slug.current}`}>
                        {page.node.heroHeading}
                      </Subtitle>
                    ))}
                  <Subtitle link="/ansatte">Ansatte</Subtitle>
                </div>
              </div>
              <LargeLink link="/videoserie">Videoserie</LargeLink>
              <LargeLink link="/blogg">Blogg</LargeLink>
              <LargeLink link="/kontakt-oss">Kontakt Oss</LargeLink>
            </div>
          </div>
        </div>
      </NavHeader>
    </>
  );
};
