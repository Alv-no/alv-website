import { useStaticQuery, graphql } from 'gatsby';
export const useContactQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityContactPage {
          pageDescription
          pageTitle
        }
        contactUsImg: file(name: { eq: "contact_us_img2" }) {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
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
    `,
  );
  const { address, phone, org, email } =
    data.allSanitySiteSettings.edges[0].node;
  const { pageDescription, pageTitle } = data.sanityContactPage;
  const image = data.contactUsImg.childImageSharp.gatsbyImageData;
  return { address, phone, org, email, image, pageDescription, pageTitle };
};
