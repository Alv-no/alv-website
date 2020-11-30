require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-background-image-es5',
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`source sans pro:200,300,400,700`],
        display: 'swap',
      },
    },
  ],
};
