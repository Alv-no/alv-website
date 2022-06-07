import React from 'react';
import { BgImage } from 'gbimage-bridge';

export const ServicesHero = ({ backgroundImage, children }) => {
  return (
    <>
      <div className="absolute top-0 right-0 w-full">
        <BgImage image={backgroundImage}>
          <div className="h-screen flex flex-col justify-center items-center bg-navy opacity-75 px-12">
            {children}
          </div>
        </BgImage>
      </div>
      <div className="h-screen sm:-mt-20 -mt-18" />
    </>
  );
};
