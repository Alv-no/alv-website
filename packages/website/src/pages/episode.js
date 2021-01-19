import React from 'react';
import Layout from '../components/layout';
import { VideoSection } from '../components/videoSection';
import { SocialShare } from '../components/socialShare';
import { VideoEpisode } from '../components/videoEpisode';

const Episode = ({ location }) => {
  const passedVideo = location.state ? location.state.video : null;
  const playlist = location.state ? location.state.playlist : null;
  const videoId = (passedVideo && passedVideo.videoId) || 'XFtoMwOtqqU';
  const group =
    playlist && playlist.length > 12 ? playlist.slice(0, 12) : playlist;
  return (
    <Layout>
      <div className="bg-navy text-white px-6 seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto px-5">
          <SocialShare title="title" tags="tags" url="url" />
          <VideoEpisode
            title="Dataprat"
            subtitle="Culpa qui officia deserunt mollit anim id est laborum."
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis."
            videoId={videoId}
          />
          {playlist && <VideoSection videos={group} tabs={false} />}
        </div>
      </div>
    </Layout>
  );
};

export default Episode;
