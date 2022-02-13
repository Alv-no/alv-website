import { getGatsbyImageData } from 'gatsby-source-sanity';

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
    projectId: 'mnr37rl0',
    dataset: 'production',
  });
}

export function createGatsbyImages(element) {
  if (!element) return;
  Object.keys(element).forEach((subElement) => {
    if (typeof element[subElement] === 'object') {
      createGatsbyImages(element[subElement]);
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
