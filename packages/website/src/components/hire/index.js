import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import Fade from 'react-reveal/Fade';
import { CtaButton } from '../ctaButton';

export const Hire = ({ data }) => {
  return (
    <div className="bg-navy w-full text-white">
      <div
        className="sm:pr-12 sm:grid max-w-1440 mx-auto"
        style={{ gridTemplateColumns: '50% auto' }}
      >
        <BackgroundImage fluid={data.interview.childImageSharp.fluid}>
          <div className="flex justify-end items-center bg-black bg-opacity-25 h-60vh twelve:h-715">
            <div className="twelve:-mr-64 sm:block hidden sm:-mr-32 w-full px-0">
              <Fade>
                <h2 className="uppercase text-slider mb-8 font-semibold tracking-wider text-white ">
                  HILS PÅ KONSULENTENE I ALV
                </h2>
                <p className="text-xl tracking-wider mb-16 font-light">
                  Vi har et bredt spekter av kompetanseområder innenfor
                  systemutvikling. Utforsk våre konsulenter, og bli bedre kjent
                  med dine potensielle kolleger eller problemløsere.
                </p>
                <div className="w-full flex justify-end">
                  <div className="twelve:-mr-40 eight:-mr-20 sm:-mr-8 -mt-10">
                    <CtaButton>Våre konsulenter</CtaButton>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </BackgroundImage>
        <div className="px-5 sm:hidden -mt-15">
          <Fade>
            <h2 className="uppercase text-blog sm:text-slider mb-8 font-semibold tracking-wider text-white ">
              HILS PÅ KONSULENTENE I ALV
            </h2>
            <p className="text-xl tracking-wider mb-16 font-light">
              Vi har et bredt spekter av kompetanseområder innenfor
              systemutvikling. Utforsk våre konsulenter, og bli bedre kjent med
              dine potensielle kolleger eller problemløsere.
            </p>
            <div className="w-full flex justify-end">
              <div className="twelve:-mr-40 eight:-mr-20 sm:-mr-8 -mt-10">
                <CtaButton>Våre konsulenter</CtaButton>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};
export const HireAlt = ({ data }) => {
  return (
    <div className="bg-navy w-full">
      <div
        className="max-w-1440 lg:mx-auto px-5 sm:pr-0 sm:pl-12 text-white lg:grid flex flex-col-reverse tracking-wider"
        style={{ gridTemplateColumns: '60% auto' }}
      >
        <div className="w-full mt-10 lg:mt-0">
          <h2 className="text-5xl font-light mb-7 uppercase -mt-32 sm:-mt-1 relative z-20">
            Bli en del av Alv
          </h2>
          <p className="mb-4 lg:pr-15 w-full font-light text-xl lg:mb-15">
            Vi bygger Norges mest attraktive konsulentselskap. For å lykkes med
            dette, trenger vi flere medarbeidere. Vi trenger all kompetanse
            relatert til systemutvikling.
          </p>
          <div className="w-full flex justify-end">
            <div className="lg:mb-24 lg:mt-56 mr-24">
              <CtaButton>Våre stillinger</CtaButton>
            </div>
          </div>
          <div className="h-10 relative" />
          <div
            className="tracking-wider hidden block twelve:absolute leading-tight inset-x-0 text-white text-3xl font-semibold w-7/12 lg:w-5/12 2xl:w-3/12 text-right z-40 uppercase"
            style={{ left: '42%', right: '50%' }}
          >
            ALV ER IMIDLERTID IKKE FOR ALLE. SE OM DET PASSER DEG.
          </div>
        </div>
        <div
          className="lg:block sm:grid -mx-16 lg:mx-0"
          style={{ gridTemplateColumns: '50% auto' }}
        >
          <div />
          <BackgroundImage fluid={data.cta.childImageSharp.fluid}>
            <div className="bg-navy bg-opacity-25 pr-56 lg:h-715 h-450 flex items-center">
              <div className=" tracking-wider sm:block hidden leading-tight -ml-40 eight:-ml-56 absolute inset-x-0 text-white text-3xl font-semibold w-full text-right z-40 uppercase">
                ALV ER IMIDLERTID IKKE FOR ALLE. SE OM DET PASSER DEG.
              </div>
            </div>
          </BackgroundImage>
        </div>
      </div>
    </div>
  );
};
