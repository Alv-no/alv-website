import { graphql, useStaticQuery } from "gatsby";

/** @typedef NavigationLink
 * @property {string | null} link
 * @property {string} title
 * @property {NavigationLink[] | undefined} items
 * */

/** @typedef CompanyPageData
 *  @property { {node: {slug: {current: string}, navigation: boolean, pageTitle: string} }[] } edges
 * */

/**
 * @typedef NavigationResponse
 * @property { CompanyPageData } allSanityCompany
 * @property { { mainMenu: {items: {link: string, title: string}, link: string, title: string}[] } } sanitySiteSettings
 * */

/**
 * @returns { {mainMenu: NavigationLink[]}}
 * */
export const useNavigationQuery = () => {
  /** @type {NavigationResponse} data */
  const data = useStaticQuery(
    graphql`
      {
      allSanityCompany {
          edges {
            node {
              slug {
                current
              }
              pageTitle
              navigation
            }
          }
        }
        sanitySiteSettings {
          mainMenu {
            items {
              link
              title
            }
            link
            title
          }
        }
      }
    `
  );

  const { mainMenu } = data.sanitySiteSettings;

  const productsIndex = mainMenu.findIndex(
    (menuPoint) => menuPoint.title === "PRODUCTS"
  );
  if (productsIndex !== -1) {
    mainMenu[productsIndex].items = mapCompanyPageToNavigationLink(
      data.allSanityCompany
    );
  }

  return { mainMenu };
};

/** @param {CompanyPageData} companyData
 * @returns {NavigationLink[] } */
const mapCompanyPageToNavigationLink = (companyData) => {
  const newEdges = companyData.edges
    .filter((edge) => edge.node.navigation)
    .map((edge) => ({
      link: edge.node.slug.current,
      title: edge.node.pageTitle,
    }));

  return newEdges;
};
