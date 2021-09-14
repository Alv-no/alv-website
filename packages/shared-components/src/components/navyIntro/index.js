import React from 'react';
import { BgImage } from 'gbimage-bridge';
import { Title } from '../title';
import { Description } from '../description';

export const NavyIntro = ({ title, description, image }) => (
  <>
    {image ? (
      <div className="sm:z-40 -mt-35 -mb-2">
        <BgImage image={image}>
          <div className="bg-navy bg-opacity-75 w-full px-5 pt-10 sm:h-620 h-screen flex flex-col justify-center items-center sm:pt-16 sm:pb-16 pb-4">
            <Title>
              <span className="xs:inline sm:text-3xl lg:text-4xl hyphenate">
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
      <div className="bg-navy w-full pt-10 sm:h-auto h-screen sm:block flex justify-center items-center flex-col sm:pt-16 sm:pb-35 pb-4 overflow-hidden">
        <Title>
          <span className="xs:inline sm:text-3xl lg:text-4xl hyphenate">
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
