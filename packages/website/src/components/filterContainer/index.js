import React from 'react';

export const FilterContainer = ({ children }) => (
  <div className="pt-32 mb-12 bg-white w-full">
    <div className="max-w-1200 mx-auto px-32">
      <div
        className="h-20 w-full rounded-lg flex items-center py-5 px-6 text-navy text-base font-semibold tracking-wider"
        style={{ boxShadow: '0px 0px 20px #00000015' }}
      >
        {children}
      </div>
    </div>
  </div>
);
