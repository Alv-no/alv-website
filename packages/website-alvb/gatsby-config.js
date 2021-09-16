require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.alvb.no`,
    title: `Eksperimentell kreftbehandling for hund & katt`,
    description: `Vi ønsker å skape et globalt ‘center of excellence’ gjennom vår forskning på eksperimentell kreftbehandling for hund & katt.`,
    author: `Alv`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-197345464-1',
        head: true,
      },
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `mnr37rl0`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        analyzerPort: 7000,
        disable: true,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alv AS`,
        display: `standalone`,
        icon: 'src/favicons/favicon-32x32.png',
        lang: `no`,
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
