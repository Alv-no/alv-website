import React from 'react';
import * as Icon from '../icon';

const CallToAction = ({ children, onClick, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    aria-label={children}
    className="uppercase text-xl font-extralight flex tracking-wider"
  >
    <div className="mr-5 text-theme-text">{children}</div>
    <span className="block transform translate-y-1 translate-x-1">
      <Icon.ContactArrow />
    </span>
  </button>
);

export default CallToAction;
