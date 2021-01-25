import React, { useState, useEffect } from 'react';
import { VideoFilter } from '../videoFilter';
import { VideoCard } from '../videoCard';
import * as Button from '../button';

export const EpisodeCards = ({ fallbackImg, playlist, onClick }) => {
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
        {sortedVideos !== [] && (
          <VideoFilter videos={playlist} onChange={() => console.log('Sort')} />
        )}
        <div className="flex justify-center">
          <div
            className="grid gap-x-4 gap-y-10 w-full"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            }}
          >
            {sortedVideos && sortedVideos.length > 1
              ? sortedVideos.slice(0, visibleRows).map((video) => {
                  return (
                    <VideoCard
                      fallbackImg={fallbackImg}
                      title={video.title}
                      video={video}
                      playlist={sortedVideos}
                      thumbnail={video.thumbnails.standard.url}
                      onClick={onClick}
                      noLink={true}
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
          >
            <Button.Line>Se Mer</Button.Line>
          </div>
        </div>
      </div>
    </>
  );
};
