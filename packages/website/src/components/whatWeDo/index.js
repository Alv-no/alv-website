import React from 'react';
import { Title } from '../title';
import Image from 'gatsby-image';

export const WhatWeDo = ({ data }) => {
  return (
    <>
      <div className="w-full" id="hva-gjor-vi">
        <div className="max-w-1200 mx-auto py-8 sm:px-12 px-5">
          <div className="mb-15">
            <Title underline align="text-left" color="text-navy">
              Hva gjør vi
            </Title>
          </div>
          <div className="lg:ml-15 grid sm:grid-cols-2 gap-10 grid-cols-1">
            {data.map((el) => (
              <Service image={el.heroImage.asset.fluid}>{el.text}</Service>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export const Service = ({ image, children }) => (
  <div className="flex items-center mb-2">
    <div className="mr-8 h-12 w-16 -mt-3">
      <Image fluid={image} alt="service" />
    </div>
    <p className="max-w-90">{children}</p>
  </div>
);
