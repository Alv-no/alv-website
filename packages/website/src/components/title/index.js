import React from 'react';
import classnames from 'classnames';

const Dot = () => <span className="text-yellow font-bold">.</span>;

export const Title = ({ children, bold = true, align }) => {
  const classNames = classnames(
    'text-white w-full text-4xl tracking-wider uppercase',
    bold ? 'font-bold' : 'font-thin',
    align ? `text-${align}` : 'text-center'
  );

  return (
    <h2 className={classNames}>
      {children}
      <Dot />
    </h2>
  );
};
