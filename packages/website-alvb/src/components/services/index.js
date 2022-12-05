import React from 'react';
import { Title } from 'shared-components';

export const Services = ({ children, title, description }) => (
  <>
    <div className="w-full py-10 lg:py-15 tracking-wider">
      <div className="mx-auto max-w-1200">
        <div className="text-navy">
          <Title align="text-left lg:mb-0 mb-3 hyphenate" color="text-navy">
            {title}
          </Title>
          <div className="font-light ml-10">{description}</div>
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
