import React from 'react';

export const CtaSection = ({ eyebrow, heading, buttonText }) => {
  return (
    <section className="px-10 flex justify-center items-center py-10 flex-col bg-servicesgray mt-4 mb-8">
      <p className="font-light font-lg mb-3">{eyebrow}</p>
      <h4 className="font-semibold text-cta-section mb-4">{heading}</h4>
      <button className="px-10 rounded rounded-full font-semibold text-base uppercase py-2 border border-navy border-2">
        {buttonText}
      </button>
    </section>
  );
};
