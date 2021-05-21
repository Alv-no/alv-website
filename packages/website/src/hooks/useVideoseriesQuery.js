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
        allSanityVideoseries {
          nodes {
            id
            description
            featuredVideo
            videoseriesTitle
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
            heroImage {
              asset {
                url
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    `
  );

  return data;
};
