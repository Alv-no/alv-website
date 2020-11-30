import React from 'react';
import * as Icon from '../icon';

export const Line = ({ children }) => (
  <div className="flex cursor-pointer">
    <div className="w-8 h-2px bg-yellow mr-4 transform translate-y-1" />
    <span className="transform -translate-y-2 uppercase">{children}</span>
  </div>
);

export const Arrow = ({ children, color }) => (
  <div className="font-semibold uppercase w-32 flex text-right justify-end items-center tracking-wider">
    {children}{' '}
    <span className="ml-2 transform scale-80">
      <Icon.Arrow color={color} />
    </span>
  </div>
);

export const OvalSimple = ({ children, onClick }) => (
  <button
    className="uppercase tracking-wider text-base px-8 py-6px text-navy border border-bordergray rounded-full font-semibold focus:outline-none"
    style={{ border: '2px solid #E3E3E3' }}
    onClick={onClick}
  >
    {children}
  </button>
);
