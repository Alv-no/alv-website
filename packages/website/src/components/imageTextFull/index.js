import React from 'react';
import { Title } from '../title';

import { GatsbyImage } from 'gatsby-plugin-image';
import { BlockContent } from '../blockContent';

export const ImageTextFull = ({ image, flip, blockContent, title, link }) => {
  return (
    <>
      <div className="w-full bg-white">
        <div
          className={`max-w-1440 mx-auto lg:grid gap-x-10 flex ${
            flip ? 'flex-col-reverse' : 'flex-col'
          } bg-white py-10 lg:py-15`}
          style={{
            gridTemplateColumns: '1fr 1fr',
            order: '-1',
            gridAutoFlow: 'dense',
          }}
        >
          {!flip && (
            <GatsbyImage
              image={image}
              className="sm:h-40vh lg:h-auto mb-5 lg:mb-0"
            />
          )}
          <div className="font-light flex flex-col justify-between sm:h-full overflow-hidden">
            <div className="px-5 sm:px-0">
              <Title
                align="left"
                classes="text-nav sm:text-3xl hyphenate"
                color="text-navy"
              >
                {title}
              </Title>
              <BlockContent blocks={blockContent} />
            </div>
            <div
              className={`w-full flex justify-end sm:relative px-5 sm:px-0 lg:justify-${
                flip ? 'start' : 'end'
              }`}
            >
              <Button.CtaArrow path={link}>Lær Mer</Button.CtaArrow>
            </div>
          </div>
          {flip && (
            <GatsbyImage image={image} className="sm:h-40vh lg:h-auto" />
          )}
        </div>
      </div>
    </>
  );
};
