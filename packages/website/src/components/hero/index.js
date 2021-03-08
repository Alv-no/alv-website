import React from 'react';
import * as Icon from '../icon';

export const Hero = ({ videoMp4, videoWebm }) => {
  return (
    <div className="bg-navy w-full flex justify-center h-screen relative flex-col sm:pb-24 sm:z-40 -mt-25">
      {/* <Title
        bold={false}
        size="lg:text-5xl sm:text-hero-tablet text-hero-sm leading-tight"
        noDot
      >
        <Typewriter linesAndClasses={linesAndClasses} delay={delay} />
      </Title> */}
      <video autoplay="true" className="relative w-screen -mb-8 mx-auto" muted>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
      </video>
      <div className="sm:h-3 h-4" />
      <div className="max-w-3xl w-full mx-auto absolute bottom-0 right-0 flex justify-end inset-x-0">
        <div className="transform translate-y-8">
          <Icon.ScrollToContinue />
        </div>
      </div>
    </div>
  );
};
