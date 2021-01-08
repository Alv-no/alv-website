import React from 'react';
import { Title } from '../title';
import * as Icon from '../icon';

export const Hero = () => (
  <div className="bg-navy w-full text-6xl flex justify-center items-center h-screen -mt-25 p-12 relative">
    <Title bold={false} size="text-6xl leading-tight">
      <div>Vi bygger </div>
      <div className="font-black">Norges mest attraktive</div>
      <span>konsulentselskap</span>
    </Title>
    <div className="sm:h-3 h-4" />
    <Icon.ScrollToContinue />
  </div>
);
