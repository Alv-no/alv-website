import { useStaticQuery, graphql } from 'gatsby';
export const useServicesQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityOurServicesPage {
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
        }
      }
    `
  );
  return data;
};
