import React, { useState } from 'react';
import Layout from '../layout';
import { graphql } from 'gatsby';
import { EpisodeCards } from '../components/episodeCards';
import { VideoHero } from '../components/videoHero';
import slugify from 'slugify';

const VideoCategoryTemplate = ({ pageContext, data }) => {
  const { title, videos, slug } = pageContext;
  const [playlist, setPlaylist] = useState(null);
  const image = data.allSanityVideoseries.nodes[0].heroImage.asset.fluid;
  const { description } = data.allSanityVideoseries.nodes[0];

  useState(() => {
    const formattedVideos = videos.map((video) => {
      video.playlistSlug = slug;
      video.playlistName = title;
      video.slug = slugify(video.title.replace(' |', ''), {
        remove: /[*+~.()|#'"!:@?]/,
        lower: true,
      });
      return video;
    });
    setPlaylist(formattedVideos);
  }, []);

  //

  return (
    <Layout>
      <div className="bg-navy text-white seven:px-10 overflow-hidden">
        <div className="max-w-1200 mx-auto">
          <VideoHero
            video={videos[0]}
            backgroundImage={image}
            fallbackImg={image}
            title={title}
            description={description}
            playlist={playlist}
          />
          <div className="mt-5" />
          {playlist && <EpisodeCards playlist={playlist} tabs={false} />}
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
