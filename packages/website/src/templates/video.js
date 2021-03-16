import React, { useState } from 'react';
import Layout from '../layout';
import { EpisodeCards } from '../components/episodeCards';
import { SocialShare } from '../components/socialShare';
import { VideoEpisode } from '../components/videoEpisode';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';

const VideoTemplate = ({ location, pageContext }) => {
  const video = pageContext.video;
  const data = useVideoseriesQuery();
  const [playlist, setPlaylist] = useState(data.playlists[0]);

  useState(() => {
    location.state && setPlaylist(location.state.playlist);
  }, []);

  //

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          <SocialShare title="title" tags="tags" url="url" />
          <VideoEpisode
            title={video.title}
            subtitle=""
            description=""
            videoId={video.videoId}
          />
          {playlist && <EpisodeCards playlist={playlist} tabs={false} />}
        </div>
      </div>
    </Layout>
  );
};

export default VideoTemplate;
