import { BgImage } from 'gbimage-bridge';
import React from 'react';
import Fade from 'react-reveal/Fade';
import { CtaButton } from '../ctaButton';

export const Hire = ({
  title,
  text,
  image,
  blue,
  darkFade,
  buttonLink,
  buttonText,
}) => {
  return (
    <div className="bg-theme-bg w-full text-theme-text">
      <div
        className="lg:grid mx-auto"
        style={{ gridTemplateColumns: '50% auto' }}
      >
        <BgImage image={image}>
          <div className={`${darkFade && 'bg-black bg-opacity-25'}`}>
            <div className="flex justify-end items-center h-40vh lg:p-0 p-10 lg:h-715" />
            <h2
              className="uppercase text-blog sm:text-blog md:text-4xl font-semibold tracking-wider px-5 pt-32 pb-2 lg:hidden"
              style={{
                color: 'white',
                background:
                  'linear-gradient(180deg, rgba(5,24,56,0) 0%, rgba(5,24,56,0.84) 80%)',
              }}
            >
              {title}
            </h2>
          </div>
        </BgImage>
        <HireCta
          title={title}
          text={text}
          buttonText={buttonText}
          buttonLink={buttonLink}
          blue={blue}
        />
        <div className="lg:hidden mt-3">
          <Fade>
            <p
              className={`text-footer sm:text-xl tracking-wider ${
                buttonText && 'mb-12'
              } font-light`}
            >
              {text}
            </p>
            <div className="w-full flex justify-end">
              {buttonText && (
                <div className="twelve:-mr-40 -mt-5">
                  <CtaButton internalLink={buttonLink}>{buttonText}</CtaButton>
                </div>
              )}
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export const HireAlt = ({ image, text, title, imageText, blue }) => {
  return (
    <div className="bg-theme-bg w-full">
      <div
        className="text-theme-text lg:grid flex flex-col-reverse tracking-wider"
        style={{ gridTemplateColumns: '50% auto' }}
      >
        <div className="w-full mt-24 sm:mt-6 lg:mt-0">
          <h2 className="sm:text-5xl text-4xl font-thin mb-7 uppercase -mt-40 sm:-mt-0 sm:-mt-1 relative z-20">
            {title}
          </h2>
          <p className="text-footer z-20 relative sm:text-xl mb-4 lg:pr-15 w-full font-thin text-xl tracking-wider">
            {text}
          </p>
          <div className="w-full flex sm:mt-18 justify-end">
            <div className="lg:mb-24 sm:mr-12 lg:mr-10 tracking-wider">
              <CtaButton blue={blue} internalLink="/jobbe-i-alv">
                Våre stillinger
              </CtaButton>
            </div>
          </div>
          <div
            className="tracking-wider hidden twelve:absolute leading-tight inset-x-0 text-3xl font-semibold w-7/12 lg:w-5/12 2xl:w-3/12 z-40 uppercase"
            style={{ left: '42%', right: '50%', textAlign: 'left' }}
          >
            {imageText}
          </div>
        </div>
        <div
          className="lg:block sm:grid -mx-5 sm:-mx-12 lg:mx-0"
          style={{ gridTemplateColumns: '50% auto' }}
        >
          <div />
          <BgImage image={image} style={{ backgroundPosition: 'right center' }}>
            <div className="bg-navy bg-opacity-25 pr-56 lg:h-715 h-450 flex items-center">
              <div
                className="tracking-wider transform lg:translate-y-48 sm:block hidden leading-tight -ml-40 eight:-ml-64 eight:-translate-x-0  absolute inset-x-0 text-cta-lg font-semibold w-full z-40 uppercase"
                style={{ maxWidth: '520px' }}
              >
                ALV ER IMIDLERTID IKKE FOR ALLE. SE OM DET PASSER DEG.
              </div>
            </div>
          </BgImage>
        </div>
      </div>
    </div>
  );
};

const HireCta = ({ title, text, buttonText, buttonLink, blue }) => {
  return (
    <div
      className={`twelve:-mr-1/2 lg:flex flex-col hidden lg:-mr-48 w-full px-0 lg:-ml-10 xl:-ml-5 items-center justify-center`}
    >
      <h2 className="uppercase text-slider mb-8 font-semibold tracking-wider lg:w-4/6">
        {title}
      </h2>
      <p
        className={`text-footer sm:text-xl tracking-wider ${
          buttonText ? 'mb-16' : ''
        } font-light lg:w-4/6`}
      >
        {text}
      </p>
      {buttonLink && (
        <div className="-mt-10 lg:w-4/6">
          <CtaButton internalLink={buttonLink} blue={blue}>
            {buttonText}
          </CtaButton>
        </div>
      )}
    </div>
  );
};
