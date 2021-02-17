import { useStaticQuery, graphql } from 'gatsby';
export const useIndexQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        video: sanityLandingPage(videoMp4: { asset: { url: { ne: "" } } }) {
          id
          pageTitle
          videoMp4 {
            asset {
              url
            }
          }
          videoWebm {
            asset {
              url
            }
          }
        }
        stairs: file(name: { eq: "stairs" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        street: file(name: { eq: "street" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        services: file(name: { eq: "vitilbyr_header" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        cta: file(name: { eq: "Alv_fredag" }) {
          childImageSharp {
            fluid(maxWidth: 1500) {
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
        interview: file(name: { eq: "interview" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );
  return data;
};
