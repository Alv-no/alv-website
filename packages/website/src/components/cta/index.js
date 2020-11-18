import React from 'react';
import Link from 'gatsby-link';
import { Description } from '../description';
import { CtaButton } from '../ctaButton';
import image from '../../assets/cta.png';

export const Cta = ({ internalLink, buttonText, description }) => (
  <section className="text-white mt-10 mb-7 ">
    <div className="max-w-1200 mx-auto lg:px-5">
      <div className="flex lg:flex-row flex-col-reverse xl:-mr-35">
        <div className="flex-1">
          <h2 className="uppercase tracking-wider text-2xl font-bold lg:mb-16 mb-10">
            Join With Us
          </h2>
          <div className="lg:ml-16 lg:mb-0 mb-10">
            <Description align="left">{description}</Description>
            <div className="h-8 lg:h-12" />
            <CtaButton>{buttonText}</CtaButton>
          </div>
        </div>
        <Link to={internalLink}>
          <div className="flex-1 lg:pl-12 sm:h-100 xs:h-70 h-54 overflow-hidden ">
            <img
              src={image}
              alt="cta"
              className="object-cover lg:transform lg:ml-3 lg:scale-95"
            />
          </div>
        </Link>
      </div>
    </div>
  </section>
);
