import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Overview = ({ image, children, id }) => {
  return (
    <>
      <div className="w-full bg-white sm:-mt-7" id={id}>
        <div
          className="max-w-1200 px-5 xl:px-0 sm:px-12 mx-auto lg:grid gap-x-10 bg-white py-8"
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          {image && (
            <GatsbyImage
              image={image}
              className="h-80 lg:mt-2 sm:-mt-2 -mt-7"
            />
          )}
          <div className="lg:px-0 lg:mt-0 mt-10 font-light flex flex-col justify-between h-full">
            <div
              style={{
                marginTop: '-40px',
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
