import React from 'react';
import ColoredSvg from './logo_colored.svg';
import WhiteSvg from './logo_white.svg';

const Logo = ({ src }) => (
  <img height="28px" width="82px" src={src} alt="Alv Logo" />
);

export const Colored = () => <Logo src={ColoredSvg} />;
export const White = () => <Logo src={WhiteSvg} />;
