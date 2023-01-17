import { graphql, useStaticQuery } from 'gatsby';
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
          description
          heading
          pageDescription
          pageTitle
          section7link {
            slug {
              current
            }
            heroHeading
          }
          section6link {
            heroHeading
            slug {
              current
            }
          }
          section5link {
            slug {
              current
            }
            heroHeading
          }
          section4link {
            slug {
              current
            }
            heroHeading
          }
          section3link {
            slug {
              current
            }
            heroHeading
          }
          section3description
          section2Title
          section2Eyebrow
          section7description
          section6description
          mainImage {
            asset {
              url
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
            }
          }
          section1Image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              url
            }
          }
          section4Image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              url
            }
          }
          section5Image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
              url
            }
          }
          section7Image {
            asset {
              gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
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
