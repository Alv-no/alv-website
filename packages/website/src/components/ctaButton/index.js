import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import PropTypes from 'prop-types';

export const CtaButton = ({ children, internalLink }) => {
  return (
    <Link to={internalLink}>
      <button className="flex items-center focus:outline-none">
        <div className="sm:mr-6 mr-4 sm:text-cta text-lg text-left sm:text-auto text-white uppercase font-bold">
          {children}
        </div>
        <div className="transform scale-70 sm:scale-100">
          <Icon.CtaArrow />
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
