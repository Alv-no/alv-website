import { getGatsbyImageData } from "gatsby-source-sanity";
import config from "../config";

function resolveNodeType(asset) {
  if (asset._ref) {
    return asset._ref;
  }

  if (asset.id) {
    return { _id: asset.id };
  }

  return asset.url;
}

/** @param {boolean} isGroqResult */
const getImageMetaData = (asset, isGroqResult) => {
  if (isGroqResult) {
    return asset.hotspot;
  }

  return asset.metadata?.dimensions;
};

/** @param {boolean} isGroqResult */
function imageCreator(asset, isGroqResult) {
  const node = resolveNodeType(asset);
  let assets = {};

  if (asset.metadata?.dimensions) {
    assets = {
      ...getImageMetaData(asset, isGroqResult),
    };
  }

  return getGatsbyImageData(node, assets, {
    projectId: config.SANITY_PROJECT_ID,
    dataset: config.SANITY_DATASET,
  });
}

/**
 * Goes through the object recursively and creates `GatsbyImage`-objects
 * @param {object} element - object from sanity
 * @param isGroqResult - specifies that the object comes from a GROQ-request
 *  */
export function createGatsbyImages(element, isGroqResult = false) {
  if (!element) return;
  Object.keys(element).forEach((subElement) => {
    if (typeof element[subElement] === "object") {
      createGatsbyImages(element[subElement]);
      return;
    }

    if (Array.isArray(element)) {
      element.forEach((childElement) => {
        createGatsbyImages(childElement);
      });
      return;
    }

    if (
      subElement === "__typename" &&
      element[subElement] === "Image" &&
      element.asset
    ) {
      element.asset.gatsbyImageData = imageCreator(element.asset, isGroqResult);
      return;
    }
    if (
      subElement === "_type" &&
      element[subElement] === "image" &&
      element.asset
    ) {
      element.asset.gatsbyImageData = imageCreator(element.asset, isGroqResult);
      return;
    }
  });
}
