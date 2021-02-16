import React from 'react';
import Link from 'gatsby-link';

export const CtaSection = ({ eyebrow, heading, buttonText, internalLink }) => {
  return (
    <section className="px-10 flex justify-center items-center py-10 flex-col bg-servicesgray mt-4">
      <p className="font-light text-center font-lg mb-3">{eyebrow}</p>
      <h4 className="font-semibold text-center text-cta-section mb-4">
        {heading}
      </h4>
      <Link to={internalLink}>
        <button className="px-10 rounded rounded-full font-semibold text-base uppercase py-6px border border-navy border-2">
          {buttonText}
        </button>
      </Link>
    </section>
  );
};
