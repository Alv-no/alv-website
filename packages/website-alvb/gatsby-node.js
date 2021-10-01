const path = require(`path`);

const articleTemplate = path.resolve(`./src/templates/article.js`);

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
};
