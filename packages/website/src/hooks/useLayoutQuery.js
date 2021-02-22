import { useStaticQuery, graphql } from 'gatsby';
export const useLayoutQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allSanitySiteSettings {
          edges {
            node {
              address
              phone
            }
          }
        }
        allSanityCategoryPage {
          edges {
            node {
              slug {
                current
              }
              heroHeading
            }
          }
        }
        allSanityServices {
          edges {
            node {
              id
              slug {
                current
              }
              parentPage {
                slug {
                  current
                }
              }
              heroHeading
            }
          }
        }
      }
    `
  );
  const { address, phone } = data.allSanitySiteSettings.edges[0].node;
  const org = '822 70 4042';
  const email = 'hei@alv.no';
  const servicePages = data.allSanityServices.edges.map((edge) => edge.node);
  const categoryPages = data.allSanityCategoryPage.edges.map(
    (edge) => edge.node
  );
  return { address, phone, org, email, servicePages, categoryPages };
};
