import React from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import * as Icon from '../icon';
import { Title } from '../title';
import BackgroundImage from 'gatsby-background-image-es5';
import { useBlogQuery } from '../../hooks/useBlogQuery';
import Slider from 'react-slick';

export const BlogSlider = ({ dot, color }) => {
  const data = useBlogQuery();
  const articles = data.articles.edges.map((edge) => edge.node);
  console.log(articles);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="px-5 sm:px-12 max-w-1440 mx-auto">
        <Title underline align="left" color={color || 'text-navy'} nodot={dot}>
          Blogg
        </Title>
      </div>
      <div className="pt-12 mx-auto gap-x-7">
        <Slider {...settings}>
          {articles.map((el) => {
            console.log(el);
            return (
              <BackgroundImage fluid={el.mainImage.asset.fluid}>
                <Link to={`/blogg/${el.slug.current}`}>
                  <div className="pb-10 px-10 w-full h-full grid grid-cols-slider-md">
                    <div className="w-full h-slider h-full grid grid-cols-slider-md">
                      <div className="flex items-end text-white text-slider font-semibold w-full">
                        {el.title}
                      </div>
                    </div>
                    <div className="h-full flex items-end justify-end text-white font-semibold">
                      <Button.CtaArrow>Les mer</Button.CtaArrow>
                    </div>
                  </div>
                </Link>
              </BackgroundImage>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick }) => {
  return (
    <>
      <div
        className="transform absolute mt-20 translate-y-18 right-0 bottom-0 scale-60 cursor-pointer"
        style={{ display: 'inline-block', background: '' }}
        onClick={onClick}
      >
        <div className="">
          <Icon.SliderArrow />
        </div>
      </div>
    </>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <>
      <div
        className="transform absolute opacity-50 translate-y-18 mr-1 -translate-x-12 right-0 mt-20 bottom-0 rotate-180 scale-60 cursor-pointer"
        style={{ display: 'inline-block', background: '' }}
        onClick={onClick}
      >
        <div className="">
          <Icon.SliderArrow />
        </div>
      </div>
    </>
  );
};
