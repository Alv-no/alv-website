import React from 'react';
import Link from 'gatsby-link';
import { GatsbyImage } from "gatsby-plugin-image";
import { Description } from '../description';
import { CtaButton } from '../ctaButton';

export const Cta = ({
  internalLink,
  buttonText,
  description,
  image,
  fallback,
}) => {
  return (
    <section className="text-white mt-12">
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
                <CtaButton internalLink={internalLink}>{buttonText}</CtaButton>
              </div>
            </div>
          </div>
          <Link to={internalLink} className="lg:flex-1 sm:-mr-5 xl:mr-0">
            <div className="lg:pl-12 w-full">
              <GatsbyImage
                image={image || fallback}
                alt="cta"
                className="object-cover lg:transform h-54 sm:h-100 mb-10 w-full lg:w-full lg:ml-3 lg:scale-95" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
