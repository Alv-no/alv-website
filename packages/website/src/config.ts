import config from 'gatsby-plugin-config';

const configuration = {
  SANITY_TOKEN: config.SANITY_TOKEN || process.env.SANITY_TOKEN,
  SANITY_PROJECT_ID: 'mnr37rl0',
  SANITY_DATASET:
    config.SANITY_DATASET || process.env.SANITY_DATASET || 'production',
  SANITY_TAG: 'default',
  YT_API: config.YT_API,
};

export default configuration;
