import React from 'react';
import * as Icon from '../icon';
import Link from 'gatsby-link';

export const Line = ({ children }) => (
  <div className="flex cursor-pointer">
    <div className="w-8 h-2px bg-yellow mr-4 transform translate-y-1 font-semibold" />
    <span className="transform -translate-y-2 uppercase">{children}</span>
  </div>
);

export const Arrow = ({ children, color }) => (
  <div className="font-semibold uppercase w-32 flex text-right items-center tracking-wider">
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
    aria-label={children}
  >
    {children}
  </button>
);

export const CtaArrow = ({ children, onClick, path }) => (
  <Link to={path || ''}>
    <button
      className="flex items-center focus:outline-none tracking-wider"
      type="button"
      onClick={onClick}
      aria-label={children}
    >
      <span className="mr-2 block uppercase font-semibold">{children}</span>{' '}
      <Icon.Arrow />
    </button>
  </Link>
);

export const FormSelect = ({ id, active, children, onClick }) => (
  <div>
    <div
      onClick={onClick}
      className={`flex items-center font-semibold uppercase mb-3 ${
        active === id && 'text-yellow'
      } transition duration-300 hover:text-yellow cursor-pointer`}
      id={id}
    >
      {children}
      <span className="transform ml-3">
        <Icon.Arrow />
      </span>
    </div>
  </div>
);
