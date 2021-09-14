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
  classes,
  size,
}) => {
  const classNames = classnames(
    'w-full tracking-wider uppercase text-blog sm:text-4xl text-theme-text',
    bold ? 'font-bold' : 'font-extralight',
    align ? `text-${align}` : 'text-center',
    color || 'text-white',
    underline ? 'text-blog' : 'text-4xl',
    classes || null
  );

  return (
    <>
      <h2 className={classNames}>
        <span className={`${size || ''}`}>{children}</span>
        {!noDot && <Dot />}
      </h2>
      {underline && <div className="w-12 h-3px bg-yellow mt-6px" />}
    </>
  );
};

export const Subtitle = ({ children }) => {
  return (
    <h3 className="text-about-xl text-white font-extralight tracking-wider uppercase">
      {children}
    </h3>
  );
};
