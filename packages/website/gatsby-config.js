require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteUrl = 'https://www.alv.no';

const config = require('./src/config');

module.exports = {
  siteMetadata: {
    siteUrl,
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
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
      {
        allSitePage {
          nodes {
            path
          }
        }
        allSanityArticle {
          nodes {
            slug {
              current
            }
          }
        }
      }`,
        resolvePages: ({ allSanityArticle, allSitePage }) => {
          const bloggPathPrefix = '/blogg/';

          const allArticles = allSanityArticle.nodes.map((article) => {
            return {
              date: article._updatedAt,
              path: bloggPathPrefix + article.slug.current,
            };
          });

          const allMainPages = allSitePage.nodes;

          // remove unwanted /[slug] entry
          allMainPages.pop();

          return [...allSitePage.nodes, ...allArticles];
        },
        resolveSiteUrl: () => siteUrl,
        serialize: ({ path, date }) => {
          const entry = {
            url: siteUrl + path,
            changefreq: 'daily',
            priority: 0.5,
          };

          // assign priority values
          if (path === '/') entry.priority = 1;
          if (path.includes('/vi-tilbyr/')) entry.priority = 0.9;
          if (path === '/jobbe-i-alv/') entry.priority = 0.8;
          if (path.includes('/jobbe-i-alv/')) entry.priority = 0.8;
          if (path.includes('/blogg')) entry.priority = 0.7;
          if (path.includes('/ansatte')) entry.priority = 0.6;
          if (path === '/videoserie/') entry.priority = 0.5;
          if (path.includes('/videoserie/')) entry.priority = 0.4;
          if (path.includes('/om-oss')) entry.priority = 0.4;

          // remove trailing slash
          if (entry.url.endsWith('/'))
            entry.url = entry.url.slice(0, entry.url.length - 1);

          // assign lastmodified date
          if (date) {
            entry.lastmod = date;
          }

          return entry;
        },
      },
    },
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
