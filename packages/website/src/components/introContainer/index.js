import React from 'react';
import { FeaturedCard } from '../featuredCard';

export const IntroContainer = ({ article, children, fallbackImg }) => {
  return (
    <div className="bg-navy w-full pt-5 px-5">
      <div className="max-w-1200 mx-auto flex">
        <div className="flex-1">
          <div className="pl-8 pb-10 mr-10 lg:pr-32 pt-20">{children}</div>
        </div>
        <div className="flex-1 pr-4 pl-2">
          <div className="transform translate-y-16">
            <FeaturedCard {...article} fallbackImg={fallbackImg} />
          </div>
        </div>
      </div>
    </div>
  );
};
