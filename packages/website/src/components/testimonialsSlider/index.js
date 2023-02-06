import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import config from '../../config';
import { BlockContent, Title } from 'shared-components';

const TestimonialSlider = ({ testimonials, heading }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="w-full tracking-wider">
      <div className="max-w-1200 mx-auto">
        <Title underline align="text-left" color="text-navy">
          {heading}
        </Title>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id}>
              <Testimonial {...testimonial} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const Testimonial = ({ _rawBody, ...bioProps }) => (
  <div className="mx-auto pt-12 pb-12 sm:grid grid-cols-[28%,_auto,_60%] items-center max-w-[1000px]">
    <Bio {...bioProps} />
    <div />
    <BlockContent blocks={_rawBody} config={config} />
  </div>
);

const Bio = ({ name, company, image, bio }) => (
  <div className="mb-5 sm:-mb-2 flex flex-col items-center">
    {image && (
      <GatsbyImage
        image={image.asset.gatsbyImageData}
        className="h-20 w-20 block mb-4 rounded-full"
      />
    )}
    <div className="text-lg text-center">
      <p className="font-bold mb-1">{name}</p>
      <p className="mb-4">{company}</p>
      <i className="text-base font-light tracking-normal">{bio}</i>
    </div>
  </div>
);

export default TestimonialSlider;
