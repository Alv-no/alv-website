import React from 'react';

export const FilterContainer = ({ children }) => (
  <div className="pt-32 mb-12 bg-white w-full">
    <div className="max-w-1200 mx-auto px-6 lg:px-32">
      <div className="md:h-20 h-25 w-full rounded-lg grid items-center md:py-5 py-6px md:px-6 px-1 text-navy text-base font-semibold tracking-wider grid-cols-filter md:grid-cols-filter-lg shadow-filter gap-y-6px">
        {children}
      </div>
    </div>
  </div>
);
