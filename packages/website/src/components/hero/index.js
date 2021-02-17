import React from 'react';
import { Title } from '../title';
import { Typewriter } from '../typewriter';
import * as Icon from '../icon';

export const Hero = ({ linesAndClasses, delay }) => {
  return (
    <div className="bg-navy w-full flex justify-center items-center h-screen -mt-16 px-5 sm:p-12 relative flex-col sm:pb-24">
      <Title
        bold={false}
        size="lg:text-5xl sm:text-hero-tablet text-hero-sm leading-tight"
        noDot
      >
        <Typewriter linesAndClasses={linesAndClasses} delay={delay} />
      </Title>
      <div className="sm:h-3 h-4 relative w-full" />
      <div className="w-full relative max-w-1600 mx-auto">
        <div className="absolute right-0">
          <Icon.ScrollToContinue />
        </div>
      </div>
    </div>
  );
};
