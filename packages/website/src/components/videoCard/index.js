import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const VideoCard = ({ title, thumbnail, fallbackImg }) => {
  return (
    <Link to="/episode" className="w-full">
      <div className="w-full">
        <div className="bg-black">
          <div className="w-full">
            {thumbnail ? (
              <img src={thumbnail} alt={title} />
            ) : (
              <Image fluid={fallbackImg} />
            )}
          </div>
        </div>
        <div className="mt-6 uppercase text-video tracking-wider">{title}</div>
      </div>
    </Link>
  );
};
