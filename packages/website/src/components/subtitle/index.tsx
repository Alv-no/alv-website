import React from 'react';

interface Props {
  children?: React.ReactNode
}

export const Subtitle : React.FC<Props> = ({
  children
}) => (
  <h2 className="text-blog uppercase tracking-wider font-semibold">
    {children}
  </h2>
);
