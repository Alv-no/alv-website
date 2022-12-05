import React from 'react';
import { Arrow } from '../../../../shared-components/src/components/icon';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../../../../shared-components/src/components/title';
import { StyledBlockContent } from '../styledBlockContent';

export const ServiceNavList = ({ nav, heroImage, raw, heading, scrollTo }) => {
  return (
    <div className="px-5 sm:px-12 relative z-10" id="oversikt">
      <div className="max-w-1200 mx-auto pt-5 sm:pt-16 w-full tracking-wider relative z-0">
        <nav className="mx-auto sm:grid sm:gap-x-4 sm:grid-cols-navlist-sm">
          <ul className="text-lg sm:mt-20 -mt-2 list-style-none text-navynav opacity-80 tracking-wider block divide-y-2 divide-lightnavy divide-solid sm:pr-5 mb-3">
            {nav.map((el) => (
              <button
                aria-label="Scroll Link"
                className="py-3 block sm:mr-0 mr-4 w-full focus:outline-none"
                onClick={scrollTo}
                name={el.id}
              >
                <span className="flex justify-between items-center pointer-events-none">
                  {el.label}
                  <span className="scale-90 transform">
                    <Arrow />
                  </span>
                </span>
              </button>
            ))}
          </ul>
          <div className="z-50 relative mb-10 sm:hidden">
            <GatsbyImage
              image={heroImage}
              className="relative z-50 sm:-mr-12 sm:h-20vh h-30vh h-30vh -mx-5"
            />
          </div>
          <div
            className={`font-light block sm:mb-15 sm:h-auto -mb-10 relative overflow-hidden sm:overflow-visible`}
          >
            <div className="cursor-text text-left z-20 relative">
              <div className="mb-10">
                <Title
                  align="text-left sm:text-index"
                  noDot
                  underline
                  color="text-navy"
                >
                  {heading}
                </Title>
              </div>
              <StyledBlockContent blocks={raw} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
