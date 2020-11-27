import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';
import PropTypes from 'prop-types';

export const CtaButton = ({ children, internalLink }) => {
  return (
    <Link to={internalLink}>
      <button className="flex items-center focus:outline-none">
        <div className="mr-6 text-cta text-white uppercase font-bold">
          {children}
        </div>
        <div className="">
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
