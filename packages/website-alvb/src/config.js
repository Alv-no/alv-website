const config = require('gatsby-plugin-config').default;
let configuration;

switch (config.NODE_ENV) {
  case 'development':
  case 'test':
  case 'production':
  default:
    configuration = {
      SANITY_TOKEN: config.SANITY_TOKEN || process.env.SANITY_TOKEN,
      SANITY_PROJECT_ID: 'f79uyhzd',
      SANITY_DATASET: 'production',
      SANITY_TAG: 'default',
    };
    break;
}

module.exports = configuration;
