import React from 'react';
import * as Icon from '../icon';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

export const ReasonsSlider = ({ mainHeading, slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    nextArrow: <NextArrowLine />,
    prevArrow: <PrevArrowLine />,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
        },
      },
    ],
  };
  return (
    <div className="pb-12 twelve:pb-0">
      <Slider {...settings}>
        {slides.map((el, index) => (
          <ArticleSlide
            key={index}
            mainHeading={mainHeading}
            heading={el.heading}
            description={el.description}
            image={el.image.asset.gatsbyImageData}
            slideNr={index + 1}
          />
        ))}
      </Slider>
    </div>
  );
};

export const ArticleSlide = ({
  image,
  mainHeading,
  slideNr,
  heading,
  description,
}) => (
  <div
    className="max-w-1440 mx-auto twelve:grid tracking-wider"
    style={{ gridTemplateColumns: '65% auto' }}
  >
    <div className="twelve:px-30 sm:px-12 px-5">
      <h3 className="uppercase text-4xl leading-snug font-semibold twelve:w-100 w-full mb-10 -ml-2px hyphenate">
        {mainHeading}
      </h3>
      <div className="pl-32 pr-18 hidden twelve:block">
        <div className="flex mt-10">
          <div className="text-4xl mr-5 text-white py-0 flex items-center px-12 bg-navy">
            {slideNr}
          </div>
          <h4 className="uppercase text-2xl font-semibold w-100">{heading}</h4>
        </div>
        <div className="h-40 my-10">
          <p className="font-light mt-12">{description}</p>
        </div>
      </div>
    </div>
    <GatsbyImage image={image} className="twelve:h-auto h-60vh" />
    <div className="sm:px-12 px-5 twelve:hidden mb-12">
      <div className="flex mt-12">
        <div className="sm:text-4xl text-2xl mr-5 text-white py-0 flex items-center sm:px-12 px-6 bg-navy">
          {slideNr}
        </div>
        <h4 className="uppercase text-2xl font-semibold w-100 hyphenate">
          {heading}
        </h4>
      </div>
      <p className="font-light mt-8">{description}</p>
    </div>
  </div>
);

const PrevArrowLine = ({ onClick }) => {
  return (
    <div
      className="absolute justify-between twelve:block hidden h-5 text-navy top-2/4"
      style={{ top: '50%' }}
    >
      <div
        className="flex items-center cursor-pointer relative z-10"
        onClick={onClick}
      >
        <div className="w-20 bg-navy h-2px" />{' '}
        <div className="uppercase tracking-wider text-navy ml-5 font-semibold text-base">
          Tilbake
        </div>
      </div>

      <div />
    </div>
  );
};
const NextArrowLine = ({ onClick }) => {
  return (
    <div
      className="absolute flex justify-between h-5 text-navy inset-0 w-full"
      style={{ top: '50%' }}
    >
      <div />
      <div className="flex items-center cursor-pointer">
        <div
          className="uppercase tracking-wider text-white mr-5 font-semibold text-base"
          onClick={onClick}
        >
          Neste
        </div>
        <div className="w-20 bg-white h-2px" />{' '}
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <>
      <div
        className="absolute transform translate-y-10 translate-y-10 -translate-x-2 sm:-translate-x-10 right-0 bottom-0 lg:scale-90 scale-70 cursor-pointer"
        onClick={onClick}
      >
        <div className="">
          <Icon.SliderArrowBlue />
        </div>
      </div>
    </>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <>
      <div
        className="transform absolute translate-y-10 -translate-x-16 sm:-translate-x-24  lg:mr-5 right-0 bottom-0 rotate-180 lg:scale-90 scale-70 cursor-pointer"
        onClick={onClick}
      >
        <div className="">
          <Icon.SliderArrowBlue />
        </div>
      </div>
    </>
  );
};
