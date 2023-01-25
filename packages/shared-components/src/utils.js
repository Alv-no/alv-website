/* eslint-disable no-console */
import imageUrlBuilder from '@sanity/image-url';

import { window } from 'browser-monads';

export const urlBuilder = (source, config) =>
  imageUrlBuilder({
    projectId: config.SANITY_PROJECT_ID,
    dataset: config.SANITY_DATASET,
  }).image(source);

export const getFilePath = (config) =>
  `https://cdn.sanity.io/files/${config.SANITY_PROJECT_ID}/${config.SANITY_DATASET}/`;

export const handleEmailSubmit = async (productName, email) => {
  const mailApiUrl = window.location.protocol + '//mail-api-alvb.alvb.no/send';

  const data = { productName, email, subject: 'Email from website' };

  const response = await fetch(mailApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).catch((error) => {
    console.error(error);
  });

  return response;
};
