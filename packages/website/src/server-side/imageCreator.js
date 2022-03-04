import { getGatsbyImageData } from 'gatsby-source-sanity';
import config from '../config';

function resolveNodeType(asset) {
  if (asset._ref) {
    return asset._ref;
  }

  if (asset.id) {
    return { _id: asset.id };
  }

  return asset.url;
}

function imageCreator(asset) {
  const node = resolveNodeType(asset);
  let assets = {};

  if (asset.metadata?.dimensions) {
    assets = {
      ...asset.metadata.dimensions,
    };
  }

  return getGatsbyImageData(node, assets, {
    projectId: config.SANITY_PROJECT_ID,
    dataset: config.SANITY_DATASET,
  });
}

export function createGatsbyImages(element) {
  if (!element) return;
  Object.keys(element).forEach((subElement) => {
    if (typeof element[subElement] === 'object') {
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
      subElement === '__typename' &&
      element[subElement] === 'Image' &&
      element.asset
    ) {
      element.asset.gatsbyImageData = imageCreator(element.asset);
      return;
    }
    if (
      subElement === '_type' &&
      element[subElement] === 'image' &&
      element.asset
    ) {
      element.asset.gatsbyImageData = imageCreator(element.asset);
      return;
    }
  });
}
