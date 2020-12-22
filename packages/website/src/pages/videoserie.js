import React from 'react';
import Layout from '../components/layout';
import { Subtitle } from '../components/subtitle';
import { VideoSection } from '../components/videoSection';
import { VideoHero } from '../components/videoHero';
import { VideoCategory } from '../components/videoCategory';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';

const Videoseries = () => {
  const videos = [1, 2, 3];
  const data = useVideoseriesQuery();
  return (
    <Layout>
      <div className="bg-navy text-white px-6 seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto px-5">
          <VideoHero
            backgroundImage={data.videoserieBg.childImageSharp.fluid}
            thumbnail={data.fallbackImg.childImageSharp.fluid}
            title="Videoserie"
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis mollit"
          />
          <div className="my-10" />
          <Subtitle>Lorem ipsum dolar</Subtitle>
          <VideoSection videos={videos} data={data} />
          <VideoCategory
            title="Dataprat"
            subtitle="Culpa qui officia deserunt mollit anim id est laborum."
            description="Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis."
            thumbnail={data.digitaliseringImg.childImageSharp.fluid}
          />
          <VideoSection allVideos={videos} data={data} notabs />
        </div>
      </div>
    </Layout>
  );
};

export default Videoseries;
