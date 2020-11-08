import React from 'react';

const Dot = () => <span className="text-yellow">.</span>;

export const Title = ({ title }) => (
  <h2 className="text-white w-full text-center text-4xl">
    {title.toUpperCase()}
    <Dot />
  </h2>
);
