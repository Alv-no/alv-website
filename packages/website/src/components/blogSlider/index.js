import React from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import { Title } from '../title';
import BackgroundImage from 'gatsby-background-image-es5';

export const BlogSlider = ({ image }) => {
  return (
    <div className="mb-4 mt-10 px-12 w-full">
      <div className="max-w-1200 mx-auto">
        <Title underline align="left" color="text-navy">
          Blogg
        </Title>
      </div>
      <div
        className="pt-12 mx-auto grid gap-x-7"
        style={{ gridTemplateColumns: '25% minmax(500px, 768px) 25%' }}
      >
        <div className="flex items-center overflow-hidden cursor-pointer text-white">
          <div>
            <BackgroundImage fluid={image}>
              <div className="h-85 w-slider bg-navy bg-opacity-75 flex items-center">
                <div className="w-40 mr-4 h-2px bg-white" />{' '}
                <div className="uppercase font-semibold">Prev</div>
              </div>
            </BackgroundImage>
          </div>
        </div>
        <BackgroundImage fluid={image} style={{ maxWidth: '768px' }}>
          <Link to="/blogg">
            <div className="h-slider w-slider grid grid-cols-slider-md p-10 bg-navy bg-opacity-30">
              <div className="flex items-end text-white text-slider font-medium w-full">
                Hvorfor sosialisering gir økt sikkerhet
              </div>
              <div className="h-full w-full flex items-end justify-end text-white font-semibold">
                <Button.Line>Les mer</Button.Line>
              </div>
            </div>
          </Link>
        </BackgroundImage>
        <div className="flex items-center overflow-hidden cursor-pointer">
          <div>
            <BackgroundImage fluid={image}>
              <div className="h-85 w-slider bg-navy bg-opacity-75 flex items-center w-full text-white">
                <div className="uppercase font-semibold ml-56">Next</div>
                <div className="w-40 ml-4 h-2px bg-white" />{' '}
              </div>
            </BackgroundImage>
          </div>
        </div>
      </div>
    </div>
  );
};
