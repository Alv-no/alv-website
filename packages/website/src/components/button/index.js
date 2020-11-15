import React from 'react';

export const Line = ({ children }) => (
  <div className="flex cursor-pointer">
    <div className="w-8 h-2px bg-yellow mr-4 transform translate-y-1" />
    <span className="transform -translate-y-2 uppercase">{children}</span>
  </div>
);
