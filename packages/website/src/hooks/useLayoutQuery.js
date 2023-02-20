import { useStaticQuery, graphql } from 'gatsby';
export const useLayoutQuery = () => {
  const data = useStaticQuery(
    graphql`
      {
        sanitySiteSettings {
          email
          org
          phone
          address
          brandPackageButton {
            buttonText
            brandPackage {
              asset {
                url
              }
            }
          }
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
        allSanityCompany(filter: { showInNavigation: { eq: true } }) {
          nodes {
            heroHeading
            slug {
              current
            }
            showInNavigation
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
    `,
  );
  const servicePages = data.allSanityServices.edges.map((edge) => edge.node);
  const categoryPages = data.allSanityCategoryPage.nodes;
  const companyPages = data.allSanityCompany.nodes;
  const { site } = data;
  const { address, phone, org, email, brandPackageButton } =
    data.sanitySiteSettings || {};
  return {
    address,
    phone,
    org,
    email,
    brandPackageButton,
    servicePages,
    categoryPages,
    companyPages,
    site,
  };
};
