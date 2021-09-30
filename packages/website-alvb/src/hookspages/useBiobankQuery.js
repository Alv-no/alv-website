import { useStaticQuery, graphql } from 'gatsby';
export const useBiobankQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityBioBank {
          description
          heading
          pageDescription
          pageTitle
          _rawSection2Block
          section2Image {
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
