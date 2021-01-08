import React from 'react';
import classnames from 'classnames';

const Dot = () => <span className="text-yellow font-bold">.</span>;

export const Title = ({
  children,
  bold = true,
  align,
  noDot,
  color,
  underline,
  size,
}) => {
  const classNames = classnames(
    'w-full tracking-wider uppercase',
    bold ? 'font-bold' : 'font-thin',
    align ? `text-${align}` : 'text-center',
    color || 'text-white',
    underline ? 'text-blog' : 'text-4xl'
  );

  return (
    <>
      <h2 className={classNames}>
        <span className={`${size || ''}`}>{children}</span>
        {!noDot && <Dot />}
      </h2>
      {underline && <div className="w-12 h-3px bg-yellow mt-2px" />}
    </>
  );
};

export const Subtitle = ({ children }) => {
  return (
    <h3 className="text-about-xl text-white font-thin tracking-wider uppercase">
      {children}
    </h3>
  );
};
