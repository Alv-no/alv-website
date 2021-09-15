import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Title } from '../../../../shared-components/src/components/title';
import { BlockContent } from '../../../../shared-components/src/components/blockContent';

export const Overview = ({ image, blockContent, id }) => {
  return (
    <>
      <div className="w-full bg-white sm:-mt-7" id={id}>
        <div
          className="max-w-1200 mx-auto lg:grid gap-x-10 bg-white py-8"
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          {image && (
            <GatsbyImage
              image={image}
              className="h-80 lg:mt-2 sm:-mt-2 -mt-7"
            />
          )}
          <div className="lg:px-0 lg:mt-0 mt-10 font-light flex flex-col justify-between h-full sm:px-12 px-5">
            <div>
              <Title underline align="left" color="text-navy">
                Oversikt
              </Title>
              <BlockContent blocks={blockContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
