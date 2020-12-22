import React from 'react';
import { Title } from '../title';
import * as Button from '../button';

export const ServicesSection = ({ children }) => {
  return (
    <>
      <div className="w-full py-15 tracking-wider">
        <div className="mx-auto max-w-1200">
          <div
            className="grid justify-center text-navy gap-x-4"
            style={{ gridTemplateColumns: '40% auto 15%' }}
          >
            <Title align="left" color="text-navy">
              Systemutvikling
            </Title>
            <div className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim. Lorem ipsum dolor sit amet, consectetur
              adipisifwcing.
            </div>
            <div className="flex justify-end h-full items-center">
              <div className="text-navy flex items-center cursor-pointer">
                <Button.CtaArrow>Lær mer</Button.CtaArrow>
              </div>
            </div>
          </div>
          <div
            className="grid tracking-wider gap-4 mt-12"
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
