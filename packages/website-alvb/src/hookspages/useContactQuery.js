import { useStaticQuery, graphql } from 'gatsby';
export const useContactQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanityContactPage {
          section1 {
            image {
              asset {
                gatsbyImageData
              }
            }
            text {
              _type
              en
              no
            }
            title {
              _type
              en
              no
            }
          }
          meta {
            en {
              _type
              metaDescription
              metaTitle
            }
            no {
              _type
              metaDescription
              metaTitle
            }
          }
        }
        sanitySiteSettings {
          address
          phone
          email
          hours
        }
      }
    `,
  );
  const { address, phone, email, hours } = data.sanitySiteSettings;
  const { section1, meta } = data.sanityContactPage;
  return { address, phone, hours, email, section1, meta };
};
