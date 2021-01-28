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
              email
              org
            }
          }
        }
      }
    `
  );
  const {
    address,
    phone,
    org,
    email,
  } = data.allSanitySiteSettings.edges[0].node;
  const { fluid } = data.contactUsImg.childImageSharp;
  return { address, phone, org, email, fluid };
};
