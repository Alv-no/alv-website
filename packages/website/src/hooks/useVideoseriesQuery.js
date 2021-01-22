import { useStaticQuery, graphql } from 'gatsby';
export const useVideoseriesQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        fallbackImg: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        videoserieBg: file(name: { eq: "videoserieBg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        digitaliseringImg: file(name: { eq: "vitilbyr_digitalisering" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allYtVideo {
          edges {
            node {
              formattedPublishedAt
              id
              playlistId
              position
              publishedAt(fromNow: false)
              title
              description
              videoId
              thumbnails {
                maxres {
                  url
                }
                standard {
                  url
                }
              }
            }
          }
        }
      }
    `
  );

  // Sort videos into playlists, and in order of "position" property asc.
  const allVideos = data.allYtVideo.edges.map((edge) => edge.node);
  data.playlists = [...new Set(allVideos.map((video) => video.playlistId))]
    .sort((a, b) => (a.length < b.length ? -1 : 1))
    .map(
      (id) =>
        (id = allVideos
          .filter(
            (video) =>
              video.playlistId === id && video.thumbnails.standard !== null
          )
          .sort((a, b) => (a.position > b.position ? -1 : 1)))
    );

  return data;
};
