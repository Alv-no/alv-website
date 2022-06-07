import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const Overview = ({ image, children, id }) => {
  return (
    <div
      id={id}
      className="lg:grid gap-x-10"
      style={{
        gridTemplateColumns: '1fr 1fr',
        order: '-1',
        gridAutoFlow: 'dense',
      }}
    >
      {image && (
        <GatsbyImage
          image={image}
          className="h-80"
          style={{ marginTop: '0px' }}
        />
      )}
      <div className="lg:px-0 lg:mt-0 mt-10 font-light flex flex-col justify-between h-full">
        <div>{children}</div>
      </div>
    </div>
  );
};
