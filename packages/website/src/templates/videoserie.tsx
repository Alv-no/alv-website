import React, { useState } from 'react';
import Layout from '../components/layout';
import { VideoCategory } from '../components/videoCategory';
import { VideoSection } from '../components/videoSection';
import { VideoHero } from '../components/videoHero';
import { useVideoseriesQuery } from '../hooks/useVideoseriesQuery';
import { VideoFilter } from '../components/videoFilter';
import { useLayoutQuery } from '../hooks/useLayoutQuery';

interface VideoserieProps {
  videoserie : any;
  data: any;
  index: number;
}

const Videoserie : React.FC<VideoserieProps> = ({ videoserie, data, index }) => {
  const [sortedVideos, setSortedVideos] = useState(videoserie.seasons[0]);
  const sortedList = (list : any) => {
    setSortedVideos(list);
  };

  const seasonTitles = videoserie.playlists.process.map((el : any) => el.title);

  return (
    <div key={`videoserie-${index}`}>
      {index !== 0 && (
        <VideoCategory
          title={videoserie.videoseriesTitle}
          description={videoserie.description}
          featuredVideo={videoserie.seasons[0][0]}
          subtitle=""
          playlist={videoserie}
          slug={videoserie.slug.current}
        />
      )}
      <div className="sm:mx-12 md:mx-0">
        <VideoFilter
          seasonTitles={seasonTitles}
          seasons={videoserie.seasons}
          onChange={sortedList}
        />
        <VideoSection
          playlist={sortedVideos}
          fallbackImg={data.fallbackImg.childImageSharp.gatsbyImageData}
          fallbackImgAlt="" /* todo */
        />
      </div>
    </div>
  );
};

interface VideoseriesProps {
  pageContext : any;
}

const Videoseries : React.FC<VideoseriesProps> = ({ pageContext }) => {
  const { videoseries } = pageContext;
  const data = useVideoseriesQuery();
  const layoutData = useLayoutQuery();

  const sortingArr = data.sanityVideoseriesPage.videoseries.map(
    (el : any) => el.slug.current
  );

  const filteredVideoseries = videoseries
    .filter((el : any) => sortingArr.includes(el.slug.current))
    .sort(
      (a : any, b : any) =>
        sortingArr.indexOf(a.slug.current) - sortingArr.indexOf(b.slug.current)
    );

  const pageDescription = data.sanityVideoSeriesPage?.pageDescription || false;
  const pageTitle = data.sanityVideoSeriesPage?.pageTitle || 'Videoserie';
  const featuredVideo = filteredVideoseries[0];
  const featuredVideoSeason =
    featuredVideo.seasons[featuredVideo.seasons.length - 1];

  return (
    <Layout
      layoutData={layoutData}
      whiteIcons
      pageTitle={pageTitle}
      pageDescription={pageDescription}
    >
      <div className="bg-navy text-white md:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto overflow-hidden">
          {filteredVideoseries && (
            <VideoHero
              backgroundImage={featuredVideo.heroImage.asset.gatsbyImageData}
              fallbackImg={data.fallbackImg.childImageSharp.gatsbyImageData}
              description={featuredVideo.description}
              title={featuredVideo.videoseriesTitle}
              video={featuredVideoSeason[0]}
              playlist={featuredVideo}
            />
          )}
          <div className="my-10" />
          {(filteredVideoseries || []).map((videoserie : any, i : number) => (
            <Videoserie index={i} videoserie={videoserie} data={data} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videoseries;
