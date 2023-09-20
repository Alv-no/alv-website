import { useStaticQuery, graphql } from "gatsby";
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
    `
  );

  const servicePages = data.allSanityServices.nodes;
  const categoryPages = generateTemporaryServiceLinks();
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

export const generateTemporaryServiceLinks = () => {
  // Code below is temporary service page-code
  const servicePagesParentLink = "vi-tilbyr";
  const servicePageUrls = [
    {
      name: "Forprosjekter",
      path: "forprosjekter-som-gir-deg-rask-verdi",
      parent: "hva-alv-tilbyr",
    },
    {
      name: "Redde IT-prosjekter",
      path: "a-redde-it-prosjekter-som-ikke-gar-veien",
      parent: "hva-alv-tilbyr",
    },
    {
      name: "Penetrasjonstest",
      path: "sikkerhetstester",
      parent: "hva-alv-tilbyr",
    },
    {
      name: "Kunstig intelligens",
      path: "oppstart-og-klargjoring-av-maskinlaering-og-ai",
      parent: "hva-alv-tilbyr",
    },
    { name: "Enkeltkonsulenter", path: "innleie-av-enkeltkonsulenter" },
  ];

  return servicePageUrls.map((node) => ({
    id: makeUniqueId(node.parent, node.path, node.name),
    parentPage: {
      slug: {
        current: buildPath(servicePagesParentLink, node.parent),
      },
    },
    slug: {
      current: buildPath(node.parent, node.path),
    },

    heroHeading: node.name,
  }));
};

/**
 * @param {...string | undefined} segments
 * */
const buildPath = (...segments) => {
  let completePath = "";

  for (const segment of segments) {
    if (segment === undefined) {
      continue;
    }

    completePath = `${completePath}/${segment}`;
  }

  if (completePath.startsWith("/")) {
    return completePath.substring(1);
  }
  return completePath;
};

/**
 * @param {...string} segments
 * */
const makeUniqueId = (...segments) => {
  return segments.join("_");
};
