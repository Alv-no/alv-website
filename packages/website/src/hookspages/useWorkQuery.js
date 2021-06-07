import { useStaticQuery, graphql } from 'gatsby';
export const useWorkQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityCareerPage {
          pageDescription
          pageTitle
          reasonsCarousel {
            mainHeading
            process {
              heading
              description
              image {
                asset {
                  url
                  gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
              }
            }
          }
        }
        allSanityOpenPostionPage {
          nodes {
            slug {
              current
            }
            pageTitle
          }
        }
        stairs: file(name: { eq: "stairs" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        street: file(name: { eq: "jobbeialv_1" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        interview: file(name: { eq: "interview" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    `
  );
  return data;
};
