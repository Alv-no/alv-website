import React from 'react';
import Layout from '../components/layout';
import { VideoSection } from '../components/videoSection';
import { SocialShare } from '../components/socialShare';
import { VideoEpisode } from '../components/videoEpisode';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';

const Episode = () => {
  const videos = [1, 2, 3];
  const data = useVideoseriesQuery();
  return (
    <Layout>
      <div className="bg-navy text-white px-6 seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto px-5">
          <SocialShare title="title" tags="tags" url="url" />
          <VideoEpisode
            title="Dataprat"
            subtitle="Culpa qui officia deserunt mollit anim id est laborum."
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis."
            thumbnail={data.digitaliseringImg.childImageSharp.fluid}
          />
          <VideoSection allVideos={videos} data={data} tabs={false} />
        </div>
      </div>
    </Layout>
  );
};

export default Episode;
