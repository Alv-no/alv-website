import { useStaticQuery, graphql } from 'gatsby';
export const useContactQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        contactUsImg: file(name: { eq: "about_us_img2" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        allSanitySiteSettings {
          edges {
            node {
              address
              phone
            }
          }
        }
      }
    `
  );
  const { address, phone } = data.allSanitySiteSettings.edges[0].node;
  const { fluidImage } = data.contactUsImg.childImageSharp.fluid;
  return { address, phone, fluidImage };
};
