import { useStaticQuery, graphql } from 'gatsby';
export const useContactQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanitySiteSettings {
          address
          phone
          email
          hours
        }
        sanityContactPage {
          contactImage {
            asset {
              gatsbyImageData
            }
          }
        }
      }
    `
  );
  const { address, phone, email, hours } = data.sanitySiteSettings;
  const { contactImage } = data.sanityContactPage;
  return { address, phone, hours, email, contactImage };
};
