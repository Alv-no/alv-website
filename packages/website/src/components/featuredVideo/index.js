import React from 'react';
import Link from 'gatsby-link';
import * as Icon from '../icon';

export const FeaturedVideo = ({ video, playlist }) => {
  return (
    <>
      {video && (
        <>
          <div className="px-5">
            {/* THIS CODE IS REQUIRED TO MATCH SPEC */}
            {/* COMMENTED OUT BECAUSE IT LOOKS TOO BUSY ON TOP OF THUMBNAIL */}
            {/* <div className="uppercase sm:hidden tracking-wider text-base font-bold ">
              Vår nyeste video
            </div> */}
            <div className="w-12 h-2px sm:hidden bg-yellow mb-6 mt-6px" />
          </div>
        </>
      )}
      <Link
        to={`/videoserie/${video.playlistSlug || 'videoserie'}/${video.slug}`}
        state={{ playlist, video, id: video.videoId }}
      >
        <div
          className="w-full pb-56c"
          style={{
            background:
              'transparent linear-gradient(180deg, #1E92D000 0%, #061634 100%) 0% 0% no-repeat padding-box',
            backgroundImage: video && `url("${video.thumbnails.standard.url}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute right-5 bottom-5">
            <Icon.VideoPlay color="#fff" />
          </div>
        </div>
      </Link>
    </>
  );
};
