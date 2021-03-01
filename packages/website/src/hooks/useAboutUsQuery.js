import { useStaticQuery, graphql } from 'gatsby';
export const useAboutUsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityAboutPage {
          pageDescription
          pageTitle
        }
        aboutUsTop: file(name: { eq: "contact_us_img2" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aboutUsLower: file(name: { eq: "about_us_img2" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        sliderImg: file(name: { eq: "systemutvikling_img" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services: file(name: { eq: "about_us_img2" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fallbackImg: file(name: { eq: "fallback" }) {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
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
                  fluid(maxWidth: 600) {
                    ...GatsbySanityImageFluid
                  }
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
