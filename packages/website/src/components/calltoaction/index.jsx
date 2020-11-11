import React from 'react';

const CallToAction = ({ children, onClick, disabled = false }) => (
  <button onClick={onClick} disabled={disabled}>
    {children}-&gt;
  </button>
);

export default CallToAction;
