import React from 'react';
import { Title } from '../title';
import * as Button from '../button';

export const ServicesSection = ({ children, title, description, link }) => {
  return (
    <>
      <div className="w-full py-10 lg:py-15 tracking-wider">
        <div className="mx-auto max-w-1200">
          <div
            className="lg:grid w-full justify-center text-navy gap-x-6"
            style={{ gridTemplateColumns: 'auto auto 13%' }}
          >
            <Title align="left lg:mb-0 mb-3" color="text-navy">
              {title}
            </Title>
            <div className="font-light ml-10">{description}</div>
            <div className="flex justify-end h-full items-center lg:mt-0 mt-5">
              <div className="text-navy flex items-center cursor-pointer">
                <Button.CtaArrow path={link}>Lær mer</Button.CtaArrow>
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
