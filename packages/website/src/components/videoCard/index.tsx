import React from 'react';
import Link from 'gatsby-link';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

type Video = any;
type Playlist = any;

interface Props {
  title: string,
  thumbnail: string,
  fallbackImg: IGatsbyImageData,
  fallbackImgAlt: string,
  video: Video,
  playlist: Playlist,
  onClick?: Function,
  noLink?: boolean,
};

export const VideoCard : React.FC<Props> = ({
  title,
  thumbnail,
  fallbackImg,
  fallbackImgAlt,
  video,
  playlist,
  onClick,
  noLink,
}) => {
  const handleClick = () => {
    if(onClick) onClick(video);
    // eslint-disable-next-line no-restricted-globals
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Link
      to={`/videoserie/${video.playlistSlug}/${video.slug}`}
      state={{ playlist, video, id: video.videoId }}
      className="w-full"
      onClick={noLink ? handleClick : ()=>{}}
    >
      <div className="w-full">
        <div className="bg-black">
          <div className="w-full">
            {thumbnail ? (
              <img src={thumbnail} alt={title} />
            ) : (
              <GatsbyImage image={fallbackImg} alt={fallbackImgAlt} />
            )}
          </div>
        </div>
        <div className="mt-6 uppercase text-video tracking-wider">{title}</div>
      </div>
    </Link>
  );
};
