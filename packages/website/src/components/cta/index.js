import React from 'react';
import Link from 'gatsby-link';
import { Description } from '../description';
import { CtaButton } from '../ctaButton';
import image from '../../assets/cta.png';

export const Cta = ({ internalLink, buttonText, description }) => (
  <section className="text-white mt-10 mb-7">
    <div className="max-w-1200 mx-auto px-5">
      <div className="flex lg:flex-row flex-col  lg:-mr-35">
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
        <div className="flex-1 lg:pl-15 ">
          <Link to={internalLink}>
            <img
              src={image}
              alt="cta"
              className="object-cover transform scale-95"
            />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
