import React from 'react';
import { FeaturedCard } from '../featuredCard';

export const IntroContainer = ({ article, children }) => {
  return (
    <div className="bg-navy w-full pt-5 nine:px-10 twelve:pl-4">
      <div className="max-w-1200 mx-auto flex twelve:flex-row flex-col nine:justify-center twelve:justify-start">
        <div className="twelve:flex-1">
          <div className="twelve:pl-8 twelve:pb-10 twelve:mr-10 twelve:pr-32 twelve:pt-20 text-center twelve:text-left">
            {children}
          </div>
        </div>
        <div className="twelve:flex-1 twelve:pr-4 twelve:pl-2 twelve:w-auto eight:w-2/3 w-full twelve:mx-0 mx-auto">
          <div className="transform xs:translate-y-16 mt-12 xs:mt-0">
            <FeaturedCard {...article} />
          </div>
        </div>
      </div>
    </div>
  );
};
