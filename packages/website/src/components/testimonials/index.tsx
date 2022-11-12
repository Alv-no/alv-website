import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from 'shared-components';
import Slider from 'react-slick';

type Image = any; // TODO: fixme

interface TestimonialsProps {
  image: Image;
  imageAlt: string;
}

export const Testimonials : React.FC<TestimonialsProps> = ({
  image,
  imageAlt,
}) => {
  const testimonial = {
    name: 'Andrew Sanford',
    company: 'Bailey LLC',
    testimonial:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-12 px-5 sm:px-12 w-full tracking-wider">
      <div className="max-w-1200 mx-auto">
        <Title underline align="left" color="text-navy">
          Kundeomtaler
        </Title>
        <div
          className="pt-4 mx-auto lg:grid gap-x-4"
          style={{ gridTemplateColumns: '45% auto' }}
        >
          <Slider {...settings}>
            <HappyCustomer {...testimonial} image={image} imageAlt={imageAlt} />
            <HappyCustomer {...testimonial} image={image} imageAlt={imageAlt} />
            <HappyCustomer {...testimonial} image={image} imageAlt={imageAlt} />
            <HappyCustomer {...testimonial} image={image} imageAlt={imageAlt} />
            {/* <div className="w-full flex flex-col justify-center items-center text-center text-lg px-32 lg:pb-0 pb-8">
              <div className="lg:mt-15">
                <Image
                  fluid={image}
                  className="rounded rounded-full h-20 w-20 mb-4"
                />
              </div>
              <div className="font-semibold">{testimonial.name}</div>
              <div className="mb-4 font-light">{testimonial.company}</div>
              <div className="font-light italic leading-snug">
                {testimonial.testimonial}
              </div>
            </div> */}
          </Slider>
          <div className="text-navy mt-8 lg:mt-0">
            <h3 className="text-lg sm:text-4xl font-semibold sm:mt-0 mt-15 mb-5 sm:mb-8">
              Excepteur sint occaeuiecat cupidatat.
            </h3>
            <div className="font-light font-base mb-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco poriti
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in uienply voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </div>
            <div className="text-lg font-semibold italic leading-snug">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface HappyCustomerProps {
  name: string;
  company: string;
  testimonial: string;
  image: Image;
  imageAlt: string;
}

const HappyCustomer : React.FC<HappyCustomerProps> = ({
  name,
  company,
  testimonial,
  image,
  imageAlt,
}) => (
  <div className="w-full flex flex-col justify-center items-center text-center text-lg sm:px-15 mt-4 lg:px-32 lg:pb-0 pb-2">
    <div className="lg:mt-15">
      <GatsbyImage
        image={image}
        alt={imageAlt}
        className="rounded rounded-full h-20 w-20 mb-4"
      />
    </div>
    <div className="font-semibold">{name}</div>
    <div className="mb-4 font-light">{company}</div>
    <div className="font-light italic leading-snug">{testimonial}</div>
  </div>
);
