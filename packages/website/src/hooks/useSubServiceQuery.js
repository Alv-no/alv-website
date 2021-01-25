import { useStaticQuery, graphql } from 'gatsby';
export const useSubServiceQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        heroImage: file(name: { eq: "vitilbyr_header" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        rolesImg: file(name: { eq: "vitilbyr_digitalisering" }) {
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
        cUtvikler: file(name: { eq: "vitilbyr_header" }) {
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
