import React from 'react';
import Link from 'gatsby-link';

export const FeaturedCard = ({ children, internalLink, image }) => {
  return (
    <Link to={internalLink}>
      <div className="bg-navy w-full pt-5 px-5">
        <div className="max-w-1200 mx-auto flex">
          <div className="flex-1">
            <div className="pl-8 pb-10 pr-32 pt-20">{children}</div>
          </div>
          <div className="flex-1">
            <img
              src={image}
              alt="Featured article"
              className="h-full w-full object-cover transform translate-y-20"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
