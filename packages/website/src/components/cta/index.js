import React from 'react';
import Link from 'gatsby-link';
import { Description } from '../description';
import { CtaButton } from '../ctaButton';
import image from '../../assets/cta.png';

export const Cta = ({ internalLink, buttonText, description }) => (
  <section className="text-white mt-10 mb-7">
    <div className="max-w-1200 mx-auto px-5">
      <div className="flex -mr-35">
        <div className="flex-1">
          <h2 className="uppercase tracking-wider text-2xl font-bold mb-16">
            Join With Us
          </h2>
          <div className="ml-16">
            <Description align="left">{description}</Description>
            <div className="h-12" />
            <CtaButton>{buttonText}</CtaButton>
          </div>
        </div>
        <div className="flex-1 pl-15 ">
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
