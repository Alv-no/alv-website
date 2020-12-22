import React, { useState, useEffect } from 'react';
import { VideoFilter } from '../videoFilter';
import { VideoCard } from '../videoCard';
import * as Button from '../button';

export const VideoSection = ({ allVideos, data, tabs }) => {
  // Placeholder until actual videos are loaded in
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videos, setVideos] = useState(allVideos);
  const [visibleRows, setVisibleRows] = useState(3);

  const handleViewMoreClick = () => {
    setVisibleRows(visibleRows + 3);
  };

  const updateVideos = (videos) => {
    setVideos(videos);
  };

  useEffect(() => {
    setVideos([1, 2, 3]);
  }, []);

  const dummySettings = {
    slug: {
      current: '/episode',
    },
    title: 'ALV#050 | HVORDAN OPPNÅ DET BESTE FRA TO ULIKE VERDENER?',
    thumbnail: data.fallbackImg.childImageSharp.fluid,
  };

  return (
    <>
      <div className="w-full">
        {allVideos && (
          <VideoFilter
            allVideos={allVideos}
            onChange={updateVideos}
            tabs={tabs}
          />
        )}
        <div className="flex justify-center">
          <div
            className="grid gap-x-4 gap-y-10 w-full"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            }}
          >
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
            <VideoCard {...dummySettings} />
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
