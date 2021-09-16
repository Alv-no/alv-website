import React from 'react';
import { BgImage } from 'gbimage-bridge';
import * as Icon from '../icon';

export const ColumnSection = ({
  title,
  eyebrow,
  image,
  imageText,
  children,
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
          <div className="sm:h-auto overflow-hidden lg:mx-12">
            <div>
              <h4 className="text-lg mb-2">{eyebrow}</h4>
              <h3 className="text-4xl uppercase font-semibold mb-0 hyphenate">
                {title}
              </h3>
            </div>
            {children}
          </div>
          <div className="pt-8 lg:ml-5 -mx-5 sm:mx-0">
            <BgImage image={image} className="h-full w-full">
              <div
                className="absolute inset-0 bg-navy text-white cursor-pointer"
                style={{ opacity: '0.3' }}
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
            </BgImage>
          </div>
        </div>
      </div>
    </>
  );
};
