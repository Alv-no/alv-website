import React from 'react';
import BackgroundImage from 'gatsby-background-image-es5';
import { Title } from '../title';
import { Description } from '../description';

export const NavyIntro = ({ title, description, image, headingSplit }) => (
  <>
    {image ? (
      <div className="sm:z-40 -mt-35 -mb-2">
        <BackgroundImage fluid={image}>
          <div className="bg-navy bg-opacity-75 w-full pt-10 sm:h-50vh h-screen flex flex-col justify-center items-center sm:pt-16 sm:pb-16 pb-4">
            <Title>
              <span
                className={`${
                  headingSplit && 'hidden'
                } xs:inline sm:text-3xl lg:text-4xl`}
              >
                {title}
              </span>
              {headingSplit && (
                <span className="xs:hidden">{headingSplit}</span>
              )}
            </Title>
            <div className="sm:h-6 h-4" />
            <div className="flex justify-center">
              <span className="px-6">
                <Description align="center">{description}</Description>
              </span>
            </div>
            <div className="h-32 sm:hidden" />
          </div>
        </BackgroundImage>
      </div>
    ) : (
      <div className="bg-navy w-full pt-10 sm:h-auto h-screen sm:block flex justify-center items-center flex-col sm:pt-16 sm:pb-35 pb-4 overflow-hidden">
        <Title>
          <span
            className={`${
              headingSplit && 'hidden'
            } xs:inline sm:text-3xl lg:text-4xl`}
          >
            {title}
          </span>
          {headingSplit && <span className="xs:hidden">{headingSplit}</span>}
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
