import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import * as Icon from '../icon';

export const ColumnSection = ({
  title,
  eyebrow,
  image,
  blockContent,
  imageText,
}) => {
  return (
    <>
      <div className="tracking-wider sm:pb-15">
        <div
          className="max-w-1200 mx-auto lg:grid gap-x-3 xl:gap-x-10 "
          style={{
            gridTemplateColumns: 'minmax(610px, 740px) minmax(320px, 400px)',
          }}
        >
          <div className="h-100 sm:h-auto overflow-hidden">
            <div
              className="absolute mt-10 h-100 w-full sm:hidden"
              style={{
                background:
                  'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%, rgba(0,0,0,1) 100%)',
              }}
            />
            <div>
              <h4 className="text-lg mb-2">{eyebrow}</h4>
              <h3 className="text-4xl uppercase font-semibold mb-3 lg:mb-10">
                {title}
              </h3>
            </div>
            <div className="lg:flex">{blockContent}</div>
          </div>
          <div className="pt-8 lg:ml-5 -mx-5 sm:mx-0">
            <BackgroundImage fluid={image} className="h-full w-full">
              <div
                className="absolute inset-0 bg-navy text-white cursor-pointer"
                style={{ opacity: '30%' }}
              />
              <div className="h-40vh lg:h-full w-full flex justify-between transform -translate-y-3 items-center text-white px-15">
                <div className="uppercase flex w-10 h-10 font-semibold">
                  <div className="whitespace-nowrap transform -rotate-90">
                    {imageText}
                  </div>
                </div>
                <div>
                  <div className="flex justify-end w-full mr-12 absolute right-0">
                    <Icon.Arrow />
                  </div>
                </div>
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </>
  );
};
