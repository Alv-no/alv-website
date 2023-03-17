import React from "react";
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./videoCarousel.css";

const VideoCarousel = (props) => {
  const { title, description, list } = props;

  return (
    <div className="video-carousel-container -mx-5">
      <div className="text-center pb-20 lg:w-4/6 mx-auto">
        <h2 className="text-[32px] leading-[40px] font-bold mb-5">{title}</h2>
        <p className="text-lg leading-[30px]">{description}</p>
      </div>
      <div>
        <Slider
          dots={false}
          infinite={true}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          cssEase="linear"
          nextArrow={
            <button className="slick-next">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 12L8.5 18.5V5.5L15.5 12Z"
                  fill="#F9F9F9"
                  stroke="#F9F9F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          }
          prevArrow={
            <button className="slick-prev">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.5 12L15.5 5.5V18.5L8.5 12Z"
                  fill="#F9F9F9"
                  stroke="#F9F9F9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          }
          responsive={[
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
              },
            },
          ]}
        >
          {list?.map((videoCard, index) => (
            <VideoCard key={index} {...videoCard} />
          ))}
          {list.map((videoCard, index) => (
            <VideoCard key={index} {...videoCard} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

const VideoCard = (props) => {
  const { title, description, thumbnail, link } = props;

  return (
    <Link to={link} className="block mx-5">
      <div className="flex flex-col">
        <div className="py-8 bg-black">
          <GatsbyImage
            image={thumbnail.asset.gatsbyImageData}
            alt={thumbnail.alt}
            className="w-full h-[200px] object-cover"
          />
        </div>
        <h3 className="text-xl mt-5 font-bold leading-[26px]">{title}</h3>
        <p className="text-[20px]  mt-2">{description}</p>
      </div>
    </Link>
  );
};

export default VideoCarousel;
