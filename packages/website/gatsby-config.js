require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.alv.no`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-postcss',
    'gatsby-background-image-es5',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicons/favicon-32x32.png',

        // WebApp Manifest Configuration
        dir: 'auto',
        lang: 'en-US',
        background: '#fff',
        themeColor: '#fff',
        display: 'standalone',
        orientation: 'any',
        version: '1.0',

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'UA-145784500-1',
        includeInDevelopment: true,

        // Delete line underneath once feature has been successfully implemented

        // function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'UA-145784500-1')
        defaultDataLayer: { platform: 'gatsby' },

        routeChangeEventName: 'gatsbyRouteChange',
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
