import React from 'react';
import { Title } from '../title';
import Image from 'gatsby-image';

export const Overview = ({ image }) => {
  return (
    <>
      <div className="w-full bg-white" id="overview">
        <div
          className="max-w-1200 mx-auto lg:grid gap-x-10 bg-white py-8"
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          {<Image fluid={image} className="h-80 lg:mt-0 sm:-mt-6 -mt-7" />}
          <div className="sm:px-12 px-5 lg:mt-0 mt-10 font-light flex flex-col justify-between h-full">
            <div>
              <Title underline align="left" color="text-navy">
                Oversikt
              </Title>
              <p className="mb-8 mt-8 text-lg font-semibold uppercase">
                Lorem ipsum DO LARATE
              </p>
              <p className="mt-8">
                Dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod
                tempor incididunt ut labore et dolore roipi magna.dolor sit
                amet, consectetur adipisifwcing elit, sed do eiusmod tempor
                incididunt ut labore et dolore roipi magna.dolor sit amet,
                consectetur adipisifwcing elit, sed do eiusmod tempor incididunt
                ut labore et dolore roipi magna.
              </p>
              <p className="mb-8">
                Sed do eiusmod tempor incididunt ut labore et dolore roipi
                magna.dolor sit amet, consectetur adipisifwcing elit, sed do
                eiusmod tempor incididunt ut labore et dolore roipi magna.
                Consectetur adipisifwcing elit, sed do eiusmod tempor incididunt
                ut labore et dolore.
              </p>
              <p className="font-semibold text-lg leading-snug">
                Consectetur adipisifwcing elit, sed do eiusmod tempor incididunt
                ut labore et dolore.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
