import React from 'react';

export const Description = ({ children, align, color, className }) => (
  <p
    className={`${className} text-${
      color || 'white'
    } text-${align} lg:text-xl text-lg leading-relaxed max-w-570 tracking-wider sm:ml sm:font-extralight `}
  >
    {children}
  </p>
);
