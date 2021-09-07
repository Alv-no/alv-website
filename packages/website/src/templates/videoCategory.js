import React, { useState } from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { VideoHero } from '../components/videoHero';
import { VideoFilter } from '../components/videoFilter';
import { VideoSection } from '../components/videoSection';

const VideoCategoryTemplate = ({ pageContext }) => {
  const {
    category: { videoseriesTitle, seasons, description, heroImage },
  } = pageContext;

  const [sortedVideos, setSortedVideos] = useState(seasons[0]);

  const sortedList = (list) => {
    setSortedVideos(list);
  };

  const seasonTitles = pageContext.category.playlists.process.map(
    (el) => el.title
  );

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          <VideoHero
            video={seasons[0][0]}
            backgroundImage={heroImage.asset.gatsbyImageData}
            title={videoseriesTitle}
            description={description}
            playlist={seasons}
          />
          <div className="mt-5" />
          <VideoFilter
            seasonTitles={seasonTitles}
            seasons={seasons}
            onChange={sortedList}
          />
          <VideoSection playlist={sortedVideos} />
        </div>
      </div>
    </Layout>
  );
};

export default VideoCategoryTemplate;

export const query = graphql`
  query {
    allSanityVideoseries {
      nodes {
        description
        featuredVideo
        slug {
          current
        }
        playlists {
          process {
            description
            id
            title
          }
        }
        id
        videoseriesTitle
        heroImage {
          asset {
            url
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
