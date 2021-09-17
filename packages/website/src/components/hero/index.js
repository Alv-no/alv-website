import React from 'react';
import * as Icon from '../../../../shared-components/src//components/icon';
import { Title } from 'shared-components';
import { Typewriter } from '../typewriter';

export const Hero = ({
  videoMp4,
  videoWebm,
  routeUpdate,
  linesAndClasses,
  delay,
}) => {
  return (
    <div className="bg-navy pb-4 sm:pb-0 sm:-mb-10">
      <div className="w-full flex justify-center h-screen relative flex-col sm:pb-24 sm:z-40 -mt-20 sm:-mt-24 eight:-mt-25">
        <Title
          bold={false}
          size="lg:text-5xl sm:text-hero-tablet text-hero-sm leading-tight mt-5 eight:hidden"
          noDot
        >
          <Typewriter linesAndClasses={linesAndClasses} delay={delay} />
        </Title>
        <video
          autoplay="true"
          className="relative w-screen -mb-8 mx-auto eight:block hidden"
          muted
        >
          <source src={videoWebm} type="video/webm" />
          <source src={videoMp4} type="video/mp4" />
        </video>

        <div className="sm:h-3 h-4" />
        <div className="w-full mx-auto absolute bottom-0 flex right-0 justify-end inset-x-0 z-40 transform lg:-translate-y-7">
          <div
            className={`relative z-30 transform ${
              routeUpdate
                ? 'translate-y-12 sm:translate-y-15'
                : 'translate-y-8 eight:translate-y-9'
            }`}
          >
            <Icon.ScrollToContinue />
          </div>
        </div>
      </div>
    </div>
  );
};
