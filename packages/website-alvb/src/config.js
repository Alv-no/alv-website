// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("gatsby-plugin-config").default;
let configuration;

switch (config.NODE_ENV) {
  case "development":
  case "test":
  case "production":
  default:
    configuration = {
      SANITY_TOKEN: config.SANITY_TOKEN || process.env.SANITY_TOKEN,
      SANITY_PROJECT_ID: "f79uyhzd",
      SANITY_DATASET: "production",
      SANITY_TAG: "default",
      LOCALE: "en",
      HOSTNAME: process.env.GATSBY_HOSTNAME,
      TRANSLATED_DOMAIN: process.env.GATSBY_TRANSLATED_DOMAIN,
    };
    break;
}

module.exports = configuration;
