import React from 'react';
import Link from 'gatsby-link';

export const CtaSection = ({
  eyebrow,
  heading,
  buttonText,
  internalLink,
  navy,
}) => {
  return (
    <section
      className={`px-10 flex justify-center items-center flex-col ${
        navy ? 'bg-navy text-white' : 'bg-servicesgray'
      }`}
    >
      <p className="font-light text-center text-lg mb-2">{eyebrow}</p>
      <h4 className="font-semibold text-center text-cta-section mb-5">
        {heading}
      </h4>
      <Link to={internalLink}>
        <button
          type="button"
          aria-label={buttonText}
          className={`px-10 rounded-full font-semibold text-base uppercase py-6px border ${
            navy ? 'border-white' : ' border-navy'
          } border-2`}
        >
          {buttonText}
        </button>
      </Link>
    </section>
  );
};
