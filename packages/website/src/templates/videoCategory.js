import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { EpisodeCards } from '../components/episodeCards';

const VideoCategoryTemplate = ({ data, pageContext }) => {
  const { title } = pageContext;
  const [playlist, setPlaylist] = useState(null);

  useState(() => {
    setPlaylist(data.allYtVideo.nodes);
  }, []);

  //

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          <h1 className="text-3xl text-center my-10">{title}</h1>
          {playlist && <EpisodeCards playlist={playlist} tabs={false} />}
        </div>
      </div>
    </Layout>
  );
};

export default VideoCategoryTemplate;

// GraphQL Query for article content
export const query = graphql`
  query($slug: String!) {
    allYtVideo(filter: { playlistSlug: { eq: $slug } }) {
      nodes {
        id
        description
        formattedPublishedAt
        title
        slug
        publishedAt
        position
        playlistSlug
        playlistName
        playlistId
        thumbnails {
          standard {
            url
          }
        }
      }
    }
  }
`;
