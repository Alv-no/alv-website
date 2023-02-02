import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';

export const SuccessStorySlider = ({ image }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <SuccessStory image={image} />
      <SuccessStory image={image} />
      <SuccessStory image={image} />
    </Slider>
  );
};

const SuccessStory = ({
  title = 'Excepteur sint occaeuiecat cupidatat.',
  story = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut ero labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco poriti laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in uienply voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  quote = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  name = 'Andrew Sanford',
  company = 'Bailey LLC',
  bio = 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  image,
}) => (
  <div className="mx-auto pt-12 pb-12 grid grid-cols-[28%,_auto,_60%] items-center max-w-[1000px]">
    <div className="">
      {image && (
        <GatsbyImage
          image={image}
          className="h-20 w-20 mx-auto block mb-6 rounded-full"
        />
      )}
      <div className="text-lg text-center">
        <p className="font-bold mb-1">{name}</p>
        <p className="mb-4">{company}</p>
        <i className="text-base font-light">{bio}</i>
      </div>
    </div>
    <div />
    <div>
      <h2 className="text-4xl font-bold mb-3">{title}</h2>
      <p className="text-[16px] mb-12 leading-[24px] tracking-[0.96px]">
        {story}
      </p>
      <p className="text-4xl text-[48px] mt-10 lg:mt-0">“</p>
      <p className="italic text-lg mb-5 tracking-widest lg:my-0 my-10 font-bold tracking-[1.2px]">
        {quote}
      </p>
    </div>
  </div>
);
