import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const VideoCard = ({ slug, title, thumbnail }) => {
  const episode = title.split(' ')[0];
  const onlyTitle = title.split(' ').slice(1).join(' ');
  return (
    <Link to={slug.current} className="w-full">
      <div className="w-full">
        <div className="bg-black py-7">
          <div className="w-full">
            <Image fluid={thumbnail} />
          </div>
        </div>
        <div className="mt-6 uppercase text-video tracking-wider">
          <span className="font-semibold">{episode} </span>
          {onlyTitle}
        </div>
      </div>
    </Link>
  );
};
