import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const ImagesSideBySide = ({ imageLeft, imageRight }) => (
  <div className="-mt-12">
    <div className="grid grid-cols-2 max-w-1200 mx-auto">
      <GatsbyImage image={imageLeft} />
      <GatsbyImage image={imageRight} />
    </div>
  </div>
);
