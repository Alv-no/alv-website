import React from 'react';
import Link from 'gatsby-link';
import { Description } from '../description';
import { CtaButton } from '../ctaButton';
import image from '../../assets/cta.png';

export const Cta = ({ internalLink, buttonText, description }) => (
  <section className="text-white mt-12 mb-7">
    <div className="max-w-1200 mx-auto lg:px-5">
      <div className="flex lg:flex-row flex-col-reverse xl:-mr-35">
        <div className="lg:flex-1 px-6 lg:px-0">
          <h2 className="uppercase tracking-wider text-2xl font-bold sm:mb-15 lg:mb-16 mb-10">
            Bli med oss
          </h2>
          <div className="xl:ml-16 lg:ml-0 sm:ml-18 lg:mb-0 mb-10">
            <Description align="left">{description}</Description>
            <div className="h-8 lg:h-12" />
            <div className="w-full flex justify-between sm:block">
              <div />
              <CtaButton>{buttonText}</CtaButton>
            </div>
          </div>
        </div>
        <Link to={internalLink}>
          <div className="lg:flex-1 lg:pl-12 w-full">
            <img
              src={image}
              alt="cta"
              className="object-cover lg:transform h-54 sm:h-100 mb-10 w-full lg:w-auto lg:ml-3 lg:scale-95"
            />
          </div>
        </Link>
      </div>
    </div>
  </section>
);
