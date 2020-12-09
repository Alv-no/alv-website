// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const articleTemplate = path.resolve(`./src/templates/article.js`);
  const res = await graphql(
    `
      {
        allSanityArticle {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `
  );

  // Create blog posts pages.
  console.log(res.data.allSanityArticle.edges);
  res.data.allSanityArticle.edges.forEach((edge) => {
    createPage({
      component: articleTemplate,
      path: `/blogg/${edge.node.slug.current}`,
      context: {
        slug: edge.node.slug.current,
      },
    });
  });
};
