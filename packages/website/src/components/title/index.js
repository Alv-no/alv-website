import React from 'react';
import classnames from 'classnames';

const Dot = () => <span className="text-yellow font-bold">.</span>;

export const Title = ({ children, bold = true }) => {
  const classNames = classnames(
    'text-white w-full text-center text-4xl py-4 tracking-wider uppercase',
    bold ? 'font-bold' : 'font-thin'
  );

  return (
    <h2 className={classNames}>
      {children}
      <Dot />
    </h2>
  );
};
