require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

/**
 * @param {string} prefix
 * @param {{}[]} routes
 * @returns {{date: string; path: string}[]}
 * */
function createSiteMap(prefix, routes) {
  return routes.nodes.map((route) => ({
    date: route._updatedAt,
    path: prefix + route.slug.current,
  }));
}

const siteUrl = 'https://www.alv.no';

const tsImport = require('ts-import');
const config = tsImport.loadSync('./src/config.ts').default;

module.exports = {
  siteMetadata: {
    siteUrl,
    title: `Alv Konsulentselskap`,
    description: `Vi bygger Norges mest attraktive konsulentselskap`,
    author: `Alv`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-fastify`,
      options: {
        /* discussed below */
        features: {
          redirects: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies-klyngen`,
      options: {
        googleAnalytics: {
          trackingId: 'UA-145784500-1',
          cookieName: 'gatsby-gdpr-google-analytics',
        },
        googleTagManager: {
          trackingId: 'GTM-NG6G4RZ',
          cookieName: 'gatsby-gdpr-google-tagmanager',
          dataLayerName: 'dataLayer',
          defaultDataLayer: 'dataLayer',
        },
        facebookPixel: {
          pixelId: '4811841485529689', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-facebook-pixel', // default
        },
        linkedin: {
          trackingId: '1500953', // leave empty if you want to disable the tracker
          cookieName: 'gatsby-gdpr-linked-in', // default
        },
      },
      environments: ['production'],
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
        allSanityCompany {
            nodes {
              slug {
                current
              }
            }
        }
        allSanityOpenPostionPage {
            nodes {
              slug {
                current
              }
            }
        }
      }`,
        resolvePages: ({
          allSanityArticle,
          allSitePage,
          allSanityCompany,
          allSanityOpenPostionPage,
        }) => {
          const allMainPages = allSitePage.nodes;

          // remove unwanted /[slug] entry
          allMainPages.pop();

          return [
            ...allSitePage.nodes,
            ...createSiteMap('/blogg/', allSanityArticle),
            ...createSiteMap('/om-oss/', allSanityCompany),
            ...createSiteMap('/jobbe-i-alv/', allSanityOpenPostionPage),
          ];
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
  ],
};
