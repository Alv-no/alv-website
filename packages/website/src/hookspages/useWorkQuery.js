import { useStaticQuery, graphql } from 'gatsby';
export const useWorkQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
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
                  fluid {
                    ...GatsbySanityImageFluid
                  }
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
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        street: file(name: { eq: "jobbeialv_1" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        interview: file(name: { eq: "interview" }) {
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
