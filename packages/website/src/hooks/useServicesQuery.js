import { useStaticQuery, graphql } from 'gatsby';
export const useServicesQuery = () => {
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
        columnsImg: file(name: { eq: "vitilbyr_side" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageLeft: file(name: { eq: "port_img1" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        imageRight: file(name: { eq: "vitilbyr_prosjektledelse" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
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
