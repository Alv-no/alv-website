import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../title';
import { BlockContent } from '../blockContent';

export const ServiceNavList = ({ nav, heroImage, raw, heading, scrollTo }) => {
  return (
    <div className="px-5 sm:px-12 relative z-10" id="oversikt">
      <div className="max-w-1200 mx-auto pt-10 sm:pt-16 w-full tracking-wider relative z-0">
        <nav className="mx-auto sm:grid sm:gap-x-4 sm:grid-cols-navlist-sm">
          <ul className="text-lg sm:mt-3 -mt-2 list-style-none text-navynav opacity-80 tracking-wider sm:block flex">
            {nav.map((el) => (
              <button
                aria-label="Scroll Link"
                className="mb-7 block sm:mr-0 mr-4"
                onClick={scrollTo}
                name={el.id}
              >
                {el.label}
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
              <div className="z-50 relative sm:block twelve:hidden mb-10 hidden">
                <GatsbyImage
                  image={heroImage}
                  className="-mt-32 relative z-50 sm:-mr-12 sm:h-25vh md:h-30vh -mr-5"
                />
              </div>
              <div className="mb-10">
                <Title
                  align="left sm:text-index"
                  noDot
                  underline
                  color="text-navy"
                >
                  {heading}
                </Title>
              </div>
              <BlockContent blocks={raw} />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
