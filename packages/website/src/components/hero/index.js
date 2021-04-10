import React from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import * as Icon from '../icon';
import { Title } from '../title';
import { Typewriter } from '../typewriter';

export const Hero = ({
  videoMp4,
  videoWebm,
  routeUpdate,
  linesAndClasses,
  delay,
}) => {
  const { width } = useWindowDimensions();
  return (
    <div className="bg-navy pb-4 eight:pb-0">
      <div className="w-full flex justify-center h-screen relative flex-col sm:pb-24 sm:z-40 -mt-20 sm:-mt-24 eight:-mt-25">
        {width < 800 && (
          <Title
            bold={false}
            size="lg:text-5xl sm:text-hero-tablet text-hero-sm leading-tight mt-5"
            noDot
          >
            <Typewriter linesAndClasses={linesAndClasses} delay={delay} />
          </Title>
        )}
        {width >= 800 && (
          <video
            autoplay="true"
            className="relative w-screen -mb-8 mx-auto"
            muted
          >
            <source src={videoWebm} type="video/webm" />
            <source src={videoMp4} type="video/mp4" />
          </video>
        )}
        <div className="sm:h-3 h-4" />
        <div className="max-w-3xl w-full mx-auto absolute bottom-0 right-0 flex justify-end inset-x-0">
          <div
            className={`relative z-30 transform ${
              routeUpdate ? 'translate-y-8' : 'translate-y-2'
            }`}
          >
            <Icon.ScrollToContinue />
          </div>
        </div>
      </div>
    </div>
  );
};
