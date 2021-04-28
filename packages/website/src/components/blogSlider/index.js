import React, { useState } from 'react';
import Link from 'gatsby-link';
import * as Button from '../button';
import * as Icon from '../icon';
import { Title } from '../title';
import BackgroundImage from 'gatsby-background-image-es5';
import { useBlogQuery } from '../../hooks/useBlogQuery';
import Slider from 'react-slick';

export const BlogSlider = ({ dot, color, blueText }) => {
  const data = useBlogQuery();
  const articles = data.articles.edges
    .map((edge) => edge.node)
    .sort((a, b) => (a.rawDate > b.rawDate ? 1 : -1))
    .sort((a) => (a.rawDate ? -1 : 1));

  const [activeSlide, setActiveSlide] = useState(0);
  const updateActive = (next) => {
    setActiveSlide(next);
  };
  const settings = {
    infinite: true,
    slidesToShow: 1,
    centerMode: true,
    slidesToScroll: 1,
    centerPadding: '350px',
    nextArrow: <NextArrowLine />,
    prevArrow: <PrevArrowLine />,
    beforeChange: (current, next) => {
      updateActive(next);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0',
          infinite: true,
          nextArrow: <NextArrow blueText={blueText} />,
          prevArrow: <PrevArrow blueText={blueText} />,
        },
      },
    ],
  };
  return (
    <div className="w-full">
      <div className="px-5 sm:px-12 max-w-1440 mx-auto">
        <Title underline align="left" color={color || 'text-white'} nodot={dot}>
          Blogg
        </Title>
      </div>
      <div className="pt-12 sm:pb-10 max-w-fourteen mx-auto">
        <div>
          <Slider {...settings}>
            {articles.map((article, index) => {
              return (
                <Slide
                  fallbackImg={data.fallbackImg.childImageSharp.fluid}
                  article={article}
                  key={index}
                  blueText={blueText}
                  active={activeSlide === index}
                  prevPos={
                    activeSlide - 1 === index ||
                    (activeSlide === 0 && index === articles.length - 1)
                  }
                  nextPos={
                    activeSlide + 1 === index ||
                    (activeSlide === articles.length - 1 && index === 0)
                  }
                />
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

const NextArrow = ({ onClick, blueText }) => {
  return (
    <>
      <div
        className="transform absolute mt-20 -translate-y-25 sm:translate-y-18 -translate-x-1 ml-3 sm:ml-0 right-0 bottom-0 scale-60 cursor-pointer lg:inset-y-0 lg:mr-14 lg:translate-y-12"
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
        className="transform absolute -translate-y-25 opacity-50 sm:translate-y-18 mr-3 -translate-x-12 ml-2 right-0 mt-20 bottom-0 scale-60 cursor-pointer lg:opacity-100 lg:left-0 lg:ml-9 lg:-translate-y-48 z-30 rotate-180"
        style={{ display: 'inline-block', background: '' }}
        onClick={onClick}
      >
        <div className="lg:hidden">
          {blueText ? <Icon.SliderArrowBlue /> : <Icon.SliderArrow />}
        </div>
      </div>
      <div className="hidden lg:block absolute" onClick={onClick}>
        <div className="">
          {blueText ? <Icon.SliderArrowBlue /> : <Icon.SliderArrow />}
        </div>
      </div>
    </>
  );
};

const Slide = ({
  article,
  fallbackImg,
  blueText,
  active,
  nextPos,
  prevPos,
}) => {
  return (
    <>
      <Link to={`/blogg/${article.slug.current}`} className="w-full pb-56c">
        <div
          className={`${active && ''}  transform ${prevPos && 'scale-80'} ${
            nextPos && 'scale-80'
          }
          ${!active && ''} relativ transition duration-300 ${
            !nextPos && !prevPos && !active && 'opacity-0 pointer-events-none'
          } `}
        >
          <div
            className={`absolute h-full w-full z-40 transition duration-300 ${
              !active && 'bg-opacity-60 bg-navy'
            }`}
          />
          <BackgroundImage
            fluid={
              (article.mainImage && article.mainImage.asset.fluid) ||
              fallbackImg
            }
            className="lg:max-w-685 mx-auto"
          >
            <div
              className={`px-5 sm:px-10 w-full bg-navy bg-opacity-20 relative sm:h-full grid grid-cols-slider-md`}
            >
              <div className="w-full h-slider h-full grid grid-cols-slider-xl">
                <div className="z-30 hidden mb-10 sm:flex items-end text-white text-slider font-semibold sm:w-full">
                  {active && article.title}
                </div>
              </div>
              <div className="h-full transform -translate-y-10 hidden sm:flex items-end z-20 relative justify-end text-white font-semibold">
                {active && <Button.CtaArrow>Les mer</Button.CtaArrow>}
              </div>
            </div>
          </BackgroundImage>
          <div
            className={`grid ${blueText ? 'text-navy' : 'text-white'}`}
            style={{ gridTemplateColumns: '80% auto' }}
          >
            <div className="text-xl sm:hidden font-semibold relative mt-3 px-5">
              <Link to={`/blogg/${article.slug.current}`}>{article.title}</Link>{' '}
              <div className="-mt-8">
                <span className="px-5 w-full text-base sm:hidden relative z-10">
                  <Button.CtaArrow>Les mer</Button.CtaArrow>
                </span>
              </div>
            </div>
            <div className="px-5 w-full sm:hidden -mt-12 relative z-10 flex justify-end"></div>
          </div>
        </div>
      </Link>
    </>
  );
};

const PrevArrowLine = ({ onClick }) => {
  return (
    <div
      className="absolute justify-between h-5 text-navy top-2/4 transform -translate-y-2 z-40"
      style={{ top: '50%' }}
    >
      <div
        className="flex items-center cursor-pointer relative z-20"
        onClick={onClick}
      >
        <div className="w-20 bg-white h-2px" />{' '}
        <div className="uppercase tracking-wider text-white ml-5 font-semibold text-base">
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
      className="absolute flex justify-between h-5 text-navy inset-0 w-full transform -translate-y-2 z-30"
      style={{ top: '50%' }}
    >
      <div />
      <div className="flex items-center cursor-pointer relative z-20">
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
