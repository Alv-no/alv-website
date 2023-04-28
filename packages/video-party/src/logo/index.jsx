import React from "react";
import Image from "next/image";
import LogoColored from "./logo_colored.svg?url";
import LogoWhite from "./logo_white.svg?url";

const Logo = ({ src }) => (
  <Image className="logo" height={60} src={src} alt="Alv Logo" />
);

export const Colored = () => <Logo src={LogoColored} />;
export const White = () => <Logo src={LogoWhite} />;
