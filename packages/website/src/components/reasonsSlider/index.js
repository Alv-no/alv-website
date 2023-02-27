import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as styles from "./sliderStyles.module.css";
import Slider from "react-slick";

export const ReasonsSlider = ({ mainHeading, slides }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };
  return (
    <div className={styles.container}>
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
  <div className="max-w-[1280px] mx-auto twelve:grid grid-cols-[65%_auto] tracking-wider">
    <div className="twelve:pr-30 xl:pl-0 sm:px-12 px-5">
      <h3 className="uppercase text-4xl leading-snug font-semibold twelve:w-100 w-full mb-10 -ml-2px hyphenate leading-[1em]">
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
    <GatsbyImage
      image={image}
      className="twelve:h-auto twelve:aspect-square sm:h-50vh"
    />
    <div className="sm:px-12 px-5 twelve:hidden sm:mb-12">
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
