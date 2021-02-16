import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import * as Logo from '../logo';
import { LargeLink, Subtitle, ListLink } from '../navItems';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const ConditionalWrapper = ({ condition, wrapper, children }) =>
  condition ? wrapper(children) : children;

export const Navigation = ({ open, toggleClose, pages }) => {
  const { width } = useWindowDimensions();
  return (
    <header
      className={`text-white tracking-wider fixed overflow-y-scroll z-50 h-full w-full bg-navy p-6 sm:p-8 left-0 top-0 transition duration-300 eight:text-center ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 999 }}
    >
      <div className="eight:flex justify-center relative z-40 mr-5 justify-between mx-auto auto eight:mb-0 eight:mb-25 max-w-1200 items-center mb-12 eight:mb-0">
        <div className="w-40" />
        <span className="">
          <Link to="/">
            <Logo.White />
          </Link>
        </span>
        <div className="eight:flex w-35 hidden">
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
          <div className="hidden eight:block justify-center ml-10 -mt-1 transform scale-60">
            <button
              type="button"
              className="cursor-pointer focus:outline-none"
              onClick={toggleClose}
            >
              <Icon.Cross />
            </button>
          </div>
        </div>
      </div>
      <div className="eight:flex eight:mx-auto eight:-mt-10 justify-center items-center max-w-1000 -mx-6 sm:-mx-8">
        <ConditionalWrapper
          condition={width >= 800}
          wrapper={(children) => <div>{children}</div>}
        >
          <LargeLink margin="eight:mb-10 2xl:mb-12">Vi Tilbyr</LargeLink>
          <div>
            {pages &&
              pages.map((page) => {
                return (
                  <ListLink link={`/vi-tilbyr/${page.slug.current}`}>
                    {page.heroHeading}
                  </ListLink>
                );
              })}
          </div>
        </ConditionalWrapper>
        <div className="w-20" />
        <ConditionalWrapper
          condition={width >= 800}
          wrapper={(children) => (
            <div className="eight:relative absolute w-screen eight:w-auto">
              {children}
            </div>
          )}
        >
          <LargeLink
            link="/jobbe-i-alv"
            margin="eight:mb-10 2xl:mb-12 relative"
          >
            Jobbe i Alv
          </LargeLink>
          <div>
            <LargeLink margin="eight:mb-10 2xl:mb-12">Selskapet</LargeLink>
            <div>
              <Subtitle link="/om-oss" margin="eight:mb-5 2xl:mb-6">
                Om Oss
              </Subtitle>
              <Subtitle link="/ansatte" margin="eight:mb-5 2xl:mb-6">
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
        </ConditionalWrapper>
      </div>
      <div className="eight:absolute eight:mr-12 eight:hidden eight:mt-8 justify-center eight:mr-0 absolute top-0 right-0 mt-5 mr-5 sm:mt-8 sm:mr-8 transform scale-70 sm:scale-80 eight:scale-70">
        <button
          type="button"
          className="cursor-pointer focus:outline-none"
          onClick={toggleClose}
        >
          <Icon.Cross />
        </button>
      </div>
    </header>
  );
};
