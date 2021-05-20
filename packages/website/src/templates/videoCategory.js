import React, { useState } from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { EpisodeCards } from '../components/episodeCards';
import { VideoHero } from '../components/videoHero';

const VideoCategoryTemplate = ({ pageContext }) => {
  console.log(pageContext);
  const [playlist, setPlaylist] = useState(null);
  const {
    category: { videoseriesTitle, seasons, description, heroImage },
  } = pageContext;

  useState(() => {
    setPlaylist(seasons);
  }, []);

  //

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          <VideoHero
            video={seasons[0][0]}
            backgroundImage={heroImage.asset.fluid}
            title={videoseriesTitle}
            description={description}
            playlist={playlist}
          />
          <div className="mt-5" />
          {playlist && <EpisodeCards playlist={playlist[0]} tabs={false} />}
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
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
