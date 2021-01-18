import React from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import * as Icon from '../icon';
import { Title } from '../title';
import BackgroundImage from 'gatsby-background-image-es5';
import { useBlogQuery } from '../../hooks/useBlogQuery';
import Slider from 'react-slick';

export const BlogSlider = ({ dot, color, blueText }) => {
  const data = useBlogQuery();
  const articles = data.articles.edges.map((edge) => edge.node);
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow blueText={blueText} />,
    prevArrow: <PrevArrow blueText={blueText} />,
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
            return (
              <>
                <BackgroundImage
                  fluid={
                    (el.mainImage && el.mainImage.asset.fluid) ||
                    data.fallbackImg.childImageSharp.fluid
                  }
                >
                  <Link to={`/blogg/${el.slug.current}`}>
                    <div className="px-5 sm:px-10 w-full bg-navy bg-opacity-20 h-50vh sm:h-full grid grid-cols-slider-md">
                      <div className="w-full h-slider h-full grid grid-cols-slider-xl">
                        <div className="z-30 hidden mb-10 sm:flex items-end text-white text-slider font-semibold sm:w-full">
                          {el.title}
                        </div>
                      </div>
                      <div className="h-full transform -translate-y-10 hidden sm:flex items-end z-20 relative justify-end text-white font-semibold">
                        <Button.CtaArrow>Les mer</Button.CtaArrow>
                      </div>
                    </div>
                  </Link>
                </BackgroundImage>
                <div
                  className="grid"
                  style={{ gridTemplateColumns: '70% auto' }}
                >
                  <div className="text-xl sm:hidden font-semibold relative mt-3 px-5">
                    {el.title}
                  </div>
                  <div className="px-5 w-full sm:hidden mt-5 flex justify-end">
                    <Button.CtaArrow>Les mer</Button.CtaArrow>
                  </div>
                </div>
              </>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick, blueText }) => {
  return (
    <>
      <div
        className="transform absolute mt-20 -translate-y-8 sm:translate-y-18 -translate-x-1 ml-3 sm:ml-0 right-0 bottom-0 scale-60 cursor-pointer"
        style={{ display: 'inline-block', background: '' }}
        onClick={onClick}
      >
        <div className="">
          {blueText ? <Icon.SliderArrowBlue /> : <Icon.SliderArrow />}
        </div>
      </div>
    </>
  );
};

const PrevArrow = ({ onClick, blueText }) => {
  return (
    <>
      <div
        className="transform absolute -translate-y-8 opacity-50 sm:translate-y-18 mr-3 -translate-x-12 ml-2 right-0 mt-20 bottom-0 rotate-180 scale-60 cursor-pointer"
        style={{ display: 'inline-block', background: '' }}
        onClick={onClick}
      >
        <div className="">
          {blueText ? <Icon.SliderArrowBlue /> : <Icon.SliderArrow />}
        </div>
      </div>
    </>
  );
};
