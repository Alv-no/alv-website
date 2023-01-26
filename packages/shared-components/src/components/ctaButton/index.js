import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import React from 'react';
import { CtaArrow } from '../icon';

export const CtaButton = ({ children, internalLink, color }) => {
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
          <CtaArrow color={color} />
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
