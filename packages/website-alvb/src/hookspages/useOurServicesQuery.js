import { useStaticQuery, graphql } from 'gatsby';
export const useOurServicesQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityOurServicesPage {
          description
          heading
          pageDescription
          pageTitle
          section2Title
          section3Title
          section2Image {
            asset {
              gatsbyImageData
            }
          }
          section3Image {
            asset {
              gatsbyImageData
            }
          }
          _rawSection2Block
          _rawSection3Block
          _rawSection4Block
          mainImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    `
  );
  return data;
};
