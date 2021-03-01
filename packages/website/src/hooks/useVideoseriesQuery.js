import { useStaticQuery, graphql } from 'gatsby';
export const useVideoseriesQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityVideoseriesPage {
          pageDescription
          pageTitle
        }
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
              publishedAt
              title
              description
              videoId
              thumbnails {
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
    .map(
      (id) =>
        (id = allVideos
          .filter(
            (video) =>
              video.playlistId === id && video.thumbnails.standard !== null
          )
          .sort((a, b) => (a.position > b.position ? -1 : 1)))
    )
    .filter(
      (list) =>
        !list.some(
          (video) =>
            video.title.includes('#PROMO') || video.title.includes('#ANSATTE')
        )
    )
    .sort((a, b) => (a.length > b.length ? -1 : 1));

  return data;
};
