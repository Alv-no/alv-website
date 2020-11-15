import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';

export const CtaButton = ({ children, internalLink }) => (
  <Link to={internalLink}>
    <button className="flex items-center focus:outline-none">
      <div className="mr-6 text-cta uppercase font-bold">{children}</div>
      <div className="">
        <Icon.CtaArrow />
      </div>
    </button>
  </Link>
);
