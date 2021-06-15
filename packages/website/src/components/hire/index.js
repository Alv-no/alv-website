import React from 'react';
import Fade from 'react-reveal/Fade';
import { CtaButton } from '../ctaButton';
import { BgImage } from 'gbimage-bridge';

export const Hire = ({ title, text, image }) => {
  return (
    <div className="bg-navy w-full text-white">
      <div
        className="sm:pr-12 sm:grid max-w-1440 mx-auto"
        style={{ gridTemplateColumns: '50% auto' }}
      >
        <BgImage image={image}>
          <div className="flex justify-end items-center bg-black bg-opacity-25 h-60vh sm:h-auto lg:p-0 p-10 lg:h-715">
            <div className="twelve:-mr-64 sm:block hidden sm:-mr-0 md:-mr-20 lg:-mr-48 w-full transform sm:translate-x-64 2xl:translate-x-80 px-0">
              <Fade>
                <h2 className="uppercase text-slider mb-8 font-semibold tracking-wider text-white sm:w-5/6 lg:w-4/6">
                  {title}
                </h2>
                <p className="text-footer sm:text-xl tracking-wider mb-16 font-light sm:w-full lg:w-4/6">
                  {text}
                </p>
                <div className="w-full flex justify-end">
                  <div className="twelve:mr-0 lg:-ml-10 -mt-10">
                    <CtaButton internalLink="/ansatte">
                      Våre konsulenter
                    </CtaButton>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </BgImage>
        <div className="px-5 sm:hidden -mt-20 xs:-mt-15 ">
          <Fade>
            <h2 className="uppercase text-blog sm:text-slider mb-8 font-semibold tracking-wider text-white ">
              HILS PÅ KONSULENTENE I ALV
            </h2>
            <p className="text-footer sm:text-xl tracking-wider mb-16 font-light">
              Vi har et bredt spekter av kompetanseområder innenfor
              systemutvikling. Utforsk våre konsulenter, og bli bedre kjent med
              dine potensielle kolleger eller problemløsere.
            </p>
            <div className="w-full flex justify-end">
              <div className="twelve:-mr-40 eight:-mr-20 sm:-mr-8 -mt-10">
                <CtaButton internalLink="/ansatte">Våre konsulenter</CtaButton>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export const HireAlt = ({ image, text, title, imageText }) => {
  return (
    <div className="bg-navy w-full lg:mb-10">
      <div
        className="max-w-1440 lg:mx-auto px-5 sm:pr-0 sm:pl-12 text-white lg:grid flex flex-col-reverse tracking-wider"
        style={{ gridTemplateColumns: '60% auto' }}
      >
        <div className="w-full mt-24 sm:mt-6 lg:mt-0">
          <h2 className="sm:text-5xl text-4xl font-light mb-7 uppercase -mt-40 sm:-mt-0 sm:-mt-1 relative z-20">
            {title}
          </h2>
          <p className="text-footer z-20 relative sm:text-xl mb-4 lg:pr-15 w-full font-light text-xl">
            {text}
          </p>
          <div className="w-full flex sm:mt-15 justify-end">
            <div className="lg:mb-24 sm:mr-12 lg:mr-10 tracking-wider">
              <CtaButton internalLink="/jobbe-i-alv">Våre stillinger</CtaButton>
            </div>
          </div>
          <div className="h-10 relative" />
          <div
            className="tracking-wider hidden twelve:absolute leading-tight inset-x-0 text-white text-3xl font-semibold w-7/12 lg:w-5/12 2xl:w-3/12 text-right z-40 uppercase"
            style={{ left: '42%', right: '50%' }}
          >
            {imageText}
          </div>
        </div>
        <div
          className="lg:block sm:grid -mx-5 sm:-mx-16 lg:mx-0"
          style={{ gridTemplateColumns: '50% auto' }}
        >
          <div />
          <BgImage image={image} style={{ backgroundPosition: 'right center' }}>
            <div className="bg-navy bg-opacity-25 pr-56 lg:h-715 h-450 flex items-center">
              <div className=" tracking-wider transform lg:translate-y-48 sm:block hidden leading-tight -ml-40 eight:-ml-64 eight:-translate-x-0 xl:-translate-x-20 absolute inset-x-0 text-white text-cta-lg font-semibold w-full text-right z-40 uppercase">
                ALV ER IMIDLERTID IKKE FOR ALLE. SE OM DET PASSER DEG.
              </div>
            </div>
          </BgImage>
        </div>
      </div>
    </div>
  );
};
