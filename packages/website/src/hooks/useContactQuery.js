import { useStaticQuery, graphql } from 'gatsby';
export const useContactQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanityContactPage {
          pageDescription
          pageTitle
        }
        contactUsImg: file(name: { eq: "contact_us_img" }) {
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
  const { pageDescription, pageTitle } = data.sanityContactPage;
  const { fluid } = data.contactUsImg.childImageSharp;
  return { address, phone, org, email, fluid, pageDescription, pageTitle };
};
