import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { BlockContent } from "shared-components";
import { OvalSimple } from "shared-components/src/components/button";

const Brands = ({ headingRaw, logos, config, buttonLink, buttonText }) => (
  <div>
    {headingRaw && (
      <span className="block text-center mb-8 sm:mb-12 lg:mb-18 text-xl font-thin">
        <BlockContent blocks={headingRaw} config={config} whiteText />
      </span>
    )}
    <div className="grid grid-cols-2 xs:grid-cols-4 gap-10 xs:gap-6 md:gap-10 lg:gap-x-24 lg:gap-y-14 max-w-[1000px] flex-wrap justify-center items-center mx-auto">
      {logos?.map((logo) => (
        <GatsbyImage image={logo.image.asset.gatsbyImageData} alt={logo.alt} />
      ))}
    </div>
    {buttonLink && (
      <div className="flex justify-center mt-18 lg:mt-20">
        <a href={buttonLink}>
          <OvalSimple variant="light" color="white">
            {buttonText}
          </OvalSimple>
        </a>
      </div>
    )}
  </div>
);

export default Brands;
