import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import * as Button from '../button';
import { Title } from '../title';

export const ImageTextFull = ({ image, flip, title, link, children }) => {
  return (
    <>
      <div
        className={`lg:grid gap-x-10 flex ${
          flip ? 'flex-col-reverse' : 'flex-col'
        } bg-white`}
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
              align="text-left"
              classes="text-nav sm:text-3xl hyphenate mb-5"
              color="text-navy"
            >
              {title}
            </Title>
            {children}
          </div>
          <div
            className={`w-full flex justify-end sm:relative px-5 sm:px-0 lg:justify-${
              flip ? 'start' : 'end'
            }`}
          >
            <Button.CtaArrow path={link}>Lær Mer</Button.CtaArrow>
          </div>
        </div>
        {flip && <GatsbyImage image={image} className="sm:h-40vh lg:h-auto" />}
      </div>
    </>
  );
};
