import React from 'react';
import * as Button from '../button';
import { Title } from '../title';
import BackgroundImage from 'gatsby-background-image-es5';
// import { useBlogQuery } from '../../hooks/useBlogQuery';
import Slider from 'react-slick';

export const BlogSlider = ({ image, dot, color }) => {
  // Source blog posts from Sanity
  // const data = useBlogQuery();
  const settings = {
    dots: true,
    infinite: true,
    focusOnSelect: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="mb-4 mt-10 w-full">
      <div className="">
        <div className="max-w-1440 mx-auto">
          <Title
            underline
            align="left"
            color={color || 'text-navy'}
            nodot={dot}
          >
            Blogg
          </Title>
        </div>
      </div>
      <div
        className="pt-12 mx-auto gap-x-7"
        style={{ gridTemplateColumns: '25% auto 25%' }}
      >
        <Slider {...settings}>
          <BackgroundImage fluid={image}>
            <div className="h-slider w-slider grid grid-cols-slider-md p-10 bg-navy bg-opacity-30">
              <div className="flex items-end text-white text-slider font-medium w-full">
                Hvorfor sosialisering gir økt sikkerhet
              </div>
              <div className="h-full w-full flex items-end justify-end text-white font-semibold">
                <Button.Line>Les mer</Button.Line>
              </div>
            </div>
          </BackgroundImage>
          <BackgroundImage fluid={image}>
            <div className="h-slider w-slider grid grid-cols-slider-md p-10 bg-navy bg-opacity-30">
              <div className="flex items-end text-white text-slider font-medium w-full">
                Hvorfor sosialisering gir økt sikkerhet
              </div>
              <div className="h-full w-full flex items-end justify-end text-white font-semibold">
                <Button.Line>Les mer</Button.Line>
              </div>
            </div>
          </BackgroundImage>
          <BackgroundImage fluid={image}>
            <div className="h-slider w-slider grid grid-cols-slider-md p-10 bg-navy bg-opacity-30">
              <div className="flex items-end text-white text-slider font-medium w-full">
                Hvorfor sosialisering gir økt sikkerhet
              </div>
              <div className="h-full w-full flex items-end justify-end text-white font-semibold">
                <Button.Line>Les mer</Button.Line>
              </div>
            </div>
          </BackgroundImage>
          <BackgroundImage fluid={image}>
            <div className="h-slider w-slider grid grid-cols-slider-md p-10 bg-navy bg-opacity-30">
              <div className="flex items-end text-white text-slider font-medium w-full">
                Hvorfor sosialisering gir økt sikkerhet
              </div>
              <div className="h-full w-full flex items-end justify-end text-white font-semibold">
                <Button.Line>Les mer</Button.Line>
              </div>
            </div>
          </BackgroundImage>
          <BackgroundImage fluid={image}>
            <div className="h-slider w-slider grid grid-cols-slider-md p-10 bg-navy bg-opacity-30">
              <div className="flex items-end text-white text-slider font-medium w-full">
                Hvorfor sosialisering gir økt sikkerhet
              </div>
              <div className="h-full w-full flex items-end justify-end text-white font-semibold">
                <Button.Line>Les mer</Button.Line>
              </div>
            </div>
          </BackgroundImage>
        </Slider>
      </div>
    </div>
  );
};
