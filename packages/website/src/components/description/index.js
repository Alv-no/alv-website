import React from 'react';

export const Description = ({ children, align }) => (
  <p
    className={`text-white text-${align} text-xl max-w-570 tracking-wider mx-5 sm:mx-auto font-thin`}
  >
    {children}
  </p>
);
