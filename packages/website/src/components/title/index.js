import React from 'react';

const Dot = () => <span className="text-yellow">.</span>;

export const Title = ({ children }) => (
  <h2 className="text-white w-full text-center text-4xl py-4 font-bold tracking-wider uppercase">
    {children}
    <Dot />
  </h2>
);
