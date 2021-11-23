const path = require(`path`);

const articleTemplate = path.resolve(`./src/templates/article.js`);

const extraLanguages = ['en'];
const createLocalePage = (page, createPage) => {
  const { context, ...rest } = page;
  createPage({
    ...rest,
    context: {
      ...context,
      locale: process.env.LOCALE,
    },
  });
  if (extraLanguages.length) {
    extraLanguages.forEach((code) => {
      const { path, context, ...rest } = page;
      createPage({
        ...rest,
        path: `/${code}${path}`,
        context: {
          ...context,
          locale: code,
        },
      });
    });
  }
};

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
      }
    `
  );

  // Create blog posts pages.
  res.data.allSanityArticle.nodes.forEach((node) => {
    createPage({
      component: articleTemplate,
      path: `/blogg/${node.slug.current}`,
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
      path: '/',
      component: path.resolve(`./src/pages/index.js`),
    },
    {
      path: '/our-projects',
      component: path.resolve(`./src/pages/våre-prosjekter.js`),
    },
    {
      path: '/biobank',
      component: path.resolve(`./src/pages/biobank.js`),
    },
    {
      path: '/our-team',
      component: path.resolve(`./src/pages/vårt-team.js`),
    },
    {
      path: '/collaborate-with-us/invest',
      component: path.resolve(`./src/templates/investering.js`),
    },
    {
      path: '/blog',
      component: path.resolve(`./src/pages/blogg.js`),
    },
    {
      path: '/contact-us',
      component: path.resolve(`./src/pages/kontakt-oss.js`),
    },
  ];
  pages.forEach((page) => createLocalePage(page, createPage));
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  deletePage(page);
  createLocalePage(page, createPage);
};
