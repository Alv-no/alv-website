import React from 'react';
import { Title } from '../title';
import { Description } from '../description';

export const NavyIntro = ({ title, description }) => (
  <div className="bg-navy w-full pt-10 sm:h-auto h-screen sm:block flex justify-center items-center flex-col sm:pt-16 sm:pb-35 pb-4 overflow-hidden">
    <Title>{title}</Title>
    <div className="sm:h-8 h-4" />
    <div className="flex justify-center">
      <span className="px-6">
        <Description align="center">{description}</Description>
      </span>
    </div>
    <div className="h-32 sm:hidden" />
  </div>
);