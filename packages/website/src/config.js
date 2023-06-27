// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("gatsby-plugin-config").default;

/**
 * @typedef {Object} Configuration
 * @property {string|undefined} SANITY_TOKEN
 * @property {string|undefined} SANITY_PROJECT_ID
 * @property {string|undefined} SANITY_DATASET
 * @property {string|undefined} SANITY_TAG
 * @property {string|undefined} YT_API
 * */

/** @type Configuration */
let configuration;
switch (config.NODE_ENV) {
  case "development":
  case "test":
  case "production":
  default:
    configuration = {
      SANITY_TOKEN: config.SANITY_TOKEN || process.env.SANITY_TOKEN,
      SANITY_PROJECT_ID: "mnr37rl0",
      SANITY_DATASET:
        config.SANITY_DATASET || process.env.SANITY_DATASET || "production",
      SANITY_TAG: process.env.SANITY_TAG || "default",
      YT_API: config.YT_API,
    };
    break;
}


module.exports = configuration;
