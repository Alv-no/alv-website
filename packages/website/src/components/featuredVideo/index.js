import React from 'react';
import Link from 'gatsby-link';
import BackgroundImage from 'gatsby-background-image-es5';
import * as Icon from '../icon';

export const FeaturedVideo = ({ thumbnail, title }) => {
  return (
    <>
      {title && (
        <>
          <div className="px-5">
            <div className="uppercase sm:hidden tracking-wider text-base font-bold ">
              Vår nyeste artikkel
            </div>
            <div className="w-12 h-2px sm:hidden bg-yellow mb-6 mt-6px" />
          </div>
        </>
      )}
      <Link to="/episode">
        <BackgroundImage fluid={thumbnail}>
          <div className="sm:h-40 h-56 twelve:h-full" />
          <div
            className="xs:block twelve:h-featured 2xl:h-featured"
            style={{
              background:
                'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
            }}
          >
            <div className="w-full z-50 h-full p-8 flex flex-col justify-between">
              <div />
              <div className="flex text-white justify-between tracking-wider">
                <div className="pl-1">
                  {title && (
                    <>
                      <div className="uppercase sm:block hidden text-base font-bold ">
                        Vår nyeste artikkel
                      </div>
                      <div className="w-12 h-2px sm:block hidden bg-yellow mb-4 mt-3" />
                    </>
                  )}
                  <div className="text-nav font-bold mt-4 mb-3">{title}</div>
                </div>
                <div className="flex flex-col justify-between">
                  <div />
                  <div className="font-semibold uppercase w-32 flex text-right justify-end items-center">
                    <span className="ml-2">
                      <Icon.VideoPlay color="#fff" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      </Link>
    </>
  );
};
