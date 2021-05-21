import React, { useState } from 'react';
import Layout from '../layout';
import { VideoCategory } from '../components/videoCategory';
import { VideoSection } from '../components/videoSection';
import { VideoHero } from '../components/videoHero';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';
import { VideoFilter } from '../components/videoFilter';

const Videoseries = ({ pageContext }) => {
  const { videoseries } = pageContext;
  const data = useVideoseriesQuery();

  const pageDescription = data.sanityVideoSeriesPage?.pageDescription || false;
  const pageTitle = data.sanityVideoSeriesPage?.pageTitle || false;

  return (
    <Layout pageTitle={pageTitle} pageDescription={pageDescription}>
      <div className="bg-navy text-white md:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto overflow-hidden">
          {videoseries && (
            <VideoHero
              video={videoseries[0].seasons[0][0]}
              backgroundImage={videoseries[0].heroImage.asset.fluid}
              fallbackImg={data.fallbackImg.childImageSharp.fluid}
              title={videoseries[0].videoseriesTitle}
              description={videoseries[0].description}
              playlist={videoseries[0]}
            />
          )}
          <div className="my-10" />
          {(videoseries || []).map((videoserie, i) => (
            <Videoserie index={i} videoserie={videoserie} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

const Videoserie = ({ videoserie, data, index }) => {
  const [sortedVideos, setSortedVideos] = useState(videoserie.seasons[0]);
  const sortedList = (list) => {
    setSortedVideos(list);
  };
  return (
    <div key={`videoserie-${index}`}>
      {index !== 0 && (
        <VideoCategory
          title={videoserie.videoseriesTitle}
          description={videoserie.description}
          featuredVideo={videoserie.seasons[0][0]}
          fallbackImg={data.digitaliseringImg.childImageSharp.fluid}
          playlist={videoserie}
          slug={videoserie.slug.current}
        />
      )}
      <div className="sm:mx-12 md:mx-0">
        <VideoFilter seasons={videoserie.seasons} onChange={sortedList} />
        <VideoSection
          playlist={sortedVideos}
          fallbackImg={data.fallbackImg.childImageSharp.fluid}
        />
      </div>
    </div>
  );
};

export default Videoseries;
