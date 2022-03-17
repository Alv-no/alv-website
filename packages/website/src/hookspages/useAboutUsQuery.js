import { useStaticQuery, graphql } from 'gatsby';
export const useAboutUsQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        aboutUsTop: file(name: { eq: "contact_us_img2" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        aboutUsLower: file(name: { eq: "about_us_img2" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        sliderImg: file(name: { eq: "systemutvikling_img" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        services: file(name: { eq: "about_us_img2" }) {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
        fallbackImg: file(name: { eq: "fallback" }) {
          childImageSharp {
            gatsbyImageData(width: 600, layout: CONSTRAINED)
          }
        }
        allSanityEmployee {
          edges {
            node {
              tags {
                tag
              }
              firstname
              lastname
              id
              title
              experience
              video {
                asset {
                  url
                }
              }
              image {
                asset {
                  gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
                }
              }
              bio {
                _rawChildren
                style
                list
              }
            }
          }
        }
      }
    `
  );
  return data;
};
