import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { BlockContent } from "shared-components";

const Multicol = ({ config, bodyRaw, icons, title, eyebrow }) => {
  return (
    <>
      <p className="mb-2 text-xl font-normal">{eyebrow}</p>
      <h2 className="text-[32px] leading-[40px] lg:w-1/2 font-bold">{title}</h2>

      <div className="my-10 font-light text-lg gap-x-15 xl:gap-x-20 leading-[32px] md:multicol-2">
        <BlockContent blocks={bodyRaw} config={config} />
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-12 lg:gap-14 xl:gap-20 justify-center">
        {icons.map((props, index) => (
          <TextAndIcon key={index} {...props} />
        ))}
      </div>
    </>
  );
};

const TextAndIcon = ({ text, image }) => (
  <div className="flex flex-col items-center">
    <div className="w-20 h-20 flex items-center justify-center">
      <GatsbyImage
        className="object-cover"
        image={image.asset.gatsbyImageData}
        alt={image.alt}
      />
    </div>
    <p className="mt-5 text-lg text-center">{text}</p>
  </div>
);

export default Multicol;
