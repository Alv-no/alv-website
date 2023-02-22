import React from "react";
import Link from "gatsby-link";
import { GatsbyImage } from "gatsby-plugin-image";

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
    window.scrollTo({ top, behavior: "smooth" });
  };
  return (
    <Link
      to={`/videoserie/${video.playlistSlug}/${video.slug}`}
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
              <GatsbyImage image={fallbackImg} />
            )}
          </div>
        </div>
        <div className="mt-6 uppercase text-video tracking-wider">{title}</div>
      </div>
    </Link>
  );
};
