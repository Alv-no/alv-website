import React from 'react';
import LogoColored from './logo_colored.svg';
import LogoWhite from './logo_white.svg';

interface Props {
  src: typeof LogoColored | typeof LogoWhite;
}

const Logo : React.FC<Props> = ({ src }) => (
  <img height="20px" width="50px" src={src} alt="Alv Logo" />
);

export const Colored = () => <Logo src={LogoColored} />;
export const White = () => <Logo src={LogoWhite} />;
