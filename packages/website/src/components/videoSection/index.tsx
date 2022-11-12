import React, { useState, useEffect } from 'react';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import Button from 'shared-components';
import { VideoCard } from '../videoCard';

interface Props {
  fallbackImg: IGatsbyImageData,
  fallbackImgAlt: string,
  playlist: any,
};

export const VideoSection : React.FC<Props> = ({
  fallbackImg,
  fallbackImgAlt,
  playlist
}) => {
  const [sortedVideos, setSortedVideos] = useState(playlist);
  const [visibleRows, setVisibleRows] = useState(12);

  useEffect(() => {
    setSortedVideos(playlist);
  }, [playlist]);

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 8);
  };

  return (
    <>
      <div className="w-full px-5 sm:px-0">
        <div className="flex justify-center">
          <div
            className="grid gap-x-4 gap-y-10 w-full"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            }}
          >
            {sortedVideos && sortedVideos.length > 1
              ? sortedVideos.slice(0, visibleRows).map((video : any) => {
                  return (
                    <VideoCard
                      fallbackImg={fallbackImg}
                      fallbackImgAlt={fallbackImgAlt}
                      title={video.title}
                      video={video}
                      playlist={sortedVideos}
                      thumbnail={video.thumbnail}
                      key={video.videoId}
                    />
                  );
                })
              : null}
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className="font-bold tracking-wider pr-2px mt-12 mb-18"
            onClick={handleViewMoreClick}
            style={{ opacity: visibleRows > sortedVideos.length ? 0 : 1 }}
          >
            <Button.Line>Se Mer</Button.Line>
          </div>
        </div>
      </div>
    </>
  );
};
