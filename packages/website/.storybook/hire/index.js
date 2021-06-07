import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import Fade from 'react-reveal/Fade';
import { CtaButton } from '../ctaButton';

export const Hire = ({ data }) => {
  return (
    <div className="bg-navy w-full 2xl:pt-15 pb-5 text-white">
      <div
        className="pr-12 grid max-w-1440 mx-auto"
        style={{ gridTemplateColumns: '50% auto' }}
      >
        <BackgroundImage fluid={data.interview.childImageSharp.gatsbyImageData}>
          <div
            className="flex justify-end items-center bg-black bg-opacity-25"
            style={{ height: '715px' }}
          >
            <div className="-mr-64 w-6/12">
              <Fade>
                <h2 className="uppercase text-slider mb-8 font-semibold tracking-wider text-white ">
                  Sed ut perspici atis unde omnis iste natus.
                </h2>
                <p className="text-xl tracking-wider mb-12 font-light">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut.
                </p>
                <div className="w-full flex justify-end">
                  <div className="-mr-40">
                    <CtaButton>Hyr en alv</CtaButton>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
        </BackgroundImage>
      </div>
    </div>
  );
};
