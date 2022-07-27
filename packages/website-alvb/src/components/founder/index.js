import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Founder = ({
  title,
  founderImage,
  signatureImage,
  quote,
  name,
  role,
}) => (
  <div className="mx-auto grid justify-between eight:grid-cols-founder">
    <div className="flex justify-between flex-col h-full py-5">
      <h2 className="uppercase font-thin text-cta-lg mb-6">{title}</h2>
      <p className="text-4xl -mb-4 text-quote mt-10 lg:mt-0">“</p>
      <quote className="italic text-footer mb-5 tracking-widest lg:my-0 my-10">
        {quote}
      </quote>
      <GatsbyImage
        image={signatureImage.asset.gatsbyImageData}
        className="w-2/6 mb-5"
      />
      <div className="font-thin text-lg uppercase">
        <span className="font-bold">
          {name} <span className="ml-2 mr-3">|</span>
        </span>
        {role}
      </div>
    </div>
    <div>
      <GatsbyImage
        image={founderImage.asset.gatsbyImageData}
        className="h-full"
      />
    </div>
  </div>
);
