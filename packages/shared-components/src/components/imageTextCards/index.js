import React from "react";
import { Title } from "../title";
import * as Button from "../button";
import { GatsbyImage } from "gatsby-plugin-image";

export const ImageTextCards = ({
  image,
  flip,
  children,
  title,
  description,
  link,
}) => {
  return (
    <>
      <div className="w-full">
        <div className="w-full h-15 bg-white lg:block hidden" />
        <div
          className="max-w-1200 mx-auto lg:flex"
          style={{
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <div className="h-full flex-1">
            {!flip && (
              <GatsbyImage image={image} className="h-40vh lg:h-auto" />
            )}
          </div>
          <div className="sm:px-12 px-5 pb-9 pt-10 lg:pt-0 flex-1 bg-servicesgray lg:bg-white">
            <div className="">
              <Title align="text-left" color="text-navy">
                {title}
              </Title>
              <p className="mb-8 mt-6 font-light tracking-wider">
                {description}
              </p>
            </div>
            <div className={`w-full flex justify-${flip ? "start" : "end"}`}>
              <Button.CtaArrow path={link}>Lær Mer</Button.CtaArrow>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between font-light h-full lg:-mt-20 xl:-mt-28">
          <div className="bg-servicesgray flex">
            <div className="lg:flex max-w-1200 mx-auto">
              <div className="flex-1" />
              <div className="flex-1 grid grid-cols-1 gap-y-4 sm:grid-cols-2 gap-x-6 p-12 lg:pt-12 pt-2">
                {children}
              </div>
            </div>
          </div>
        </div>
        {flip && <GatsbyImage image={image} className="pr-10" />}
      </div>
    </>
  );
};
