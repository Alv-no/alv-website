require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.alv.no`,
    title: `Alv Konsulentselskap`,
    description: `Vi bygger Norges mest attraktive konsulentselskap`,
    author: `Alv`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-145784500-1',
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: '4811841485529689',
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
        projectId: config.SANITY_PROJECT_ID,
        dataset: config.SANITY_DATASET,
        token: config.SANITY_TOKEN,
        graphqlTag: config.SANITY_TAG,
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-linkedin-insight`,
      options: {
        partnerId: '1500953',
        includeInDevelopment: false,
      },
    },
  ],
};
