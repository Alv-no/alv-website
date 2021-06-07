import React from 'react';
import { Title } from '../title';
import * as Button from '../button';
import { GatsbyImage } from "gatsby-plugin-image";

export const ImageTextCards = ({
  image,
  flip,
  children,
  title,
  description,
  link,
}) => {
  return <>
    <div className="w-full">
      <div className="w-full h-15 bg-white" />
      <div
        className="max-w-1200 mx-auto lg:grid bg-servicesgray pb-15"
        style={{
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div className="h-full bg-servicesgray">
          {!flip && (
            <GatsbyImage image={image} className="h-40vh lg:h-auto" style={{ maxHeight: '' }} />
          )}
        </div>
        <div className="font-light h-full">
          <div className="flex flex-col justify-between">
            <div className="sm:px-12 px-5 pb-9 pt-10 lg:pt-0 bg-white">
              <div className="">
                <Title align="left" color="text-navy">
                  {title}
                </Title>
                <p className="mb-8 mt-6">{description}</p>
              </div>
              <div
                className={`w-full flex justify-${flip ? 'start' : 'end'}`}
              >
                <Button.CtaArrow path={link}>Lær Mer</Button.CtaArrow>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 px-10 lg:pt-10 gap-x-4 justify-center bg-servicesgray ">
              {children}
            </div>
          </div>
          {flip && <GatsbyImage image={image} className="pr-10" />}
        </div>
      </div>
    </div>
  </>;
};
