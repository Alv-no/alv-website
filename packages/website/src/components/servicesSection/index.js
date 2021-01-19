import React from 'react';
import { Title } from '../title';
import * as Button from '../button';

export const ServicesSection = ({ children, title }) => {
  return (
    <>
      <div className="w-full py-10 lg:py-15 tracking-wider">
        <div className="mx-auto max-w-1200">
          <div
            className="lg:grid justify-center text-navy gap-x-6"
            style={{ gridTemplateColumns: '40% auto 13%' }}
          >
            <Title align="left lg:mb-0 mb-3" color="text-navy">
              {title}
            </Title>
            <div className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim. Lorem ipsum dolor sit amet, consectetur
              adipisifwcing.
            </div>
            <div className="flex justify-end h-full items-center lg:mt-0 mt-5">
              <div className="text-navy flex items-center cursor-pointer">
                <Button.CtaArrow>Lær mer</Button.CtaArrow>
              </div>
            </div>
          </div>
          <div
            className="grid tracking-wider gap-4 sm:mt-12 mt-4"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            }}
          >
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
