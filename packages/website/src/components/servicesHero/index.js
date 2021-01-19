import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';

export const ServicesHero = ({ backgroundImage, children }) => {
  return (
    <>
      <div className="absolute top-0 right-0 w-full">
        <BackgroundImage fluid={backgroundImage}>
          <div className="h-screen flex flex-col justify-center items-center bg-navy opacity-75 px-12">
            {children}
          </div>
        </BackgroundImage>
      </div>
      <div className="h-screen" />
    </>
  );
};
