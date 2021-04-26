import React from 'react';
import Link from 'gatsby-link';
import Image from 'gatsby-image';

export const VideoCard = ({
  title,
  thumbnail,
  fallbackImg,
  video,
  playlist,
  onClick,
  noLink,
}) => {
  const handleClick = () => {
    onClick(video);
    // eslint-disable-next-line no-restricted-globals
    window.scrollTo({ top, behavior: 'smooth' });
  };
  return (
    <Link
      to={`/videoserie/${video.playlistslug || 'videoserie'}/${video.slug}`}
      state={{ playlist, video, id: video.videoId }}
      className="w-full"
      onClick={noLink ? handleClick : null}
    >
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
