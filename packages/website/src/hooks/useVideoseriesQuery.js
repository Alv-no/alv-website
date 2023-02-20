import { useStaticQuery, graphql } from 'gatsby';
export const useVideoseriesQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityVideoseriesPage {
          pageDescription
          pageTitle
          videoseries {
            slug {
              current
            }
          }
        }
        fallbackImg: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        videoserieBg: file(name: { eq: "videoserieBg" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        digitaliseringImg: file(name: { eq: "vitilbyr_digitalisering" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
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
                gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              }
            }
          }
        }
      }
    `,
  );

  return data;
};
