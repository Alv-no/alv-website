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
      }
    `
  );
  return data;
};
