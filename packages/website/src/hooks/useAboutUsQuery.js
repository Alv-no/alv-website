import { useStaticQuery, graphql } from 'gatsby';
export const useAboutUsQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        aboutUsTop: file(name: { eq: "vitilbyr_header" }) {
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
              videoLink
              pdfLink
              image {
                asset {
                  fluid(maxWidth: 600) {
                    src
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
