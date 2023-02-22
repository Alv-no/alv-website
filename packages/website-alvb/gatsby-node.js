const path = require(`path`);

const articleTemplate = path.resolve(`./src/templates/article.js`);
const companyTemplate = path.resolve(`./src/templates/company.js`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const res = await graphql(
    `
      {
        allSanityArticle {
          nodes {
            slug {
              current
            }
          }
        }
        allSanityCompany {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `,
  );
  //
  // Create company pages.
  res.data.allSanityCompany.edges.forEach((edge) => {
    createPage({
      component: companyTemplate,
      path: `/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });

  // Create blog posts pages.
  res.data.allSanityArticle.nodes.forEach((node) => {
    createPage({
      component: articleTemplate,
      path: `/blog/${node.slug.current}`,
      context: {
        slug: node.slug.current,
      },
    });
  });

  // locale pages
  createPage({
    component: path.resolve(`./src/templates/investering.js`),
    path: `/samarbeid-med-oss/investering`,
  });

  const pages = [
    {
      path: "/",
      component: path.resolve(`./src/pages/index.js`),
    },
    {
      path: "/our-projects",
      component: path.resolve(`./src/pages/våre-prosjekter.js`),
    },
    {
      path: "/biobank",
      component: path.resolve(`./src/pages/biobank.js`),
    },
    {
      path: "/our-team",
      component: path.resolve(`./src/pages/vårt-team.js`),
    },
    {
      path: "/collaborate-with-us/invest",
      component: path.resolve(`./src/templates/investering.js`),
    },
    {
      path: "/blog",
      component: path.resolve(`./src/pages/blogg.js`),
    },
    {
      path: "/contact-us",
      component: path.resolve(`./src/pages/kontakt-oss.js`),
    },
  ];

  pages.forEach((page) => createPage(page));
};
