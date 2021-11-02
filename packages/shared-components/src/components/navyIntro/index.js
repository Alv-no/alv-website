import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from '../title';
import { Description } from '../description';

export const NavyIntro = ({ title, description, image, white, blueDot }) => (
  <>
    {image ? (
      <div className="sm:z-40 -mt-20 -mb-2">
        <BgImage image={image}>
          <div className="bg-navy bg-opacity-75 w-full px-5 py-10 sm:h-620 h-screen flex flex-col justify-center items-center sm:py-16">
            <Title blueDot={blueDot}>
              <span
                className={`xs:inline sm:text-3xl lg:text-4xl hyphenate ${
                  white && 'text-white'
                }`}
              >
                {title}
              </span>
            </Title>
            <div className="sm:h-6 h-4" />
            <div className="flex justify-center">
              <span className="px-6">
                <Description align="center">{description}</Description>
              </span>
            </div>
            <div className="h-32 sm:hidden" />
          </div>
        </BgImage>
      </div>
    ) : (
      <div className="z-50 bg-navy sm:-mt-20 w-full sm:h-auto h-screen sm:block flex justify-center items-center flex-col sm:py-40 overflow-hidden">
        <Title blueDot={blueDot}>
          <span
            className={`xs:inline sm:text-3xl lg:text-4xl hyphenate ${
              white && 'text-white'
            }`}
          >
            {title}
          </span>
        </Title>
        <div className="sm:h-8 h-4" />
        <div className="flex justify-center">
          <span className="px-6">
            <Description align="center">{description}</Description>
          </span>
        </div>
        <div className="h-32 sm:hidden" />
      </div>
    )}
  </>
);
