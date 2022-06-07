import React from 'react';

export const Container = ({
  children,
  className,
  collapsible,
  collapsibleTop,
  collapsibleBottom,
  theme = 'white',
  mobileImagePos,
  style,
}) => {
  // determine spacing types, either padding or margin
  const spacingTypeTop = collapsibleTop || collapsible ? 'm' : 'p';
  const spacingTypeBottom = collapsibleBottom || collapsible ? 'm' : 'p';

  // to avoid unnecessary margins on mobile when using images
  const mobileImagePosMapper = {
    top: `${spacingTypeTop}t-0 sm:${spacingTypeTop}t-15`,
    bottom: `${spacingTypeBottom}b-0 sm:${spacingTypeBottom}b-15`,
  };

  // default classNames based on collapsible input
  const defaultTopSpacing = `${spacingTypeTop}t-12 sm:${spacingTypeTop}t-15`;
  const defaultBottomSpacing = `${spacingTypeBottom}b-12 sm:${spacingTypeBottom}b-15`;

  // calculated spacings based on mobileImagePos and collapsible input
  const topSpacing =
    mobileImagePos === 'top' ? mobileImagePosMapper.top : defaultTopSpacing;
  const bottomSpacing =
    mobileImagePos === 'bottom'
      ? mobileImagePosMapper.bottom
      : defaultBottomSpacing;

  const colorMapper = {
    navy: 'bg-navy text-white',
    white: 'bg-white text-navy',
    gray: 'bg-servicesgray text-navy',
  };

  return (
    <section
      style={style}
      className={`${className || ''} ${
        colorMapper[theme]
      } w-full ${topSpacing} ${bottomSpacing}`}
    >
      <div className="px-5 sm:px-12 lg:px-0 max-w-1200 mx-auto overflow-hidden">
        {children}
      </div>
    </section>
  );
};
