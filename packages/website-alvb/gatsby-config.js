require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    siteUrl: `https://${config.HOSTNAME}`,
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
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-KJX5NRJ',
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AlvB AS`,
        display: `standalone`,
        icon: 'src/favicons/favicon-32x32.png',
        lang: `${config.LOCALE}`,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
};
