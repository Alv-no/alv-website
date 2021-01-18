import React, { useState, useEffect } from 'react';
import { VideoFilter } from '../videoFilter';
import { VideoCard } from '../videoCard';
import * as Button from '../button';

export const VideoSection = ({ videos, fallbackImg, tabs }) => {
  // Placeholder until actual videos are loaded in
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sortedVideos, setSortedVideos] = useState(videos);
  const [visibleRows, setVisibleRows] = useState(3);

  console.log(videos);

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
  };

  const updateVideos = (videos) => {
    setSortedVideos(videos);
  };

  useEffect(() => {
    setSortedVideos(videos);
  }, [videos]);

  return (
    <>
      <div className="w-full px-5 sm:px-0">
        {videos && (
          <VideoFilter videos={videos} onChange={updateVideos} tabs={tabs} />
        )}
        <div className="flex justify-center">
          <div
            className="grid gap-x-4 gap-y-10 w-full"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            }}
          >
            {videos.map((video) => {
              return (
                <VideoCard
                  fallbackImg={fallbackImg}
                  title={video.title}
                  thumbnail={video.thumbnails.standard.url}
                />
              );
            })}
          </div>
        </div>
        <div className="flex justify-end">
          <div
            className="font-bold tracking-wider pr-2px mt-12 mb-18"
            onClick={handleViewMoreClick}
          >
            <Button.Line>Se Mer</Button.Line>
          </div>
        </div>
      </div>
    </>
  );
};
