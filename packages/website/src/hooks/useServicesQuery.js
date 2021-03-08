import { useStaticQuery, graphql } from 'gatsby';
export const useServicesQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanityServices {
          edges {
            node {
              heroDescription
              heroHeading
              id
              slug {
                current
              }
              parentPage {
                slug {
                  current
                }
              }
            }
          }
        }
        sanityOurServicesPage {
          pageDescription
          pageTitle
          description
          heading
          mainImage {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section1Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section1ImageText
          section2Eyebrow
          section2Title
          section3description
          section4title
          section5title
          section6description
          section7description
          section7Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section5Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          section4Image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
              url
            }
          }
          _rawSection2Block
          _rawSection4Block
          _rawSection5Block
        }
      }
    `
  );
  return data;
};
