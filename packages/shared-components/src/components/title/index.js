import classnames from 'classnames';
import React from 'react';

const Dot = () => <span className={`text-theme-accent font-bold`}>.</span>;

export const Title = ({
  children,
  bold = true,
  align = 'text-center',
  color = 'text-white',
  noDot,
  underline,
  classes,
  size,
}) => {
  const classNames = classnames(
    'w-full tracking-wider uppercase text-blog sm:text-4xl',
    align,
    bold ? 'font-bold' : 'font-extralight',
    color,
    underline ? 'text-blog' : 'text-4xl',
    classes || '',
  );

  return (
    <>
      <h2 className={classNames}>
        <span className={`${size || ''}`}>{children}</span>
        {!noDot && <Dot />}
      </h2>
      {underline && <div className="w-12 h-3px bg-theme-accent mt-6px" />}
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
