import React from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import {
  Next as NextIcon,
  Prev as PrevIcon,
} from "shared-components/src/components/icon";
import "./videoCarousel.css";

const VideoCarousel = ({ title, description, list }) => {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  return (
    <div className="video-carousel-container -mx-5 pb-16">
      <div className="text-center pb-20 lg:w-4/6 mx-auto">
        <h2 className="text-[32px] leading-[40px] font-bold mb-5">{title}</h2>
        <p className="text-lg leading-[30px]">{description}</p>
      </div>

      <Slider
        dots={false}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        cssEase="linear"
        prevArrow={
          <button className="slick-prev">
            <PrevIcon />
          </button>
        }
        nextArrow={
          <button className="slick-next">
            <NextIcon />
          </button>
        }
        responsive={responsiveSettings}
      >
        {list?.map((videoCard, index) => (
          <VideoCard key={index} {...videoCard} />
        ))}
        {list.map((videoCard, index) => (
          <VideoCard key={index} {...videoCard} />
        ))}
      </Slider>
    </div>
  );
};

const VideoCard = ({ title, description, thumbnail, link }) => (
  <Link to={link} className="block mx-5">
    <div className="flex flex-col">
      <div className="py-8 bg-black">
        <GatsbyImage
          image={thumbnail.asset.gatsbyImageData}
          alt={thumbnail.alt}
          className="w-full aspect-video"
        />
      </div>
      <h3 className="text-xl mt-5 font-bold leading-[26px]">{title}</h3>
      <p className="text-[20px]  mt-2">{description}</p>
    </div>
  </Link>
);

export default VideoCarousel;
