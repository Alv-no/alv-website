import { useStaticQuery, graphql } from "gatsby";
export const useEmployeeQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        fallbackImg: file(name: { eq: "fallback" }) {
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
          }
        }
        cta: file(name: { eq: "Alv_fredag" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        ctaFallback: file(name: { eq: "featuredFallback" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );

  return data;
};
