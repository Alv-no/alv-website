require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `mnr37rl0`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        overlayDrafts: true,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Source Sans Pro`,
            subsets: [`latin`],
            variants: [`300`, `400`, `700`],
          },
        ],
      },
    },
  ],
};
