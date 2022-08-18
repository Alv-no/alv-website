import React from 'react';
import Link from 'gatsby-link';
import { CtaArrow } from '../icon';
import PropTypes from 'prop-types';

export const CtaButton = ({ children, internalLink, blue }) => {
  return (
    <Link to={internalLink}>
      <button
        type="button"
        aria-label={children}
        className="flex items-center focus:outline-none"
      >
        <div className="sm:mr-6 mr-4 sm:text-cta text-lg text-left sm:text-auto text-theme-text uppercase font-bold">
          {children}
        </div>
        <div className="transform scale-70 sm:scale-100 text-theme-text stroke-current text-theme-text">
          <CtaArrow blue={blue} />
        </div>
      </button>
    </Link>
  );
};

CtaButton.propTypes = {
  internalLink: PropTypes.string,
};

CtaButton.defaultProps = {
  internalLink: '/',
};
