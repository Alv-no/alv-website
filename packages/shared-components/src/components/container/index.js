import React from 'react';

export const Container = ({
  children,
  className,
  removePaddingTop,
  removePaddingBottom,
  removePaddingMobile,
  maxWidth,
  theme = 'white',
}) => {
  // avoid unnecessary margins on mobile when using images
  const removePaddingMobileMapper = {
    top: `pt-0 sm:pt-15`,
    bottom: `pb-0 sm:pb-15`,
  };

  // default classNames based on collapsible input
  const defaultTopSpacing = `pt-12 sm:pt-15`;
  const defaultBottomSpacing = `pb-12 sm:pb-15`;

  // calculated spacings based on removePaddingMobile and collapsible input
  const topSpacing =
    removePaddingMobile === 'top'
      ? removePaddingMobileMapper.top
      : defaultTopSpacing;
  const bottomSpacing =
    removePaddingMobile === 'bottom'
      ? removePaddingMobileMapper.bottom
      : defaultBottomSpacing;

  const colorMapper = {
    navy: 'bg-navy text-white',
    white: 'bg-white text-navy',
    gray: 'bg-servicesgray text-navy',
  };

  return (
    <section
      className={`${className || ''} ${colorMapper[theme]} w-full ${
        !removePaddingTop && topSpacing
      } ${!removePaddingBottom && bottomSpacing} px-5 sm:px-12`}
    >
      <div className={`max-w-${maxWidth || '1200'} mx-auto`}>{children}</div>
    </section>
  );
};
