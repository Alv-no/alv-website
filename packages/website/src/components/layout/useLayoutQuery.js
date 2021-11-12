import { useStaticQuery, graphql } from 'gatsby';
export const useLayoutQuery = () => {
  const data = useStaticQuery(
    graphql`
      query {
        sanitySiteSettings(
          id: { eq: "-0f217bb5-f7f6-5420-b7c6-58db2c12b8c7" }
        ) {
          email
          org
          phone
          address
        }
        allSanityCategoryPage {
          nodes {
            slug {
              current
            }
            heroHeading
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
        allSanityCompany {
          nodes {
            heroHeading
            slug {
              current
            }
          }
        }
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );
  const servicePages = data.allSanityServices.edges.map((edge) => edge.node);
  const categoryPages = data.allSanityCategoryPage.nodes;
  const companyPages = data.allSanityCompany.nodes;
  const { site } = data;
  const { address, phone, org, email } = data.sanitySiteSettings;
  return {
    address,
    phone,
    org,
    email,
    servicePages,
    categoryPages,
    companyPages,
    site,
  };
};
